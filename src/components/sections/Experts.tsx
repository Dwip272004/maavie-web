"use client";

import { useState } from "react";
import Image from "next/image";

const experts = [
  {
    name: "Dr. Savita Tyagi",
    cred: "MBBS, DGO, MD, FICOG, CIMP · Senior Consultant Obstetrician & Gynaecologist",
    tag: "Gynaecology",
    quote:
      "Every formula starts with one question: is this safe for a woman's hormones, at any stage of life?",
    photo: "/images/dr-savita-tyagi.jpg",
    photoPosition: "center 25%",
  },
  {
    name: "Dr. Neha Taneja",
    cred: "MD Dermatology (AIIMS, New Delhi), MRCP SCE (UK)",
    tag: "Dermatology",
    quote:
      "Melanin-rich skin deserves its own science — not a one-size-fits-all approach borrowed from elsewhere.",
    photo: "/images/dr-neha-taneja.jpeg",
    photoPosition: "center 20%",
  },
  {
    name: "Jyothi Machaiah",
    cred: "MSc Nutrition · Certified Menopause Practitioner",
    tag: "Nutrition",
    quote:
      "The right nutrients can genuinely support your body through every hormonal transition.",
    photo: "/images/jyothi-machaiah.png",
    photoPosition: "center 15%",
  },
  {
    name: "Gayathri Lewis",
    cred: "Menopause and Hormonal Health Coach",
    tag: "Coaching",
    quote:
      "You don't have to navigate this alone. Understanding is the first step to feeling like yourself again.",
    photo: "/images/gayathri-lewis.jpeg",
    photoPosition: "center 22%",
  },
];

export function Experts() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section
      id="experts"
      className="pb-24 pt-20"
      style={{ background: "linear-gradient(200deg, #590515 0%, #7a1530 50%, #590515 100%)" }}
    >
      <div className="mx-auto max-w-4xl px-6 text-center sm:px-10">
        <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-plum-tint/60">
          Expert-Led
        </p>
        <h2
          className="mb-5 font-light leading-tight text-bone"
          style={{ fontSize: "clamp(1.9rem, 3.5vw, 3rem)" }}
        >
          Co-created with
          <br />
          <em className="italic text-plum-tint">Indian Experts.</em>
        </h2>
        <p className="mx-auto max-w-lg text-base font-light text-bone/55">
          Only what your body needs. Nothing more.
        </p>
      </div>

      <div className="mx-auto max-w-[1000px] px-6 pt-16">
        <div className="grid grid-cols-1 gap-x-10 gap-y-12 border-t border-bone/15 pt-12 text-center sm:grid-cols-2 sm:text-left lg:grid-cols-4">
          {experts.map((expert, i) => {
            const isActive = active === i;
            return (
              <button
                key={expert.name + expert.cred}
                type="button"
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(isActive ? null : i)}
                aria-pressed={isActive}
                className="w-full cursor-pointer border-none bg-transparent p-0 text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-bone/60 focus-visible:ring-offset-2 focus-visible:ring-offset-deep-plum sm:text-left"
              >
                <div
                  className="relative mx-auto mb-5 h-[136px] w-[136px] overflow-hidden rounded-full border transition-all duration-300 sm:mx-0"
                  style={{
                    background: expert.photo
                      ? undefined
                      : "linear-gradient(135deg, rgba(246,242,237,.14), rgba(198,120,92,.2))",
                    borderColor: isActive ? "rgba(246,242,237,.55)" : "rgba(246,242,237,.2)",
                    boxShadow: isActive
                      ? "0 0 0 6px rgba(198,120,92,.16), 0 8px 20px rgba(0,0,0,.25)"
                      : "none",
                    transform: isActive ? "scale(1.06)" : "scale(1)",
                  }}
                >
                  {expert.photo && (
                    <Image
                      src={expert.photo}
                      alt={expert.name}
                      fill
                      sizes="136px"
                      className="object-cover"
                      style={{ objectPosition: expert.photoPosition }}
                    />
                  )}
                </div>
                <h3 className="font-display text-lg font-medium text-bone">{expert.name}</h3>

                <div className="mt-1 min-h-[52px]">
                  {isActive ? (
                    <p className="animate-[rise_0.35s_cubic-bezier(.2,.7,.2,1)] font-display text-[13.5px] italic leading-snug text-bone/85">
                      &ldquo;{expert.quote}&rdquo;
                    </p>
                  ) : (
                    <div className="animate-[rise_0.35s_cubic-bezier(.2,.7,.2,1)]">
                      <div className="text-[13px] text-bone/55">{expert.cred}</div>
                      <div className="mt-1 text-[11px] font-semibold uppercase tracking-[.14em] text-terracotta">
                        {expert.tag}
                      </div>
                    </div>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <div className="pt-16 text-center">
        <a
          href="https://www.instagram.com/maavie.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block cursor-pointer rounded-full bg-bone px-9 py-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-deep-plum transition-transform duration-150 hover:-translate-y-0.5 hover:bg-white"
        >
          Join the Community
        </a>
      </div>
    </section>
  );
}
