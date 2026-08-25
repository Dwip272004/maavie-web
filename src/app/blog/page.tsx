import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BLOG_POSTS } from "@/components/blog/posts";

export const metadata: Metadata = {
  title: "Learn with Maavie — Blog",
  description:
    "Clear, science-first reads on hormones, skin, hair, mood and more — so you always know what's happening and why.",
};

export default function BlogIndexPage() {
  return (
    <main className="bg-bone pb-24">
      <div
        className="px-6 pb-16 pt-16 text-center text-bone"
        style={{
          background:
            "radial-gradient(120% 100% at 80% 10%, rgba(198,120,92,.4), transparent 55%), linear-gradient(160deg,#2a0509,#590515)",
        }}
      >
        <Link
          href="/"
          className="mb-8 inline-block text-sm font-semibold text-bone/70 hover:text-bone"
        >
          ← Back to Maavie
        </Link>
        <div className="mb-4 text-xs font-semibold uppercase tracking-[.18em] text-terracotta">
          Learn with Maavie
        </div>
        <h1 className="mx-auto max-w-[640px] font-display text-[clamp(30px,4.4vw,48px)] font-medium leading-tight text-bone">
          Understand your hormones
        </h1>
        <p className="mx-auto mt-4 max-w-[480px] text-lg text-bone/70">
          Clear, science-first reads — so you always know what&apos;s happening and why.
        </p>
      </div>

      <div className="mx-auto max-w-[1000px] px-6 pt-16">
        <div className="grid grid-cols-1 gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
              <div className="relative mb-5 aspect-[4/3] overflow-hidden">
                <Image
                  src={post.thumbnail}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <span className="text-[11px] font-semibold uppercase tracking-[.14em] text-terracotta">
                {post.category} · {post.readingTime}
              </span>
              <h2 className="mt-2 font-display text-xl font-medium text-deep-plum transition-colors group-hover:text-terracotta">
                {post.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-charcoal/60">
                {post.metaDescription}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
