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

const DEFAULT_BLOG_POSTS: Blog[] = [
  {
    id: 1,
    title: 'நம் உணவும் சர்க்கரை நோயும் தென்னிந்திய உணவு வழிகாட்டி',
    slug: 'south-indian-diabetic-nutrition-tamil',
    excerpt: 'Idli, dosai, rice, sambar the foods we grew up with. Can you eat them and still control your blood sugar? This article explains the glycaemic impact of common Tamil Nadu staples, practical portion guidance, smart swaps, and how to eat your traditional food without spiking your sugar.',
    cover_image: '/assets/articles/diet-management.png',
    author: 'Dr. K. Sivakumar / Dr. B. Lakshmi',
    status: 'published',
    created_at: '2026-07-15T10:00:00Z',
    updated_at: '2026-07-15T10:00:00Z',
    content: `# நம் உணவும் சர்க்கரை நோயும் தென்னிந்திய உணவு வழிகாட்டி

இட்லி, தோசை, சோறு, சாம்பார் நாம் தினமும் சாப்பிடும் உணவுகள். இவற்றை சாப்பிட்டுக்கொண்டே இரத்த சர்க்கரையை கட்டுக்குள் வைத்திருக்க முடியுமா? 

**கருண்யா சுகாலயா நீரிழிவு மையம்** வழங்கும் தென்னிந்திய உணவுமுறை வழிகாட்டி.

---

## தென்னிந்திய உணவுகளின் Glycaemic Impact (சர்க்கரை ஏற்றம்)

நமது பாரம்பரிய உணவுகளில் கார்போஹைட்ரேட் (Carbohydrate) அதிகம் உள்ளது. 

* **வெள்ளை அரிசி சாதம் & இட்லி/தோசை**: ரத்தத்தில் சர்க்கரையின் அளவை வேகமாக உயர்த்தும் (High Glycemic Index).
* **பருப்பு & காய்கறிகள்**: நார்ச்சத்து (Fiber) மற்றும் புரதம் (Protein) நிறைந்தது, சர்க்கரை மெதுவாக உயர உதவும்.

---

## 50-25-25 தட்டு முறை (Healthy Plate Method)

சாப்பிடும் போது உங்கள் தட்டை 3 பகுதிகளாக பிரியுங்கள்:

1. **50% காய்கறிகள் & கீரைகள்**: வெண்டைக்காய், சுரைக்காய், பாகற்காய், கீரைகள், வெள்ளரிக்காய் போன்ற நார்ச்சத்து மிகுந்த உணவுகள்.
2. **25% புரதச்சத்து (Protein)**: சுண்டல், பாசிப்பருப்பு, பன்னீர், முட்டை அல்லது மீன்/கோழி இறைச்சி.
3. **25% சிறுதானியங்கள் / அரிசி**: அளவு கட்டுப்படுத்தப்பட்ட குதிரைவாளி, சாமை, தினை அல்லது சப்பாத்தி.

---

## சர்க்கரை அளவை உயர்த்தாமல் சாப்பிட எளிய வழிகள்

* **சாப்பாட்டுக்கு முன் காய்/கீரை சாப்பிடுங்கள்**: முதலில் காய்கறிகளை சாப்பிட்டு விட்டு, இறுதியில் சாதம் சாப்பிடுவது ரத்த சர்க்கரை திடீரென உயர்வதை தடுக்கும்.
* **வெந்தயம் & சீரகம்**: உணவில் வெந்தயம் சேர்ப்பது இன்சுலின் சுரப்பை சீராக்க உதவும்.
* **இனிப்பு பானங்களை தவிர்க்கவும்**: பாக்கெட் ஜூஸ்கள், அதிக சர்க்கரை போட்ட டீ/காபியை தவிர்த்து மோர் அல்லது சுக்கு நீர் அருந்தலாம்.`,
  },
  {
    id: 2,
    title: 'What is HbA1c and why does it matter more than your daily sugar reading?',
    slug: 'what-is-hba1c-and-why-it-matters',
    excerpt: 'Most patients focus on their fasting blood sugar. But HbA1c tells you the real story your average blood sugar over the past three months. This article explains what HbA1c measures, how to interpret your result, what your target should be, and why it is the number that matters most in diabetes management.',
    cover_image: '/assets/articles/diabetic-education.png',
    author: 'Dr. K. Sivakumar',
    status: 'published',
    created_at: '2026-07-16T11:00:00Z',
    updated_at: '2026-07-16T11:00:00Z',
    content: `# Understanding HbA1c: The True Picture of Glycemic Control

Most patients focus strictly on their fasting blood sugar reading in the morning. However, fasting glucose only gives a single snapshot in time which can fluctuate based on stress, sleep, or what you ate the night before.

**HbA1c (Glycated Hemoglobin)** measures the percentage of blood sugar attached to your red blood cells. Since red blood cells live for approximately 120 days, the HbA1c test reveals your average blood sugar level over the past 2 to 3 months.

---

## How to Interpret Your HbA1c Result

* **Below 5.7%**: Normal / Non-diabetic range.
* **5.7% to 6.4%**: Pre-diabetes range a vital window of opportunity for reversal through diet and lifestyle.
* **6.5% and above**: Diabetic range.

---

## Target HbA1c Goals

For most non-pregnant adults with diabetes, the International Diabetes Federation (IDF) and clinical guidelines recommend maintaining an **HbA1c below 7.0%**.

> "At Karunya Sugalaya, bringing an HbA1c above 12.0% down below 7.0% within six months is routine practice through structured clinical decision support." Dr. K. Sivakumar

---

## Why HbA1c Prevents Long-Term Complications

Keeping your HbA1c consistently under 7.0% drastically reduces your risk of chronic microvascular and macrovascular complications:
* **Diabetic Retinopathy** (Vision loss protection)
* **Diabetic Nephropathy** (Kidney health preservation)
* **Diabetic Peripheral Neuropathy** (Foot nerve salvage)`,
  },
  {
    id: 3,
    title: 'மாத்திரை எடுத்தாலும் சர்க்கரை ஏன் கட்டுக்குள் வரவில்லை?',
    slug: 'why-blood-sugar-remains-high-despite-medication-tamil',
    excerpt: 'Many patients take their medication faithfully but still see poor numbers. This article explains why medication alone is not enough and what lifestyle factors must work alongside it. It also covers how different classes of diabetes medication work, why missing doses matters, and when insulin becomes necessary.',
    cover_image: '/assets/articles/insulin-management.png',
    author: 'Dr. K. Sivakumar',
    status: 'published',
    created_at: '2026-07-17T09:30:00Z',
    updated_at: '2026-07-17T09:30:00Z',
    content: `# மாத்திரை எடுத்தாலும் சர்க்கரை ஏன் கட்டுக்குள் வரவில்லை?

பல நோயாளிகள் தினமும் தவறாமல் மாத்திரை சாப்பிட்டாலும், அவர்களின் இரத்த சர்க்கரை அளவு 200 mg/dL-க்கும் அதிகமாகவே இருக்கிறது. இதற்கு என்ன காரணம்?

---

## 1. மாத்திரை மட்டும் போதாது வாழ்க்கைமுறை மாற்றம் அவசியம்

நீரிழிவு என்பது வெறும் மாத்திரை சாப்பிடுவதால் மட்டும் குணமடையும் நோய் அல்ல. 

* **உணவு நேரம்**: மாத்திரை சாப்பிட்ட பிறகும் அதிக அளவில் அரிசி சாதம் அல்லது இனிப்புகள் சாப்பிட்டால் சர்க்கரை உயரவே செய்யும்.
* **உடற்பயிற்சி இன்மை**: தினமும் குறைந்தது 30 நிமிடம் நடைபயிற்சி செய்யாவிட்டால் செல்கள் இன்சுலினை சரியாக பயன்படுத்தாது (Insulin Resistance).

---

## 2. மாத்திரை சாப்பிடும் நேரத்தில் தவறு

சில மாத்திரைகள் உணவுக்கு 15 நிமிடத்திற்கு முன் சாப்பிட வேண்டும், சில மாத்திரைகள் உணவுக்கு பின் சாப்பிட வேண்டும். 
* மாத்திரை சாப்பிடும் நேரத்தை மாற்றினால் அதன் வீரியம் குறையும்.
* டோஸ் (Dose) தவறவிடுவது சர்க்கரை அளவை திடீரென உயர்த்தும்.

---

## 3. கணையத்தின் இன்சுலின் சுரப்பு குறைதல்

காலப்போக்கில் உடலில் இன்சுலின் சுரக்கும் செல்கள் பலவீனமடையலாம். அப்போது வெறும் வாய்வழி மாத்திரைகள் (Oral Tablets) மட்டும் போதாது. 
* மருத்துவரின் ஆலோசனைப்படி இன்சுலின் (Insulin Therapy) தொடங்குவது பக்கவிளைவுகளையும் உறுப்பு பாதிப்புகளையும் தடுக்கும்.`,
  },
  {
    id: 4,
    title: 'The 30-minute walk that can lower your HbA1c by 0.5%',
    slug: '30-minute-walk-lower-hba1c',
    excerpt: "Exercise is medicine in diabetes but the advice needs to be practical for Tamil Nadu's climate and daily schedule. This article gives simple, evidence-based guidance on when to walk, how to build the habit, why the timing relative to meals matters for blood sugar, and how even modest physical activity delivers measurable improvements in HbA1c.",
    cover_image: '/assets/articles/obesity-management.png',
    author: 'Dr. K. Sivakumar',
    status: 'published',
    created_at: '2026-07-18T14:15:00Z',
    updated_at: '2026-07-18T14:15:00Z',
    content: `# Exercise as Clinical Medicine in Diabetes

Physical activity is one of the most effective non-pharmacological interventions for lowering blood glucose. Engaging in just **30 minutes of brisk walking daily** can improve insulin sensitivity and lower your HbA1c by up to 0.5% equivalent to the effect of adding an extra oral diabetic medication!

---

## Why Timing Matters: Post-Meal Walking

The single best time for a walk is **30 minutes after your main meal** (especially after lunch or dinner). 

When you move your legs and large muscle groups after eating:
1. Muscles absorb glucose directly from the bloodstream **without needing extra insulin**.
2. Postprandial (post-meal) blood sugar spikes are flattened by up to 40 mg/dL.

---

## Practical Tips for Tamil Nadu's Climate

* **Early Morning or Post-Dinner**: Avoid walking in intense heat. A 20 to 30-minute brisk walk after dinner in cool air is highly effective.
* **Pacing**: Walk at a pace where you can comfortably speak but cannot sing.
* **Foot Care Safety**: Always wear proper protective footwear with soft insoles. Never walk barefoot on rough surfaces.`,
  },
];

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  let blog = await getBlog(slug);
  if (!blog) {
    blog = DEFAULT_BLOG_POSTS.find((b) => b.slug === slug) || null;
  }
  if (!blog) return { title: 'Article Not Found Karunya Sugalaya' };
  return {
    title: `${blog.title} — Karunya Sugalaya`,
    description: blog.excerpt || undefined,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let blog = await getBlog(slug);
  if (!blog) {
    blog = DEFAULT_BLOG_POSTS.find((b) => b.slug === slug) || null;
  }

  if (!blog) {
    return (
      <section className="bg-surface-container-low py-32 px-4 sm:px-6 lg:px-8 border-b border-outline-variant/30">
        <div className="max-w-xl mx-auto text-center">
          <div className="w-20 h-20 mx-auto rounded-full bg-error/10 text-error flex items-center justify-center mb-6">
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
    <article className="bg-surface min-h-screen">
      {/* ===== Hero ===== */}
      <section className="relative overflow-hidden bg-surface-container-low border-b border-outline-variant/30 pt-16 md:pt-24 pb-24 md:pb-28 px-4 sm:px-6 lg:px-8">
        <div className="absolute w-[380px] h-[380px] -top-24 -left-20 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute w-[420px] h-[420px] top-12 -right-28 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-3xl mx-auto relative z-10">
          <Link
            href="/education"
            className="inline-flex items-center gap-1.5 text-primary font-bold text-xs sm:text-[14px] mb-6 sm:mb-8 hover:-translate-x-0.5 transition-transform"
          >
            <span className="material-symbols-outlined text-[16px] sm:text-[18px]">arrow_back</span>
            Back to articles
          </Link>

          <span className="flex items-center gap-2 px-3.5 py-1.5 bg-white/80 backdrop-blur-sm text-primary font-bold rounded-full text-[11px] sm:text-[12px] tracking-widest uppercase w-max border border-outline-variant/40 shadow-sm mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Patient Education
          </span>

          <h1 className="font-display-lg text-2xl sm:text-[38px] lg:text-[48px] leading-[1.15] text-on-surface font-extrabold tracking-tight mb-6 break-words">
            {blog.title}
          </h1>

          {blog.excerpt && (
            <p className="font-body-lg text-base sm:text-[19px] text-on-surface-variant leading-relaxed mb-8 break-words">
              {blog.excerpt}
            </p>
          )}

          {/* Meta row: author · date · reading time */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-xs sm:text-[14px] font-semibold text-on-surface-variant">
            <span className="flex items-center gap-2.5">
              <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-primary/10 text-primary flex items-center justify-center font-extrabold text-sm sm:text-[15px] shrink-0">
                {author.charAt(0).toUpperCase()}
              </span>
              {author}
            </span>
            {date && (
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px] sm:text-[18px] text-primary">calendar_today</span>
                {date}
              </span>
            )}
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px] sm:text-[18px] text-primary">schedule</span>
              {minutes} min read
            </span>
          </div>
        </div>
      </section>

      {/* ===== Cover image ===== */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 sm:-mt-16 relative z-10">
        {blog.cover_image ? (
          <div className="w-full h-[220px] sm:h-[340px] md:h-[440px] rounded-2xl sm:rounded-[28px] overflow-hidden border border-outline-variant/30 shadow-xl bg-white">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={blog.cover_image} alt={blog.title} className="w-full h-full object-cover" />
          </div>
        ) : (
          <div className="img-placeholder w-full h-[200px] md:h-[300px] bg-white border border-outline-variant/30 rounded-2xl sm:rounded-[28px]">
            <span className="ph-label">Article cover</span>
            <span className="ph-dim">1200 × 600</span>
          </div>
        )}
      </div>

      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        <div className="article-prose text-left break-words leading-relaxed" dangerouslySetInnerHTML={{ __html: contentHtml }} />

        <div className="mt-12 sm:mt-16 pt-8 border-t border-outline-variant/30">
          <Link
            href="/education"
            className="inline-flex items-center gap-1.5 text-primary font-bold text-sm sm:text-[15px] hover:-translate-x-0.5 transition-transform"
          >
            <span className="material-symbols-outlined text-[16px] sm:text-[18px]">arrow_back</span>
            Back to all articles
          </Link>
        </div>
      </section>
    </article>
  );
}
