import Link from "next/link";
import { BLOG_POSTS } from "@/components/blog/posts";

export function Learn() {
  return (
    <section
      id="learn"
      className="pb-28 pt-24 text-bone"
      style={{
        background:
          "radial-gradient(120% 100% at 12% 0%, rgba(198,120,92,.22), transparent 55%), #590515",
      }}
    >
      <div className="mx-auto max-w-[1000px] px-6">
        <div className="mb-16 max-w-[560px]">
          <div className="mb-4 text-xs font-semibold uppercase tracking-[.2em] text-terracotta">
            Learn with Maavie
          </div>
          <h2 className="font-display text-[clamp(28px,3.4vw,44px)] font-medium text-bone">
            Understand your hormones
          </h2>
          <p className="mt-4 text-lg text-bone/55">
            Clear, science-first reads — so you always know what&apos;s
            happening and why.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-x-10 gap-y-12 border-t border-bone/15 pt-12 sm:grid-cols-3">
          {BLOG_POSTS.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
              <div
                className="mb-5 aspect-[4/3] transition-transform duration-300 group-hover:scale-[1.02]"
                style={{ backgroundColor: post.tone }}
              />
              <span className="text-[11px] font-semibold uppercase tracking-[.14em] text-terracotta">
                {post.category} · {post.readingTime}
              </span>
              <h3 className="mt-2 font-display text-xl font-medium text-bone transition-colors group-hover:text-terracotta">
                {post.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-bone/55">
                {post.metaDescription}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
