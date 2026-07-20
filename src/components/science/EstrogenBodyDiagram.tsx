"use client";

import { useState } from "react";

type BodyArea = {
  id: string;
  label: string;
  color: string;
  colorMuted: string;
  headline: string;
  summary: string;
  effects: string[];
  timeframe: string;
  hotspot: { cx: number; cy: number };
  side: "left" | "right";
  highlight: { cx: number; cy: number; rx: number; ry: number };
};

const FONT_SANS = "var(--font-inter), sans-serif";
const FONT_SERIF = "var(--font-playfair-display), Georgia, serif";

// Palette adapted for the dark deep-plum (#590515) background
const areas: BodyArea[] = [
  {
    id: "hair",
    label: "Hair",
    color: "#E8A8A4",
    colorMuted: "rgba(232,168,164,0.22)",
    headline: "Texture & Growth",
    summary:
      "Estrogen shifts the hair growth cycle, slowing loss and encouraging finer, softer texture across the scalp and body.",
    effects: [
      "Slows androgenic hair loss on the scalp",
      "Softens and slows body and facial hair growth",
      "Shifts hair texture toward finer, silkier strands",
      "Extends the anagen (growth) phase of the hair cycle",
    ],
    timeframe: "Noticeable shifts from 6–12 months",
    hotspot: { cx: 100, cy: 18 },
    side: "left",
    highlight: { cx: 100, cy: 30, rx: 32, ry: 40 },
  },
  {
    id: "mood",
    label: "Mood",
    color: "#C9A87C",
    colorMuted: "rgba(201,168,124,0.22)",
    headline: "Emotion & Wellbeing",
    summary:
      "Estrogen modulates serotonin, dopamine, and GABA pathways — deeply influencing emotional regulation, empathy, and mental health.",
    effects: [
      "Increases serotonin receptor sensitivity",
      "Reduces baseline anxiety and emotional blunting",
      "Enhances emotional nuance and empathic response",
      "Stabilizes mood cycles linked to hormonal fluctuation",
    ],
    timeframe: "Emotional shifts often felt within weeks",
    hotspot: { cx: 82, cy: 58 },
    side: "left",
    highlight: { cx: 100, cy: 58, rx: 26, ry: 28 },
  },
  {
    id: "energy",
    label: "Energy",
    color: "#D9AA4C",
    colorMuted: "rgba(217,170,76,0.22)",
    headline: "Rhythm & Vitality",
    summary:
      "Estrogen influences mitochondrial function and the sleep-wake cycle, shaping how energized and rested you feel day to day.",
    effects: [
      "Supports deeper, more restorative sleep cycles",
      "Improves mitochondrial energy production in cells",
      "Reduces cortisol-related fatigue patterns",
      "Enhances physical endurance and recovery",
    ],
    timeframe: "Sleep improvements often within weeks",
    hotspot: { cx: 78, cy: 175 },
    side: "left",
    highlight: { cx: 100, cy: 172, rx: 42, ry: 30 },
  },
  {
    id: "skin",
    label: "Skin",
    color: "#E8BEB0",
    colorMuted: "rgba(232,190,176,0.22)",
    headline: "Softness & Glow",
    summary:
      "Estrogen increases skin thickness, collagen production, and moisture retention — creating a smoother, more supple complexion over time.",
    effects: [
      "Boosts collagen by up to 30%, reducing fine lines",
      "Increases skin hydration and sebum balance",
      "Improves wound healing and skin elasticity",
      "Reduces pore size and skin coarseness",
    ],
    timeframe: "Visible changes from 3–6 months",
    hotspot: { cx: 158, cy: 145 },
    side: "right",
    highlight: { cx: 100, cy: 200, rx: 72, ry: 130 },
  },
  {
    id: "bones",
    label: "Bones",
    color: "#C8B89C",
    colorMuted: "rgba(200,184,156,0.22)",
    headline: "Density & Protection",
    summary:
      "Estrogen is critical for maintaining bone density by regulating osteoclast activity — protecting against osteoporosis and fracture risk.",
    effects: [
      "Inhibits bone-resorbing osteoclast cells",
      "Maintains calcium absorption from the gut",
      "Protects against osteoporosis long-term",
      "Supports joint lubrication and cartilage health",
    ],
    timeframe: "Protective effects begin immediately",
    hotspot: { cx: 118, cy: 228 },
    side: "right",
    highlight: { cx: 100, cy: 270, rx: 28, ry: 100 },
  },
  {
    id: "weight",
    label: "Weight",
    color: "#D99898",
    colorMuted: "rgba(217,152,152,0.22)",
    headline: "Distribution & Metabolism",
    summary:
      "Estrogen redirects fat storage away from the abdomen and toward the hips, thighs, and chest — reshaping body composition gradually.",
    effects: [
      "Shifts fat distribution to hips, thighs, and buttocks",
      "Reduces visceral (abdominal) fat accumulation",
      "Lowers muscle mass and increases subcutaneous fat",
      "Slows base metabolism — caloric needs often decrease",
    ],
    timeframe: "Redistribution over 1–3 years",
    hotspot: { cx: 152, cy: 345 },
    side: "right",
    highlight: { cx: 100, cy: 360, rx: 54, ry: 96 },
  },
];

// ─── Body silhouette — local space: x 0–200, y 0–500 ───
const BODY_PATH = `
  M 100 8
  C 128 8, 140 30, 140 54
  C 140 76, 128 90, 114 90
  C 110 96, 108 102, 108 116
  C 128 116, 155 120, 170 138

  C 182 152, 186 174, 182 194
  C 178 212, 174 230, 170 246
  C 168 256, 166 266, 164 272
  C 162 268, 160 256, 159 244
  C 157 226, 154 208, 150 194

  C 146 180, 142 170, 136 164
  C 132 160, 130 167, 130 182
  C 130 198, 132 216, 134 234
  C 136 248, 140 262, 146 276
  C 150 288, 154 300, 154 316

  C 154 330, 152 347, 150 365
  C 149 378, 148 389, 150 402
  C 152 415, 151 431, 148 447
  C 145 459, 140 469, 136 475
  C 133 480, 126 482, 118 480
  L 112 478
  C 110 468, 108 453, 107 437
  C 106 419, 105 405, 106 391
  C 107 373, 108 353, 108 337
  C 106 329, 102 325, 100 325
  C 98 325, 94 329, 92 337
  C 92 353, 93 373, 94 391
  C 95 405, 94 419, 93 437
  C 92 453, 90 468, 88 478
  L 82 480
  C 74 482, 67 480, 64 475
  C 60 469, 55 459, 52 447
  C 49 431, 48 415, 50 402
  C 52 389, 51 378, 51 365
  C 48 347, 46 330, 46 316

  C 46 300, 50 288, 54 276
  C 60 262, 64 248, 66 234
  C 68 216, 70 198, 70 182
  C 70 167, 68 160, 64 164

  C 58 170, 54 180, 50 194
  C 46 208, 43 226, 41 244
  C 40 256, 38 268, 36 272
  C 34 266, 32 256, 30 246
  C 26 230, 22 212, 18 194
  C 14 174, 18 152, 30 138

  C 45 120, 72 116, 92 116
  C 92 102, 90 96, 86 90
  C 72 90, 60 76, 60 54
  C 60 30, 72 8, 100 8
  Z
`;

const HAIR_PATH = `
  M 70 52
  C 66 34, 68 14, 82 8
  C 88 4, 95 2, 100 2
  C 105 2, 112 4, 118 8
  C 132 14, 134 34, 130 52
  C 136 38, 140 20, 132 10
  C 124 0, 110 -2, 100 -2
  C 90 -2, 76 0, 68 10
  C 60 20, 64 38, 70 52
  Z
`;

// X-offset of the silhouette group within the 520×540 SVG
const DX = 160;

function BodyDiagram({
  activeId,
  onSelect,
}: {
  activeId: string;
  onSelect: (id: string) => void;
}) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const highlighted = areas.find((a) => a.id === (hoveredId ?? activeId))!;

  const sx = (x: number) => DX + x;
  const sy = (y: number) => y + 10;

  const LABEL_LEFT_X = 148;
  const LABEL_RIGHT_X = 372;
  const LABEL_W = 142;

  return (
    <svg
      viewBox="0 0 520 540"
      style={{ width: "100%", height: "100%" }}
      aria-label="Female body diagram — click a region to learn more"
    >
      <defs>
        <clipPath id="silhouette-clip">
          <path d={BODY_PATH} transform={`translate(${DX}, 10)`} />
        </clipPath>
        <filter id="area-glow" x="-70%" y="-50%" width="240%" height="200%">
          <feGaussianBlur stdDeviation="18" result="blur" />
        </filter>
        <filter id="dot-glow" x="-120%" y="-120%" width="340%" height="340%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="body-grad" x1="0.35" y1="0" x2="0.65" y2="1">
          <stop offset="0%" stopColor="rgba(240,210,200,0.18)" />
          <stop offset="55%" stopColor="rgba(232,195,185,0.12)" />
          <stop offset="100%" stopColor="rgba(220,180,168,0.07)" />
        </linearGradient>
      </defs>

      <ellipse
        cx={sx(highlighted.highlight.cx)}
        cy={sy(highlighted.highlight.cy)}
        rx={highlighted.highlight.rx + 36}
        ry={highlighted.highlight.ry + 36}
        fill={highlighted.colorMuted}
        filter="url(#area-glow)"
        style={{ transition: "all 0.55s ease" }}
      />

      <path d={BODY_PATH} transform={`translate(${DX}, 10)`} fill="url(#body-grad)" />

      <path
        d={HAIR_PATH}
        transform={`translate(${DX}, 10)`}
        fill={
          activeId === "hair" || hoveredId === "hair"
            ? "rgba(232,168,164,0.30)"
            : "rgba(210,168,160,0.22)"
        }
        style={{ transition: "fill 0.4s ease" }}
      />

      <ellipse
        cx={sx(highlighted.highlight.cx)}
        cy={sy(highlighted.highlight.cy)}
        rx={highlighted.highlight.rx}
        ry={highlighted.highlight.ry}
        fill={highlighted.colorMuted}
        clipPath="url(#silhouette-clip)"
        style={{ transition: "all 0.45s ease" }}
      />

      <path
        d={HAIR_PATH}
        transform={`translate(${DX}, 10)`}
        fill="none"
        stroke={
          activeId === "hair" || hoveredId === "hair"
            ? "#E8A8A4"
            : "rgba(220,185,178,0.30)"
        }
        strokeWidth="0.8"
        style={{ transition: "stroke 0.4s ease" }}
      />

      <path
        d={BODY_PATH}
        transform={`translate(${DX}, 10)`}
        fill="none"
        stroke={highlighted.color}
        strokeWidth="1.1"
        strokeOpacity="0.55"
        style={{ transition: "stroke 0.4s ease" }}
      />

      {areas.map((area) => {
        const hx = sx(area.hotspot.cx);
        const hy = sy(area.hotspot.cy);
        const isActive = activeId === area.id;
        const isHovered = hoveredId === area.id;
        const lit = isActive || isHovered;
        const lineClr = lit ? area.color : "rgba(200,160,150,0.22)";

        if (area.side === "left") {
          return (
            <g key={area.id}>
              <line
                x1={hx - 9}
                y1={hy}
                x2={LABEL_LEFT_X + 2}
                y2={hy}
                stroke={lineClr}
                strokeWidth={lit ? 1.2 : 0.7}
                strokeDasharray={lit ? "none" : "3 4"}
                style={{ transition: "stroke 0.3s" }}
              />
              <rect
                x={LABEL_LEFT_X - LABEL_W}
                y={hy - 23}
                width={LABEL_W}
                height={46}
                rx="9"
                fill={lit ? "rgba(89,5,21,0.65)" : "rgba(89,5,21,0.35)"}
                stroke={lit ? area.color : "rgba(200,160,150,0.2)"}
                strokeWidth="0.8"
                style={{ cursor: "pointer", transition: "all 0.25s" }}
                onClick={() => onSelect(area.id)}
                onMouseEnter={() => setHoveredId(area.id)}
                onMouseLeave={() => setHoveredId(null)}
              />
              <text
                x={LABEL_LEFT_X - 10}
                y={hy - 7}
                textAnchor="end"
                fontFamily={FONT_SANS}
                fontSize="7.5"
                letterSpacing="1.8"
                fill={lit ? area.color : "rgba(200,160,150,0.55)"}
                style={{ cursor: "pointer", transition: "fill 0.25s", userSelect: "none" }}
                onClick={() => onSelect(area.id)}
                onMouseEnter={() => setHoveredId(area.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {area.label.toUpperCase()}
              </text>
              <text
                x={LABEL_LEFT_X - 10}
                y={hy + 9}
                textAnchor="end"
                fontFamily={FONT_SERIF}
                fontSize="11"
                fill={lit ? "#FDFAF5" : "rgba(253,250,245,0.45)"}
                style={{ cursor: "pointer", transition: "fill 0.25s", userSelect: "none" }}
                onClick={() => onSelect(area.id)}
                onMouseEnter={() => setHoveredId(area.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {area.headline}
              </text>
            </g>
          );
        }
        return (
          <g key={area.id}>
            <line
              x1={hx + 9}
              y1={hy}
              x2={LABEL_RIGHT_X - 2}
              y2={hy}
              stroke={lineClr}
              strokeWidth={lit ? 1.2 : 0.7}
              strokeDasharray={lit ? "none" : "3 4"}
              style={{ transition: "stroke 0.3s" }}
            />
            <rect
              x={LABEL_RIGHT_X}
              y={hy - 23}
              width={LABEL_W}
              height={46}
              rx="9"
              fill={lit ? "rgba(89,5,21,0.65)" : "rgba(89,5,21,0.35)"}
              stroke={lit ? area.color : "rgba(200,160,150,0.2)"}
              strokeWidth="0.8"
              style={{ cursor: "pointer", transition: "all 0.25s" }}
              onClick={() => onSelect(area.id)}
              onMouseEnter={() => setHoveredId(area.id)}
              onMouseLeave={() => setHoveredId(null)}
            />
            <text
              x={LABEL_RIGHT_X + 12}
              y={hy - 7}
              textAnchor="start"
              fontFamily={FONT_SANS}
              fontSize="7.5"
              letterSpacing="1.8"
              fill={lit ? area.color : "rgba(200,160,150,0.55)"}
              style={{ cursor: "pointer", transition: "fill 0.25s", userSelect: "none" }}
              onClick={() => onSelect(area.id)}
              onMouseEnter={() => setHoveredId(area.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {area.label.toUpperCase()}
            </text>
            <text
              x={LABEL_RIGHT_X + 12}
              y={hy + 9}
              textAnchor="start"
              fontFamily={FONT_SERIF}
              fontSize="11"
              fill={lit ? "#FDFAF5" : "rgba(253,250,245,0.45)"}
              style={{ cursor: "pointer", transition: "fill 0.25s", userSelect: "none" }}
              onClick={() => onSelect(area.id)}
              onMouseEnter={() => setHoveredId(area.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {area.headline}
            </text>
          </g>
        );
      })}

      {areas.map((area) => {
        const hx = sx(area.hotspot.cx);
        const hy = sy(area.hotspot.cy);
        const isActive = activeId === area.id;
        const isHovered = hoveredId === area.id;
        const lit = isActive || isHovered;

        return (
          <g
            key={`dot-${area.id}`}
            style={{ cursor: "pointer" }}
            onClick={() => onSelect(area.id)}
            onMouseEnter={() => setHoveredId(area.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            {isActive && (
              <circle
                cx={hx}
                cy={hy}
                r="12"
                fill="none"
                stroke={area.color}
                strokeWidth="1"
                opacity="0.28"
              >
                <animate attributeName="r" values="8;18;8" dur="2.8s" repeatCount="indefinite" />
                <animate
                  attributeName="opacity"
                  values="0.28;0;0.28"
                  dur="2.8s"
                  repeatCount="indefinite"
                />
              </circle>
            )}
            <circle
              cx={hx}
              cy={hy}
              r={lit ? 8 : 6}
              fill={lit ? "rgba(89,5,21,0.7)" : "rgba(89,5,21,0.5)"}
              stroke={area.color}
              strokeWidth={lit ? 1.5 : 1}
              filter={lit ? "url(#dot-glow)" : undefined}
              style={{ transition: "all 0.25s ease" }}
            />
            <circle
              cx={hx}
              cy={hy}
              r={lit ? 3.5 : 2.2}
              fill={area.color}
              style={{ transition: "all 0.25s ease" }}
            />
          </g>
        );
      })}
    </svg>
  );
}

// Utility: extract r,g,b from a 6-digit hex for rgba() usage
function hexToRgb(hex: string): string {
  const h = hex.replace("#", "");
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  return `${r},${g},${b}`;
}

export function EstrogenBodyDiagram() {
  const [activeId, setActiveId] = useState<string>("hair");
  const active = areas.find((a) => a.id === activeId)!;

  return (
    <div className="main-layout" style={{ maxWidth: "1080px", margin: "0 auto" }}>
      <div style={{ minHeight: "580px" }}>
        <BodyDiagram activeId={activeId} onSelect={setActiveId} />
      </div>

      <div style={{ paddingTop: "2rem" }}>
        <div
          style={{
            background: "rgba(255,255,255,0.05)",
            border: `1px solid rgba(${hexToRgb(active.color)},0.45)`,
            borderRadius: "16px",
            padding: "2rem 2.25rem",
            position: "sticky",
            top: "2rem",
            overflow: "hidden",
            boxShadow: "0 8px 48px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.06)",
            backdropFilter: "blur(12px)",
            transition: "border-color 0.4s ease",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: "140px",
              height: "140px",
              background: `radial-gradient(circle at top right, ${active.colorMuted}, transparent 72%)`,
              borderRadius: "0 16px 0 0",
              pointerEvents: "none",
              transition: "background 0.4s ease",
            }}
          />

          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.375rem",
              padding: "0.25rem 0.75rem",
              borderRadius: "100px",
              background: "rgba(255,255,255,0.06)",
              border: `1px solid rgba(${hexToRgb(active.color)},0.5)`,
              marginBottom: "1rem",
            }}
          >
            <div
              style={{
                width: "5px",
                height: "5px",
                borderRadius: "50%",
                background: active.color,
              }}
            />
            <span
              style={{
                fontFamily: FONT_SANS,
                fontSize: "0.6rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: active.color,
                fontWeight: 600,
              }}
            >
              {active.label}
            </span>
          </div>

          <h3
            style={{
              fontFamily: FONT_SERIF,
              fontSize: "1.65rem",
              fontWeight: 600,
              color: "#FDFAF5",
              margin: "0 0 0.75rem",
              lineHeight: 1.2,
            }}
          >
            {active.headline}
          </h3>

          <p
            style={{
              fontFamily: FONT_SANS,
              fontSize: "0.875rem",
              lineHeight: 1.8,
              color: "rgba(232,208,200,0.75)",
              margin: "0 0 1.25rem",
              fontWeight: 300,
            }}
          >
            {active.summary}
          </p>

          <div
            style={{ height: "1px", background: "rgba(255,255,255,0.08)", margin: "0 0 1.125rem" }}
          />

          <p
            style={{
              fontFamily: FONT_SANS,
              fontSize: "0.6rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(200,160,150,0.6)",
              fontWeight: 500,
              margin: "0 0 0.875rem",
            }}
          >
            Key Effects
          </p>

          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: "0 0 1.25rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.65rem",
            }}
          >
            {active.effects.map((effect, i) => (
              <li
                key={i}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.65rem",
                  fontFamily: FONT_SANS,
                  fontSize: "0.83rem",
                  lineHeight: 1.6,
                  color: "rgba(232,208,200,0.82)",
                  fontWeight: 300,
                }}
              >
                <span
                  style={{
                    flexShrink: 0,
                    width: "18px",
                    height: "18px",
                    borderRadius: "50%",
                    border: `1px solid rgba(${hexToRgb(active.color)},0.6)`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.5rem",
                    color: active.color,
                    marginTop: "2px",
                    background: "rgba(255,255,255,0.04)",
                  }}
                >
                  {i + 1}
                </span>
                {effect}
              </li>
            ))}
          </ul>

          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              padding: "0.35rem 0.75rem",
              borderRadius: "100px",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(200,160,150,0.2)",
            }}
          >
            <div
              style={{ width: "4px", height: "4px", borderRadius: "50%", background: active.color }}
            />
            <span
              style={{
                fontFamily: FONT_SANS,
                fontSize: "0.68rem",
                color: "rgba(200,160,150,0.7)",
              }}
            >
              {active.timeframe}
            </span>
          </div>
        </div>
      </div>

      <style>{`
        .main-layout {
          display: grid;
          grid-template-columns: 1fr 360px;
          gap: 2.5rem;
          align-items: start;
        }
        @media (max-width: 820px) {
          .main-layout { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}
