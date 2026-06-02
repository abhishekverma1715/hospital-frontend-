import React from 'react';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Patient Education — Karunya Sugalaya, Kumbakonam',
  description: 'Learn to manage your diabetes better with practical, evidence-based articles in Tamil and English.',
};

interface Blog {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  cover_image: string;
  author: string;
  status: string;
  created_at: string;
}

async function getBlogs(): Promise<Blog[]> {
  try {
    const res = await fetch(`${process.env.API_URL || 'http://localhost:5000'}/api/blogs`, { cache: 'no-store' });
    if (!res.ok) return [];
    const data = await res.json();
    return data.filter((b: Blog) => b.status === 'published');
  } catch (err) {
    console.error(err);
    return [];
  }
}

function formatDate(value?: string): string | null {
  if (!value) return null;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return null;
  return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
}

export default async function EducationPage() {
  const blogs = await getBlogs();

  return (
    <>
      {/* ===== Header ===== */}
      <section className="relative overflow-hidden warm-mesh pt-20 md:pt-28 pb-24 px-margin-mobile md:px-margin-desktop text-center">
        <div className="blob w-[400px] h-[400px] -top-28 -left-24 bg-[#ffd5a9]" />
        <div className="blob blob-2 w-[440px] h-[440px] top-6 -right-28 bg-[#ade8de]" />

        <div className="max-w-3xl mx-auto relative z-10">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/70 backdrop-blur-sm text-primary font-bold rounded-full text-[12px] tracking-widest uppercase mb-6 border border-[#e8d8bf] shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Patient Education
          </span>
          <h1 className="font-display-lg text-[40px] sm:text-[52px] lg:text-[56px] leading-[1.05] font-extrabold tracking-tight text-on-surface mb-6">
            Learn to manage your diabetes better.
          </h1>
          <p className="font-body-lg text-[18px] text-on-surface-variant leading-relaxed">
            Practical, evidence-based articles in Tamil and English — written by Dr. Sivakumar and the Karunya Sugalaya team.
          </p>
        </div>
      </section>

      {/* ===== Article grid ===== */}
      <section className="py-16 md:py-24 px-margin-mobile md:px-margin-desktop max-w-container-max-width mx-auto">
        <h2 className="font-headline-md text-[24px] font-bold text-on-surface mb-8 flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">article</span>
          Latest Articles
        </h2>

        {blogs.length === 0 ? (
          <div className="flex flex-col items-center justify-center text-center py-20 rounded-[28px] border-2 border-dashed border-[#e8d8bf] bg-[#fbf7f1]">
            <span className="material-symbols-outlined text-[48px] text-[#c8a878] mb-3">menu_book</span>
            <h3 className="text-[20px] font-bold text-on-surface">No articles yet</h3>
            <p className="text-[15px] text-on-surface-variant mt-1 max-w-sm">
              New patient-education articles will appear here as soon as they&apos;re published.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => {
              const date = formatDate(blog.created_at);
              return (
                <Link key={blog.id} href={`/education/${blog.slug}`} className="group h-full">
                  <article className="soft-card h-full flex flex-col overflow-hidden">
                    {blog.cover_image ? (
                      <div className="h-44 overflow-hidden">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={blog.cover_image}
                          alt={blog.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    ) : (
                      <div className="h-44 flex items-center justify-center bg-gradient-to-br from-[#fff1de] via-[#fbf7f1] to-[#e8f4f1]">
                        <span className="material-symbols-outlined text-[44px] text-[#c8a878]">article</span>
                      </div>
                    )}

                    <div className="p-7 flex flex-col flex-grow">
                      <div className="flex items-center gap-2.5 text-[12px] font-bold uppercase tracking-wider mb-3">
                        <span className="text-primary">Article</span>
                        {date && (
                          <>
                            <span className="w-1 h-1 rounded-full bg-outline-variant" />
                            <span className="text-on-surface-variant">{date}</span>
                          </>
                        )}
                      </div>
                      <h3 className="text-[21px] leading-[27px] font-bold text-on-surface mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {blog.title}
                      </h3>
                      <p className="text-[15px] text-on-surface-variant leading-relaxed line-clamp-3 mb-5 flex-grow">
                        {blog.excerpt}
                      </p>
                      <div className="flex items-center gap-1.5 text-primary font-bold text-[14px] mt-auto">
                        Read article
                        <span className="material-symbols-outlined text-[18px] nudge-caret">arrow_forward</span>
                      </div>
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>
        )}
      </section>
    </>
  );
}
