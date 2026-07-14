import type { Answers, Profile, Scores } from "./types";

export function lvl(v: number): { pct: number; txt: string } {
  if (v <= 0) return { pct: 16, txt: "Steady" };
  if (v <= 2) return { pct: 44, txt: "Mild" };
  if (v <= 4) return { pct: 70, txt: "Noticeable" };
  return { pct: 92, txt: "Strong" };
}

export type Phase = { name: string; blurb: string };

/**
 * Phase read modelled on STRAW+10 (staged primarily by menstrual-cycle pattern).
 * Rules 1-4 are cycle-led and clinically defensible; rules 5-6 infer from
 * age + symptoms when the cycle is still regular and are a heuristic, not a
 * diagnosis. See Maavie_Quiz_Clinical_Logic.md for the full rationale and
 * sign-off checklist before this ships to real users.
 */
export function computePhase(scores: Scores, profile: Profile): Phase {
  const cyc = profile.cycleStage;
  const age = profile.ageNum ?? 45;
  const flush = profile.hotFlush;
  const load = scores.skin + scores.hair + scores.energy + scores.sleep + scores.mood;

  if (cyc === 4)
    return {
      name: "Menopause / post-menopause",
      blurb:
        "Your periods have stopped for a year or more — the marker of menopause. Symptoms can continue for a while, and there is a great deal that helps.",
    };
  if (cyc === 3)
    return {
      name: "Late perimenopause",
      blurb:
        "Skipped periods alongside these symptoms suggest you are in the later stretch of the transition. The other side is in sight.",
    };
  if (cyc === 2 || (flush && load >= 8))
    return {
      name: "Perimenopause",
      blurb:
        "Irregular cycles together with what you are feeling point to being in the thick of the transition — exactly where understanding helps most.",
    };
  if (cyc === 1 || (age >= 42 && load >= 5))
    return {
      name: "Early perimenopause",
      blurb:
        "Subtle cycle changes and early symptoms suggest the very start of the transition — often years before periods stop.",
    };
  if (age >= 45 && load >= 4)
    return {
      name: "Likely early perimenopause",
      blurb:
        "Your age and what you are noticing suggest the transition may be beginning, even if your cycle still feels regular.",
    };
  if (load >= 6)
    return {
      name: "Signals worth understanding",
      blurb:
        "You are noticing real changes. Whether hormonal or driven by sleep, stress or other factors, they are worth making sense of.",
    };
  return {
    name: "Likely pre-transition",
    blurb:
      "You do not show strong signs of the transition yet — a wonderful time to learn what is ahead and build steady foundations.",
  };
}

const REFLECTION_MAP: Record<string, string> = {
  sleep: "sleep",
  energy: "energy",
  skinhair: "skin & hair",
  mood: "mood",
};

const REFLECTION_STEADY: Record<string, string> = {
  sleep: "Sleeping well",
  energy: "Steady and good",
  skinhair: "Feels like usual",
  mood: "Steady",
};

export type ReflectionBit = { label: string; detail: string };

export function buildReflectionBits(answers: Answers): ReflectionBit[] {
  return Object.keys(REFLECTION_MAP)
    .filter((k) => answers[k] && answers[k] !== REFLECTION_STEADY[k])
    .map((k) => ({ label: REFLECTION_MAP[k], detail: String(answers[k]).toLowerCase() }));
}

export function cycleReflectionText(profile: Profile): string | null {
  if (profile.cycleText && profile.cycleStage !== null && profile.cycleStage > 0) {
    return profile.cycleText.toLowerCase();
  }
  return null;
}

/**
 * NOTE FOR DEV/CLINICAL REVIEW: these prevalence figures are commonly cited but
 * must be verified and cited (graded Tier A/B) with the medical advisor before
 * launch. See Maavie_Quiz_Clinical_Logic.md Section 4.
 */
export function statFor(area: string, phaseName: string): string | null {
  const pre = /pre-transition/i.test(phaseName);
  if (pre) return null; // don't over-claim for women not yet in transition
  const map: Record<string, string> = {
    Sleep: "as many as 6 in 10 women in this phase report disrupted sleep.",
    Mood: "around 4 in 10 women report mood changes through the transition.",
    Energy: "more than half of women report fatigue during perimenopause.",
    Skin: "most women notice skin changes as estrogen declines.",
    Hair: "up to 2 in 5 women experience hair thinning through the transition.",
  };
  return map[area] || null;
}
