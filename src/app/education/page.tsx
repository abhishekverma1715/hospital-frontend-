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
  category?: string;
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

const DEFAULT_BLOGS: Blog[] = [
  {
    id: 1,
    title: 'நம் உணவும் சர்க்கரை நோயும் — தென்னிந்திய உணவு வழிகாட்டி',
    slug: 'south-indian-diabetic-nutrition-tamil',
    excerpt: 'Idli, dosai, rice, sambar — the foods we grew up with. Can you eat them and still control your blood sugar? This article explains the glycaemic impact of common Tamil Nadu staples, practical portion guidance, smart swaps, and how to eat your traditional food without spiking your sugar.',
    cover_image: '/assets/articles/diet-management.png',
    author: 'Dr. K. Sivakumar / Dr. B. Lakshmi',
    status: 'published',
    created_at: '2026-07-15T10:00:00Z',
    category: 'Nutrition · Tamil',
  },
  {
    id: 2,
    title: 'What is HbA1c — and why does it matter more than your daily sugar reading?',
    slug: 'what-is-hba1c-and-why-it-matters',
    excerpt: 'Most patients focus on their fasting blood sugar. But HbA1c tells you the real story — your average blood sugar over the past three months. This article explains what HbA1c measures, how to interpret your result, what your target should be, and why it is the number that matters most in diabetes management.',
    cover_image: '/assets/articles/diabetic-education.png',
    author: 'Dr. K. Sivakumar',
    status: 'published',
    created_at: '2026-07-16T11:00:00Z',
    category: 'Monitoring · English',
  },
  {
    id: 3,
    title: 'மாத்திரை எடுத்தாலும் சர்க்கரை ஏன் கட்டுக்குள் வரவில்லை?',
    slug: 'why-blood-sugar-remains-high-despite-medication-tamil',
    excerpt: 'Many patients take their medication faithfully but still see poor numbers. This article explains why medication alone is not enough — and what lifestyle factors must work alongside it. It also covers how different classes of diabetes medication work, why missing doses matters, and when insulin becomes necessary.',
    cover_image: '/assets/articles/insulin-management.png',
    author: 'Dr. K. Sivakumar',
    status: 'published',
    created_at: '2026-07-17T09:30:00Z',
    category: 'Medication · Tamil',
  },
  {
    id: 4,
    title: 'The 30-minute walk that can lower your HbA1c by 0.5%',
    slug: '30-minute-walk-lower-hba1c',
    excerpt: "Exercise is medicine in diabetes — but the advice needs to be practical for Tamil Nadu's climate and daily schedule. This article gives simple, evidence-based guidance on when to walk, how to build the habit, why the timing relative to meals matters for blood sugar, and how even modest physical activity delivers measurable improvements in HbA1c.",
    cover_image: '/assets/articles/obesity-management.png',
    author: 'Dr. K. Sivakumar',
    status: 'published',
    created_at: '2026-07-18T14:15:00Z',
    category: 'Lifestyle · English',
  },
];

export default async function EducationPage() {
  let blogs = await getBlogs();
  if (!blogs || blogs.length === 0) {
    blogs = DEFAULT_BLOGS;
  }

  return (
    <div className="bg-surface min-h-screen">
      {/* ===== Hero with Patient Education Background Image ===== */}
      <section
        className="relative w-full min-h-[260px] sm:min-h-[500px] md:min-h-[550px] lg:min-h-[650px] sm:h-[70svh] lg:h-[75svh] max-h-[800px] py-12 sm:py-0 flex items-center overflow-hidden px-4 sm:px-6 lg:px-8 bg-cover bg-center md:bg-right text-white"
        style={{ backgroundImage: "url('/images/education-hero-bg.png')" }}
      >
        {/* Dark Teal Gradient Overlay for optimal readability on left without obscuring scene on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/95 via-[#0F172A]/85 to-[#0F172A]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/70 via-transparent to-transparent" />

        <div className="max-w-container-max-width mx-auto relative z-10 w-full">
          <div className="max-w-2xl text-left">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 bg-white/10 backdrop-blur-md text-cyan-300 font-bold rounded-full text-xs tracking-widest uppercase mb-4 border border-white/15 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-300 animate-pulse" />
              Patient Education
            </span>
            <h1 className="font-display-lg text-3xl sm:text-4xl lg:text-[44px] leading-[1.15] font-extrabold tracking-tight text-white mb-4 drop-shadow-sm break-words">
              Learn to manage your diabetes better.
            </h1>
            <p className="font-body-lg text-base sm:text-lg text-gray-200 leading-relaxed break-words">
              Practical, evidence-based articles in Tamil and English written by Dr. Sivakumar and the Karunya Sugalaya team.
            </p>
          </div>
        </div>
      </section>

      {/* ===== Article grid ===== */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-container-max-width mx-auto">
        <h2 className="font-headline-md text-2xl sm:text-[24px] font-bold text-on-surface mb-8 flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">article</span>
          Latest Articles
        </h2>

        {blogs.length === 0 ? (
          <div className="flex flex-col items-center justify-center text-center py-20 rounded-[28px] border-2 border-dashed border-outline-variant/40 bg-surface-container-low">
            <span className="material-symbols-outlined text-[48px] text-primary mb-3">menu_book</span>
            <h3 className="text-[20px] font-bold text-on-surface">No articles yet</h3>
            <p className="text-[15px] text-on-surface-variant mt-1 max-w-sm">
              New patient-education articles will appear here as soon as they&apos;re published.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            {blogs.map((blog) => {
              const date = formatDate(blog.created_at);
              return (
                <Link key={blog.id} href={`/education/${blog.slug}`} className="group h-full block">
                  <article className="soft-card h-full flex flex-col overflow-hidden">
                    {blog.cover_image ? (
                      <div className="h-44 sm:h-52 overflow-hidden relative shrink-0 border-b border-outline-variant/20">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={blog.cover_image}
                          alt={blog.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    ) : (
                      <div className="h-44 sm:h-52 shrink-0 flex items-center justify-center bg-gradient-to-br from-primary/10 via-surface-container-low to-surface-container border-b border-outline-variant/20">
                        <span className="material-symbols-outlined text-[44px] text-primary/60">article</span>
                      </div>
                    )}

                    <div className="p-5 sm:p-7 flex flex-col flex-grow justify-between">
                      <div>
                        <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[11px] sm:text-[12px] font-bold uppercase tracking-wider mb-3">
                          <span className="text-primary">{blog.category || 'Article'}</span>
                          {date && (
                            <span className="flex items-center gap-2 text-on-surface-variant">
                              <span className="w-1 h-1 rounded-full bg-outline-variant" />
                              {date}
                            </span>
                          )}
                        </div>
                        <h3 className="text-lg sm:text-[21px] leading-snug sm:leading-[27px] font-bold text-on-surface mb-3 group-hover:text-primary transition-colors line-clamp-2 break-words">
                          {blog.title}
                        </h3>
                        <p className="text-sm sm:text-[15px] text-on-surface-variant leading-relaxed line-clamp-3 mb-5 break-words">
                          {blog.excerpt}
                        </p>
                      </div>
                      <div className="flex items-center gap-1.5 text-primary font-bold text-xs sm:text-[14px] pt-4 border-t border-gray-100/80 mt-auto">
                        Read article
                        <span className="material-symbols-outlined text-[16px] sm:text-[18px] nudge-caret">arrow_forward</span>
                      </div>
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
}
