import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { renderMarkdown, readingTime } from '@/lib/markdown';

export const dynamic = 'force-dynamic';

interface Blog {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  cover_image: string;
  author: string;
  status: string;
  created_at: string;
  updated_at: string;
}

async function getBlog(slug: string): Promise<Blog | null> {
  try {
    const res = await fetch(`${process.env.API_URL || 'http://localhost:5000'}/api/blogs/${slug}`, { cache: 'no-store' });
    if (!res.ok) return null;
    return res.json();
  } catch (err) {
    console.error(err);
    return null;
  }
}

function formatDate(value?: string): string | null {
  if (!value) return null;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return null;
  return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getBlog(slug);
  if (!blog) return { title: 'Article Not Found — Karunya Sugalaya' };
  return {
    title: `${blog.title} — Karunya Sugalaya`,
    description: blog.excerpt || undefined,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = await getBlog(slug);

  if (!blog) {
    return (
      <section className="warm-mesh-soft py-32 px-margin-mobile">
        <div className="max-w-xl mx-auto text-center">
          <div className="w-20 h-20 mx-auto rounded-full bg-[#fde8e2] text-[#b91c1c] flex items-center justify-center mb-6">
            <span className="material-symbols-outlined text-[40px]">search_off</span>
          </div>
          <h1 className="font-headline-lg text-[32px] sm:text-[40px] font-bold text-on-surface mb-4">Article not found</h1>
          <p className="text-on-surface-variant text-[17px] mb-8 leading-relaxed">
            The article you&apos;re looking for doesn&apos;t exist or may have been removed.
          </p>
          <Link
            href="/education"
            className="inline-flex items-center gap-2 bg-primary text-on-primary px-7 py-3.5 rounded-full font-bold shadow-lg shadow-primary/30 hover:-translate-y-1 transition-all"
          >
            <span className="material-symbols-outlined text-[20px]">arrow_back</span>
            Back to Patient Education
          </Link>
        </div>
      </section>
    );
  }

  const date = formatDate(blog.created_at);
  const minutes = readingTime(blog.content);
  const author = blog.author || 'Karunya Sugalaya';
  const contentHtml = renderMarkdown(blog.content);

  return (
    <article>
      {/* ===== Hero ===== */}
      <section className="relative overflow-hidden warm-mesh pt-16 md:pt-24 pb-28 px-margin-mobile md:px-margin-desktop">
        <div className="blob w-[380px] h-[380px] -top-24 -left-20 bg-[#ffd5a9]" />
        <div className="blob blob-2 w-[420px] h-[420px] top-12 -right-28 bg-[#ade8de]" />

        <div className="max-w-3xl mx-auto relative z-10">
          <Link
            href="/education"
            className="inline-flex items-center gap-1.5 text-primary font-bold text-[14px] mb-8 hover:-translate-x-0.5 transition-transform"
          >
            <span className="material-symbols-outlined text-[18px]">arrow_back</span>
            Back to articles
          </Link>

          <span className="flex items-center gap-2 px-4 py-1.5 bg-white/70 backdrop-blur-sm text-primary font-bold rounded-full text-[12px] tracking-widest uppercase w-max border border-[#e8d8bf] shadow-sm mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Patient Education
          </span>

          <h1 className="font-display-lg text-[32px] sm:text-[44px] lg:text-[52px] leading-[1.1] text-on-surface font-extrabold tracking-tight mb-6">
            {blog.title}
          </h1>

          {blog.excerpt && (
            <p className="font-body-lg text-[18px] sm:text-[20px] text-on-surface-variant leading-relaxed mb-8">
              {blog.excerpt}
            </p>
          )}

          {/* Meta row: author · date · reading time */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-[14px] font-semibold text-on-surface-variant">
            <span className="flex items-center gap-2.5">
              <span className="w-9 h-9 rounded-full bg-[#fff1de] text-[#c8731f] flex items-center justify-center font-extrabold text-[15px]">
                {author.charAt(0).toUpperCase()}
              </span>
              {author}
            </span>
            {date && (
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[18px] text-primary">calendar_today</span>
                {date}
              </span>
            )}
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[18px] text-primary">schedule</span>
              {minutes} min read
            </span>
          </div>
        </div>
      </section>

      {/* ===== Cover image ===== */}
      <div className="max-w-4xl mx-auto px-margin-mobile md:px-margin-desktop -mt-16 relative z-10">
        {blog.cover_image ? (
          <div className="w-full h-[260px] md:h-[440px] rounded-[28px] overflow-hidden border border-[#e8d8bf] shadow-[0_12px_40px_rgba(120,90,50,0.12)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={blog.cover_image} alt={blog.title} className="w-full h-full object-cover" />
          </div>
        ) : (
          <div className="img-placeholder w-full h-[200px] md:h-[300px]">
            <span className="ph-label">Article cover</span>
            <span className="ph-dim">1200 × 600</span>
          </div>
        )}
      </div>

      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        <div className="article-prose text-justify sm:text-left break-words leading-relaxed" dangerouslySetInnerHTML={{ __html: contentHtml }} />

        <div className="mt-16 pt-8 border-t border-[#e8d8bf]">
          <Link
            href="/education"
            className="inline-flex items-center gap-1.5 text-primary font-bold text-[15px] hover:-translate-x-0.5 transition-transform"
          >
            <span className="material-symbols-outlined text-[18px]">arrow_back</span>
            Back to all articles
          </Link>
        </div>
      </section>
    </article>
  );
}
