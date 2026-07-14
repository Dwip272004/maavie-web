import { FLOW } from "./flow";
import { EMPTY_PROFILE, EMPTY_SCORES } from "./types";
import type { Answers, Profile, QuestionStep, ScoreKey, Scores } from "./types";

export type EngineState = {
  step: number;
  scores: Scores;
  /** per-step score contribution, so re-answering a step after going back replaces rather than adds to scores */
  contributions: Record<number, Partial<Scores>>;
  answers: Answers;
  profile: Profile;
  history: number[];
};

export const initialState: EngineState = {
  step: 0,
  scores: { ...EMPTY_SCORES },
  contributions: {},
  answers: {},
  profile: { ...EMPTY_PROFILE },
  history: [],
};

export type EngineAction =
  | { type: "ANSWER_SINGLE"; stepIndex: number; optionIndex: number }
  | { type: "ANSWER_MULTI"; stepIndex: number; optionIndices: number[] }
  | { type: "ADVANCE" }
  | { type: "BACK" };

function applyContribution(
  scores: Scores,
  contributions: Record<number, Partial<Scores>>,
  stepIndex: number,
  weight: Partial<Scores> | undefined
): { scores: Scores; contributions: Record<number, Partial<Scores>> } {
  const next = { ...scores };
  const prev = contributions[stepIndex];
  if (prev) {
    for (const k of Object.keys(prev) as ScoreKey[]) {
      next[k] -= prev[k] ?? 0;
    }
  }
  if (weight) {
    for (const k of Object.keys(weight) as ScoreKey[]) {
      next[k] += weight[k] ?? 0;
    }
  }
  return { scores: next, contributions: { ...contributions, [stepIndex]: weight ?? {} } };
}

export function reducer(state: EngineState, action: EngineAction): EngineState {
  switch (action.type) {
    case "ANSWER_SINGLE": {
      const s = FLOW[action.stepIndex] as QuestionStep;
      const opt = s.options[action.optionIndex];
      const { scores, contributions } = applyContribution(
        state.scores,
        state.contributions,
        action.stepIndex,
        opt.w
      );
      const answers = { ...state.answers };
      if (s.key) answers[s.key] = opt.t;
      const profile = { ...state.profile };
      if (s.key === "age") {
        profile.ageNum = opt.av ?? null;
        profile.ageBand = opt.t;
      }
      if (s.key === "cycle") {
        profile.cycleStage = opt.v ?? null;
        profile.cycleText = opt.t;
      }
      return {
        ...state,
        scores,
        contributions,
        answers,
        profile,
        history: [...state.history, action.stepIndex],
        step: action.stepIndex + 1,
      };
    }
    case "ANSWER_MULTI": {
      const s = FLOW[action.stepIndex] as QuestionStep;
      const chosen = action.optionIndices.map((i) => s.options[i]);
      const chosenTexts = chosen.map((o) => o.t);
      const combinedWeight: Partial<Scores> = {};
      for (const o of chosen) {
        if (!o.w) continue;
        for (const k of Object.keys(o.w) as ScoreKey[]) {
          combinedWeight[k] = (combinedWeight[k] ?? 0) + (o.w[k] ?? 0);
        }
      }
      const { scores, contributions } = applyContribution(
        state.scores,
        state.contributions,
        action.stepIndex,
        combinedWeight
      );
      const answers = { ...state.answers };
      if (s.key) answers[s.key] = chosenTexts;
      const profile = { ...state.profile };
      if (s.key === "symptoms") {
        profile.symptoms = chosenTexts;
        profile.hotFlush = chosenTexts.includes("Hot flushes");
      }
      if (s.key === "goals") profile.goals = chosenTexts;
      return {
        ...state,
        scores,
        contributions,
        answers,
        profile,
        history: [...state.history, action.stepIndex],
        step: action.stepIndex + 1,
      };
    }
    case "ADVANCE":
      return { ...state, history: [...state.history, state.step], step: state.step + 1 };
    case "BACK": {
      if (state.history.length === 0) return state;
      const history = [...state.history];
      const step = history.pop()!;
      return { ...state, history, step };
    }
    default:
      return state;
  }
}
