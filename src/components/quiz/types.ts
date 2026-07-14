export type Scores = {
  skin: number;
  hair: number;
  energy: number;
  sleep: number;
  mood: number;
};

export type ScoreKey = keyof Scores;

export type Option = {
  t: string;
  /** average age represented by this band, used for age-based phase heuristics */
  av?: number;
  /** cycle-stage ordinal, used for phase decision rules */
  v?: number | null;
  w?: Partial<Scores>;
};

export type QuestionStep = {
  type: "single" | "multi";
  key: string;
  label: string;
  title: string;
  help?: string;
  options: Option[];
};

export type InterChip = { cl: string; cs?: string };

export type InterStep = {
  type: "inter";
  kicker: string;
  title: string;
  body: string[];
  chips?: InterChip[];
  /** auto-advance duration in ms */
  dur?: number;
};

export type LoadingStep = { type: "loading" };
export type ResultStep = { type: "result" };

export type FlowStep = QuestionStep | InterStep | LoadingStep | ResultStep;

export type Profile = {
  ageNum: number | null;
  ageBand: string | null;
  cycleStage: number | null;
  cycleText: string | null;
  hotFlush: boolean;
  symptoms: string[];
  goals: string[];
};

export type Answers = Record<string, string | string[]>;

export type MaavieProfile = {
  phase: string;
  topAreas: [string, string];
  topArea: string;
  scores: Scores;
  answers: Answers;
  profile: Profile;
};

export const EMPTY_SCORES: Scores = {
  skin: 0,
  hair: 0,
  energy: 0,
  sleep: 0,
  mood: 0,
};

export const EMPTY_PROFILE: Profile = {
  ageNum: null,
  ageBand: null,
  cycleStage: null,
  cycleText: null,
  hotFlush: false,
  symptoms: [],
  goals: [],
};
