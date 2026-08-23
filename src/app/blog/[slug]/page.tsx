import Link from "next/link";
import { notFound } from "next/navigation";
import { BLOG_POSTS, getBlogPost } from "@/components/blog/posts";

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

type BlogPostParams = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: BlogPostParams) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} — Maavie`,
    description: post.metaDescription,
  };
}

export default async function BlogPostPage({ params }: BlogPostParams) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  return (
    <main className="bg-bone pb-20">
      <div
        className="px-6 pb-14 pt-16 text-center text-bone"
        style={{
          background:
            "radial-gradient(120% 100% at 80% 10%, rgba(198,120,92,.4), transparent 55%), linear-gradient(160deg,#2a0509,#590515)",
        }}
      >
        <Link
          href="/#learn"
          className="mb-8 inline-block text-sm font-semibold text-bone/70 hover:text-bone"
        >
          ← Back to Maavie
        </Link>
        <div className="mb-4 text-xs font-semibold uppercase tracking-[.18em] text-terracotta">
          {post.category} · {post.readingTime}
        </div>
        <h1 className="mx-auto max-w-[720px] font-display text-[clamp(28px,4vw,42px)] font-medium leading-tight text-bone">
          {post.title}
        </h1>
      </div>

      <article
        className="blog-post mx-auto max-w-[680px] px-6 pt-12"
        dangerouslySetInnerHTML={{ __html: post.bodyHtml }}
      />

      <div className="mx-auto mt-12 max-w-[680px] px-6 text-center">
        <Link
          href="/quiz"
          className="inline-block rounded-full bg-deep-plum px-9 py-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-bone transition-colors hover:bg-[#450110]"
        >
          Take the Hormone Snapshot Quiz
        </Link>
      </div>
    </main>
  );
}
