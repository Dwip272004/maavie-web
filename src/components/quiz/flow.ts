import type { FlowStep } from "./types";

export const FLOW: FlowStep[] = [
  {
    type: "single",
    key: "age",
    label: "About you",
    title: "First, how old are you?",
    help: "This helps us understand where you might be in your hormonal journey.",
    options: [
      { t: "Under 35", av: 32 },
      { t: "35 – 39", av: 37 },
      { t: "40 – 44", av: 42 },
      { t: "45 – 49", av: 47 },
      { t: "50 – 55", av: 52 },
      { t: "Over 55", av: 58 },
    ],
  },

  {
    type: "multi",
    key: "symptoms",
    label: "Your body",
    title: "What have you noticed lately?",
    help: "Choose all that feel true. There are no wrong answers.",
    options: [
      { t: "Skin feels different", w: { skin: 2 } },
      { t: "Hair thinning or shedding", w: { hair: 2 } },
      { t: "Low energy or fatigue", w: { energy: 2 } },
      { t: "Weight changes", w: { energy: 1 } },
      { t: "Sleep trouble", w: { sleep: 2 } },
      { t: "Mood swings or brain fog", w: { mood: 2 } },
      { t: "Hot flushes", w: { energy: 1 } },
      { t: "Changes in my cycle", w: { mood: 1 } },
    ],
  },

  {
    type: "single",
    key: "cycle",
    label: "Your cycle",
    title: "How would you describe your periods lately?",
    help: "One of the clearest signals of where you are in the transition.",
    options: [
      { t: "Still regular", v: 0 },
      { t: "Starting to change", v: 1 },
      { t: "Quite irregular", v: 2 },
      { t: "Often skipping months", v: 3 },
      { t: "Stopped for 12+ months", v: 4 },
      { t: "Not sure / not applicable", v: null },
    ],
  },

  {
    type: "inter",
    kicker: "A gentle reminder",
    title: "You are not imagining it.",
    body: [
      'These are biological signals — not signs of "just ageing." Your hormones are shifting, and that is something you can understand.',
    ],
  },

  {
    type: "single",
    key: "sleep",
    label: "Sleep",
    title: "How has your sleep been?",
    options: [
      { t: "Sleeping well", w: { sleep: 0 } },
      { t: "Waking through the night", w: { sleep: 2 } },
      { t: "Hard to fall asleep", w: { sleep: 2 } },
      { t: "Exhausted no matter what", w: { sleep: 3, energy: 1 } },
    ],
  },

  {
    type: "single",
    key: "energy",
    label: "Energy",
    title: "And your energy through the day?",
    options: [
      { t: "Steady and good", w: { energy: 0 } },
      { t: "Afternoon dips", w: { energy: 1 } },
      { t: "Often drained", w: { energy: 2 } },
      { t: "Constant fatigue", w: { energy: 3 } },
    ],
  },

  {
    type: "inter",
    kicker: "Did you know",
    title: "When estrogen dips…",
    chips: [
      { cl: "Skin & hair" },
      { cl: "Energy", cs: "& metabolism" },
      { cl: "Mood", cs: "& memory" },
    ],
    body: [
      "Estrogen does far more than run your cycle. As it falls, collagen thins, the skin barrier weakens, hair sheds sooner — and blood sugar, energy and mood shift too.",
    ],
  },

  {
    type: "single",
    key: "skinhair",
    label: "Skin & hair",
    title: "What about your skin and hair?",
    options: [
      { t: "Feels like usual", w: { skin: 0, hair: 0 } },
      { t: "Drier or duller skin", w: { skin: 2 } },
      { t: "More hair shedding", w: { hair: 2 } },
      { t: "Both are changing", w: { skin: 2, hair: 2 } },
    ],
  },

  {
    type: "single",
    key: "mood",
    label: "Mood & focus",
    title: "How would you describe your mood and focus?",
    options: [
      { t: "Steady", w: { mood: 0 } },
      { t: "Occasional low patches", w: { mood: 1 } },
      { t: "More irritable or anxious", w: { mood: 2 } },
      { t: "Brain fog and low mood", w: { mood: 3 } },
    ],
  },

  {
    type: "inter",
    kicker: "Did you know",
    title: "And when progesterone falls…",
    chips: [{ cl: "Sleep" }, { cl: "Calm" }, { cl: "Cycle" }],
    body: [
      "Progesterone is your calming hormone — and it often drops first. Less of it can mean lighter sleep, more anxiety or irritability, and a less predictable cycle.",
    ],
  },

  {
    type: "multi",
    key: "goals",
    label: "Your goals",
    title: "What matters most to you right now?",
    help: "Choose all that you would love support with.",
    options: [
      { t: "Understanding what's happening" },
      { t: "Better sleep" },
      { t: "More energy" },
      { t: "Skin & hair" },
      { t: "Mood & calm" },
      { t: "Feeling like myself again" },
    ],
  },

  { type: "loading" },
  { type: "result" },
];

export const isQuestion = (s: FlowStep): s is Extract<FlowStep, { type: "single" | "multi" }> =>
  s.type === "single" || s.type === "multi";

export const totalQuestions = FLOW.filter(isQuestion).length;

export const answeredCount = (step: number) => FLOW.slice(0, step).filter(isQuestion).length;
