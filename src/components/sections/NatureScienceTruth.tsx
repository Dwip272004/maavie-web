const phrase = ["Nature.", "Science.", "Truth."];
const repeated = Array(12).fill(phrase).flat();

export function NatureScienceTruth() {
  return (
    <section className="overflow-hidden bg-deep-plum py-4">
      <div
        className="animate-marquee flex w-max gap-0"
        aria-hidden="true"
      >
        {repeated.map((word, i) => (
          <span
            key={i}
            className="shrink-0 select-none px-5 font-display text-sm font-medium tracking-[0.22em] text-bone/80"
            style={{ fontStyle: word === "Truth." ? "italic" : "normal" }}
          >
            {word}
          </span>
        ))}
      </div>
    </section>
  );
}
