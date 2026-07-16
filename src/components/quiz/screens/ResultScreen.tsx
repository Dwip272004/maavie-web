"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  buildReflectionBits,
  computePhase,
  cycleReflectionText,
  lvl,
  statFor,
} from "../logic";
import type { Answers, MaavieProfile, Profile, ScoreKey, Scores } from "../types";

type ResultScreenProps = {
  scores: Scores;
  answers: Answers;
  profile: Profile;
  onSubmitted: () => void;
};

const AREAS: [string, ScoreKey][] = [
  ["Skin", "skin"],
  ["Hair", "hair"],
  ["Energy", "energy"],
  ["Sleep", "sleep"],
  ["Mood", "mood"],
];

function Reflection({ answers, profile }: { answers: Answers; profile: Profile }) {
  const bits = buildReflectionBits(answers);
  const cycleBit = cycleReflectionText(profile);

  return (
    <>
      {bits.length === 0 ? (
        "You are noticing things early — a real advantage."
      ) : (
        <>
          You told us about your{" "}
          {bits.map((b, i) => (
            <span key={b.label}>
              {i > 0 && (i === bits.length - 1 ? " and " : ", ")}
              <b>{b.label}</b> ({b.detail})
            </span>
          ))}
          .
        </>
      )}
      {cycleBit && (
        <>
          {" "}
          And your cycle is <b>{cycleBit}</b>.
        </>
      )}
    </>
  );
}

function GoalLine({ goals }: { goals: string[] }) {
  if (!goals.length) return null;
  const top2 = goals.slice(0, 2);
  return (
    <>
      {" "}
      You said you&apos;d love support with{" "}
      {top2.map((g, i) => (
        <span key={g}>
          {i > 0 && " and "}
          <b>{g.toLowerCase()}</b>
        </span>
      ))}
      .
    </>
  );
}

export function ResultScreen({ scores, answers, profile, onSubmitted }: ResultScreenProps) {
  const [barsFilled, setBarsFilled] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);

  const phase = useMemo(() => computePhase(scores, profile), [scores, profile]);
  const sorted = useMemo(
    () => [...AREAS].sort((a, b) => scores[b[1]] - scores[a[1]]),
    [scores]
  );
  const top = sorted[0][0];
  const second = sorted[1][0];
  const stat = statFor(top, phase.name);

  useEffect(() => {
    const t = setTimeout(() => setBarsFilled(true), 140);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const maavieProfile: MaavieProfile = {
      phase: phase.name,
      topAreas: [top, second],
      topArea: top,
      scores: { ...scores },
      answers: { ...answers },
      profile: { ...profile },
    };
    (window as unknown as { maavieProfile: MaavieProfile }).maavieProfile = maavieProfile;
  }, [phase, top, second, scores, answers, profile]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const v = email.trim();
    if (!v || !/^.+@.+\..+$/.test(v)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError(null);
    onSubmitted();
  }

  return (
    <div className="mx-auto w-full max-w-[540px] animate-[rise_0.5s_cubic-bezier(.2,.7,.2,1)] py-6 pb-2">
      <div className="text-center text-[11px] font-semibold uppercase tracking-[.24em] text-terracotta">
        Your snapshot
      </div>
      <h1 className="mb-2 text-center font-display text-[clamp(27px,4.4vw,34px)] font-medium leading-[1.18] text-deep-plum">
        Here&apos;s what your body is telling you
      </h1>

      <div
        className="mb-[30px] rounded-sm border border-[#E2D7CA] px-[26px] py-[30px] text-center"
        style={{
          background:
            "radial-gradient(120% 100% at 50% 0%, rgba(198,120,92,.08), transparent 70%), rgba(255,255,255,.55)",
        }}
      >
        <div className="mb-3 text-[11px] font-semibold uppercase tracking-[.24em] text-terracotta">
          Your likely phase
        </div>
        <div className="mb-3 font-display text-[clamp(24px,4vw,30px)] font-medium leading-[1.2] text-deep-plum">
          {phase.name}
        </div>
        <p className="mx-auto max-w-[410px] text-[14.5px] leading-[1.65] text-[#6b6259]">
          {phase.blurb}
        </p>
      </div>

      <p className="mx-auto mb-1.5 max-w-[460px] text-center text-[15.5px] leading-[1.75] text-[#5f574f]">
        <Reflection answers={answers} profile={profile} />
        <GoalLine goals={profile.goals} />
      </p>

      <div className="mb-3.5 mt-[30px] text-center text-[11px] font-semibold uppercase tracking-[.2em] text-[#a99]">
        Where it&apos;s showing up
      </div>
      <div className="mb-[30px] border-t border-[#E2D7CA] pt-2">
        {AREAS.map(([name, key]) => {
          const l = lvl(scores[key]);
          return (
            <div key={key} className="border-b border-[#E2D7CA] py-[18px]">
              <div className="mb-[11px] flex items-baseline justify-between">
                <span className="font-display text-lg text-deep-plum">{name}</span>
                <span className="text-[11px] font-medium uppercase tracking-[.14em] text-terracotta">
                  {l.txt}
                </span>
              </div>
              <div className="h-[3px] overflow-hidden rounded-full bg-[#E2D7CA]">
                <div
                  className="h-full rounded-full transition-[width] duration-1000 ease-[cubic-bezier(.3,.7,.2,1)]"
                  style={{
                    width: barsFilled ? `${l.pct}%` : "0%",
                    background: "linear-gradient(90deg,#C6785C,#9D6E6B)",
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {stat && (
        <div className="mb-[26px] rounded-sm bg-sage-tint px-5 py-[15px] text-center text-sm leading-[1.55] text-[#3e4a3c]">
          You&apos;re far from alone — <b className="font-semibold text-deep-plum">{stat}</b>
        </div>
      )}

      <div className="px-2.5 pb-[30px] pt-1.5 text-center font-display text-[19px] italic leading-[1.6] text-deep-plum">
        &ldquo;<span className="not-italic">{top}</span> and{" "}
        <span className="not-italic">{second}</span>{" "}
        stand out most for you right now — and none of this is just ageing. It&apos;s hormonal,
        connected, and something you can understand.&rdquo;
      </div>

      <form
        onSubmit={handleSubmit}
        className="rounded-sm bg-deep-plum px-[34px] py-9 text-center"
        style={{
          backgroundImage:
            "radial-gradient(120% 100% at 85% 0%, rgba(198,120,92,.35), transparent 60%)",
        }}
      >
        <div className="mb-3 text-[11px] font-semibold uppercase tracking-[.24em] text-soft-sage">
          Your personalised guide
        </div>
        <h2 className="mb-2.5 font-display text-2xl font-medium leading-[1.25] text-bone">
          We&apos;ve prepared your guide
        </h2>
        <p className="mb-6 text-[14.5px] leading-[1.6] text-bone/80">
          Join the waitlist and we&apos;ll send your guide — built around your{" "}
          {phase.name.toLowerCase()} phase, {top} and {second} — and tell you the moment Maavie
          launches.
        </p>
        <input
          type="email"
          placeholder="you@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-3 w-full rounded-sm border border-bone/25 bg-bone/8 px-[18px] py-4 font-sans text-[15px] text-bone placeholder:text-bone/50 focus:border-terracotta focus:bg-bone/12 focus:outline-none"
        />
        {error && <div className="mb-3 text-[12.5px] text-terracotta">{error}</div>}
        <button
          type="submit"
          className="w-full cursor-pointer rounded-sm border-none bg-terracotta px-[17px] py-[17px] font-sans text-[13px] font-semibold uppercase tracking-[.14em] text-white transition-colors duration-[250ms] hover:bg-[#b3664b]"
        >
          Join the Waitlist
        </button>
        <div className="mt-3.5 text-[11px] leading-[1.5] text-bone/55">
          We&apos;ll only use your email for your guide and launch updates. See our{" "}
          <Link href="/privacy" className="underline hover:text-bone" target="_blank">
            Privacy Policy
          </Link>
          .
        </div>
      </form>
      <Link
        href={`/guide#${top.toLowerCase()}`}
        target="_blank"
        className="mt-[22px] block text-center text-xs font-semibold uppercase tracking-[.14em] text-deep-plum hover:text-terracotta"
      >
        Preview your guide →
      </Link>

      <div className="mt-[26px] rounded-sm border border-[#E2D7CA] px-5 py-[18px]">
        <div className="mb-2.5 text-[11px] font-semibold uppercase tracking-[.16em] text-terracotta">
          What this means — and what it doesn&apos;t
        </div>
        <p className="text-[13px] leading-[1.6] text-[#6b6259]">
          <b className="font-semibold text-deep-plum">What it is:</b> an educational snapshot
          based on your answers, to help you understand what may be happening and where to learn
          more.
        </p>
        <p className="mt-2 text-[13px] leading-[1.6] text-[#6b6259]">
          <b className="font-semibold text-deep-plum">What it isn&apos;t:</b> a diagnosis or
          medical advice. It doesn&apos;t measure your hormones, and other things — like thyroid,
          iron, stress or medication — can cause similar changes.
        </p>
        <p className="mt-2 text-[13px] leading-[1.6] text-[#6b6259]">
          For anything that concerns you, or before making health decisions, please speak with a
          qualified clinician.
        </p>
      </div>
    </div>
  );
}
