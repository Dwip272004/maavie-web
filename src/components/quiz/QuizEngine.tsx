"use client";

import { useCallback, useReducer, useState } from "react";
import { FLOW } from "./flow";
import { initialState, reducer } from "./engine";
import { Header } from "./screens/Header";
import { QuestionScreen } from "./screens/QuestionScreen";
import { InterstitialScreen } from "./screens/InterstitialScreen";
import { LoadingScreen } from "./screens/LoadingScreen";
import { ResultScreen } from "./screens/ResultScreen";
import { ThanksScreen } from "./screens/ThanksScreen";

export function QuizEngine() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [submitted, setSubmitted] = useState(false);
  const s = FLOW[state.step];

  const onBack = useCallback(() => dispatch({ type: "BACK" }), []);
  const onAdvance = useCallback(() => dispatch({ type: "ADVANCE" }), []);
  const onAnswerSingle = useCallback(
    (optionIndex: number) => dispatch({ type: "ANSWER_SINGLE", stepIndex: state.step, optionIndex }),
    [state.step]
  );
  const onAnswerMulti = useCallback(
    (optionIndices: number[]) =>
      dispatch({ type: "ANSWER_MULTI", stepIndex: state.step, optionIndices }),
    [state.step]
  );

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-[600px] flex-col px-7 pb-11">
      <Header step={state.step} canGoBack={!submitted && state.history.length > 0} onBack={onBack} />

      {submitted ? (
        <ThanksScreen />
      ) : s.type === "single" || s.type === "multi" ? (
        <QuestionScreen
          key={state.step}
          step={s}
          onAnswerSingle={onAnswerSingle}
          onAnswerMulti={onAnswerMulti}
        />
      ) : s.type === "inter" ? (
        <InterstitialScreen key={state.step} step={s} onComplete={onAdvance} />
      ) : s.type === "loading" ? (
        <LoadingScreen key={state.step} onComplete={onAdvance} />
      ) : (
        <ResultScreen
          scores={state.scores}
          answers={state.answers}
          profile={state.profile}
          onSubmitted={() => setSubmitted(true)}
        />
      )}
    </div>
  );
}
