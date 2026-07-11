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
      {/* ===== Hero with Patient Education Background Image ===== */}
      <section
        className="relative overflow-hidden py-14 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-cover bg-center md:bg-right text-white"
        style={{ backgroundImage: "url('/images/education-hero-bg.png')" }}
      >
        {/* Dark Teal Gradient Overlay for optimal readability on left without obscuring scene on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/95 via-[#0F172A]/85 to-[#0F172A]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/70 via-transparent to-transparent" />

        <div className="max-w-container-max-width mx-auto relative z-10">
          <div className="max-w-2xl text-left">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 bg-white/10 backdrop-blur-md text-cyan-300 font-bold rounded-full text-xs tracking-widest uppercase mb-4 border border-white/15 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-300 animate-pulse" />
              Patient Education
            </span>
            <h1 className="font-display-lg text-3xl sm:text-4xl lg:text-[44px] leading-[1.15] font-extrabold tracking-tight text-white mb-4 drop-shadow-sm">
              Learn to manage your diabetes better.
            </h1>
            <p className="font-body-lg text-base sm:text-lg text-gray-200 leading-relaxed">
              Practical, evidence-based articles in Tamil and English — written by Dr. Sivakumar and the Karunya Sugalaya team.
            </p>
          </div>
        </div>
      </section>

      {/* ===== Article grid ===== */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-container-max-width mx-auto">
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
