"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { BLOG_POSTS } from "@/components/blog/posts";

function PostCard({ post }: { post: (typeof BLOG_POSTS)[number] }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <div className="relative mb-5 aspect-[4/3] overflow-hidden rounded-lg shadow-[0_14px_40px_rgba(0,0,0,0.28)]">
        <Image
          src={post.thumbnail}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
          sizes="(max-width: 640px) 84vw, (max-width: 1024px) 45vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>
      <span className="text-[11px] font-semibold uppercase tracking-[.14em] text-terracotta">
        {post.category} · {post.readingTime}
      </span>
      <h3 className="mt-2 font-display text-xl font-medium text-bone transition-colors group-hover:text-terracotta">
        {post.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-bone/55">{post.metaDescription}</p>
    </Link>
  );
}

export function Learn() {
  const featured = BLOG_POSTS.slice(0, 3);
  const more = BLOG_POSTS.slice(3);
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.firstElementChild as HTMLElement | null;
    const amount = (card?.offsetWidth ?? 320) + 32;
    track.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

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
        <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-[560px]">
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
          <Link
            href="/blog"
            className="shrink-0 border-b border-bone/40 pb-1 text-sm font-semibold text-bone transition-colors hover:border-terracotta hover:text-terracotta"
          >
            View all articles →
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-x-10 gap-y-12 border-t border-bone/15 pt-12 sm:grid-cols-3">
          {featured.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>

        {more.length > 0 && (
          <div className="mt-16 border-t border-bone/15 pt-12">
            <div className="mb-6 flex items-center justify-between">
              <span className="text-[11px] font-semibold uppercase tracking-[.14em] text-bone/50">
                More reads
              </span>
              <div className="hidden gap-2 sm:flex">
                <button
                  type="button"
                  onClick={() => scrollByCard(-1)}
                  aria-label="Scroll left"
                  className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-bone/25 text-bone transition-colors hover:border-terracotta hover:text-terracotta"
                >
                  ←
                </button>
                <button
                  type="button"
                  onClick={() => scrollByCard(1)}
                  aria-label="Scroll right"
                  className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-bone/25 text-bone transition-colors hover:border-terracotta hover:text-terracotta"
                >
                  →
                </button>
              </div>
            </div>

            <div
              ref={trackRef}
              className="-mx-6 flex snap-x snap-mandatory gap-8 overflow-x-auto px-6 pb-2 [scrollbar-width:none] [-webkit-mask-image:linear-gradient(90deg,transparent,black_24px,black_calc(100%-24px),transparent)] [mask-image:linear-gradient(90deg,transparent,black_24px,black_calc(100%-24px),transparent)] [&::-webkit-scrollbar]:hidden"
            >
              {more.map((post) => (
                <div
                  key={post.slug}
                  className="w-[84vw] shrink-0 snap-start sm:w-[45%] lg:w-[calc(33.333%-1.4rem)]"
                >
                  <PostCard post={post} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
