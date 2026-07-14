export type GuideModule = {
  id: "mood" | "sleep" | "energy" | "skin" | "hair";
  icon: string;
  title: string;
  gradient: string;
  whatsHappening: string;
  checklist: string[];
  maavieNote: string;
  flag?: string;
};

export const GUIDE_MODULES: GuideModule[] = [
  {
    id: "mood",
    icon: "🧠",
    title: "Mood & Brain Fog",
    gradient: "linear-gradient(135deg,#3D1A33,#6a2e57)",
    whatsHappening:
      "Estrogen and progesterone both shape your brain chemistry. Progesterone's calming effect (via GABA) often fades first — which can show up as anxiety, irritability and lighter sleep. Estrogen supports serotonin, dopamine and verbal memory — so as it dips, you may feel lower, flatter, or reach for a word that just won't come. This is neurochemistry, not a character flaw.",
    checklist: [
      "Steady your blood sugar — protein + fibre at each meal softens mood and energy crashes.",
      "Move daily — even a brisk walk supports mood-regulating brain chemistry.",
      "Protect sleep — poor sleep amplifies everything (see the Sleep section).",
      "Buffer stress — a few minutes of slow breathing or a wind-down ritual genuinely helps.",
      "Nutrients that support calm and brain function — omega-3, magnesium and B-vitamins.",
    ],
    maavieNote:
      "clear, science-backed education so you finally understand what's happening — and a warm community of women going through the very same thing, so you never have to figure it out alone.",
    flag: "Persistent low mood, anxiety or thoughts that worry you deserve real support — please speak to a qualified clinician. This guide is educational, not a substitute for care.",
  },
  {
    id: "sleep",
    icon: "😴",
    title: "Sleep",
    gradient: "linear-gradient(135deg,#3a2c52,#3D1A33)",
    whatsHappening:
      "Progesterone helps you sleep — and it's usually the first hormone to drop, so nights get lighter and more broken. Falling estrogen can trigger night sweats and 3am waking, and the body's stress-hormone (cortisol) rhythm can shift too. The result: you're in bed the same hours, but waking unrested.",
    checklist: [
      "Keep a consistent sleep and wake time — even on weekends.",
      "Cool, dark room — helpful for night sweats and deeper sleep.",
      "Cut caffeine after early afternoon; go easy on evening alcohol.",
      "A calm wind-down hour — dim lights, screens down, a simple routine.",
      "Calming nutrients in the evening — magnesium glycinate and L-theanine.",
    ],
    maavieNote:
      "honest education on why sleep changes now, and a community of women sharing what has actually helped them through the broken nights.",
    flag: "Loud snoring, gasping, or severe insomnia can point to other causes — worth raising with a clinician.",
  },
  {
    id: "energy",
    icon: "🔋",
    title: "Energy & Fatigue",
    gradient: "linear-gradient(135deg,#C6785C,#a95c41)",
    whatsHappening:
      "Fatigue in this stage is rarely one thing. Shifting estrogen affects how your cells make energy; broken sleep drains reserves; and changing insulin sensitivity means blood-sugar dips that leave you flat by mid-afternoon. Thyroid changes and low iron are also common in midlife — and very treatable once found.",
    checklist: [
      "Protein-forward breakfast — sets up steadier energy all day.",
      "Balance blood sugar — pair carbs with protein, fibre or fat.",
      "Build muscle — strength training 2–3x/week is a real metabolic boost.",
      "Ask your clinician to check iron/ferritin, thyroid and vitamin D.",
      "Foundational nutrients — omega-3, vitamin D, B-vitamins and magnesium.",
    ],
    maavieNote:
      'education that connects the dots on midlife fatigue — so it stops feeling mysterious — plus a community that truly gets the "tired but wired" days.',
    flag: "Sudden or severe fatigue always deserves a clinician's review to rule out thyroid, iron and other causes.",
  },
  {
    id: "skin",
    icon: "🌿",
    title: "Skin",
    gradient: "linear-gradient(135deg,#b5795f,#8f5138)",
    whatsHappening:
      "Estrogen helps your skin make collagen, hold water and keep its protective barrier strong. As it falls, collagen thins (studies suggest up to ~30% in the first five years, then gradually after), the barrier weakens, and skin feels drier, thinner, less firm and more easily irritated.",
    checklist: [
      "Go barrier-first — ceramides, hyaluronic acid and squalane to rebuild and hydrate.",
      "Support firmness gently — bakuchiol and peptides (kinder than harsh retinoids).",
      "Daily SPF — the single biggest protector of skin structure.",
      "Ease off strong acids and over-exfoliating while the barrier is fragile.",
      "Hydrate from within — omega-3 and enough water and protein.",
    ],
    maavieNote:
      "science-first education on why menopausal skin changes, and a community swapping honest, real-world experience — no hype, no fear.",
  },
  {
    id: "hair",
    icon: "💇‍♀️",
    title: "Hair",
    gradient: "linear-gradient(135deg,#A8B5A2,#6f8069)",
    whatsHappening:
      "Estrogen keeps hair in its growing phase longer. As it drops, more strands shift into shedding earlier, so hair thins gradually and evenly. A changing balance between estrogen and androgens can also thin hair around the crown and parting.",
    checklist: [
      "Be gentle — less heat and tension, kinder scalp care.",
      "Feed the follicle — enough protein and iron, which hair needs to grow.",
      "Manage stress — stress shedding stacks on top of hormonal thinning.",
      "Ask your clinician to check ferritin (iron stores), thyroid and vitamin D.",
      "Supportive nutrients — zinc, omega-3, vitamin D and sensible biotin.",
    ],
    maavieNote:
      "education on what's normal versus worth checking, and a supportive community where you can ask anything about your hair without judgement.",
    flag: "Sudden, patchy or rapid hair loss isn't typical hormonal thinning — please see a clinician, as iron and thyroid often play a role.",
  },
];
