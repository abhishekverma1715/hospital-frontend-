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
    title: 'Complete Diabetic Education Guide: Understanding & Living Well with Diabetes',
    slug: 'diabetic-education-guide',
    excerpt: 'A comprehensive guide explaining diabetes pathophysiology, early warning signs, target blood glucose ranges, and everyday self-management strategies.',
    cover_image: '/assets/articles/diabetic-education.png',
    author: 'Dr. K. Sivakumar, M.D.',
    status: 'published',
    created_at: '2026-07-15T10:00:00Z',
    updated_at: '2026-07-15T10:00:00Z',
    content: `# Empowering Patients Through Clinical Education

Diabetes mellitus is not merely a condition of elevated blood sugar; it is a complex metabolic syndrome that impacts multiple organ systems. At **Karunya Sugalaya Diabetes Centre**, we firmly believe that an educated patient is the most effective member of the healthcare team.

---

## Understanding Diabetes Subtypes

1. **Type 1 Diabetes Mellitus (T1DM)**: An autoimmune condition wherein the immune system attacks insulin-producing beta cells in the pancreas. Absolute insulin replacement is essential.
2. **Type 2 Diabetes Mellitus (T2DM)**: Characterized by progressive insulin resistance combined with insulin secretory defect. It is heavily influenced by genetics, visceral adiposity, and physical inactivity.
3. **Gestational Diabetes Mellitus (GDM)**: Glucose intolerance diagnosed during pregnancy, requiring strict monitoring to protect both maternal and fetal well-being.

---

## Key Clinical Targets (IDF & ADA Guidelines)

To prevent chronic microvascular (retinopathy, nephropathy, neuropathy) and macrovascular (cardiovascular) complications, target the following glycemic metrics:

* **Fasting Plasma Glucose (FPG)**: 80 – 130 mg/dL
* **Postprandial Glucose (PPG - 2 hours after meals)**: Less than 180 mg/dL
* **Glycated Hemoglobin (HbA1c)**: Less than 7.0% for most adults (individualized based on age and comorbidities)

> "Structured patient education reduces diabetes-related hospital admissions by over 40% and significantly slows chronic disease progression." — Dr. K. Sivakumar

---

## The Four Pillars of Daily Self-Management

* **Nutritional Discipline**: Adopting portion-controlled, high-fiber, low-glycemic meals.
* **Consistent Physical Activity**: At least 150 minutes per week of moderate-intensity aerobic exercise combined with resistance training.
* **Precision Glucose Monitoring**: Utilizing Continuous Glucose Monitoring (CGM) or regular self-monitoring of blood glucose (SMBG).
* **Medication Adherence**: Never skipping prescribed insulin or oral anti-diabetic medications without medical consultation.`,
  },
  {
    id: 2,
    title: 'Mastering Insulin Management: Types, Storage, and Safe Injection Practices',
    slug: 'mastering-insulin-management',
    excerpt: 'Essential practical advice on basal and bolus insulins, proper refrigeration and pen storage, site rotation regimens, and preventing hypoglycemia.',
    cover_image: '/assets/articles/insulin-management.png',
    author: 'Dr. B. Lakshmi, D. Diab.',
    status: 'published',
    created_at: '2026-07-16T11:00:00Z',
    updated_at: '2026-07-16T11:00:00Z',
    content: `# The Lifesaving Role of Insulin Therapy

Insulin is a natural hormone produced by the pancreas. When natural production declines or cells become highly resistant, exogenous insulin therapy is initiated to restore metabolic harmony and protect vital organs.

---

## Modern Insulin Classifications

* **Rapid-Acting Insulins (e.g., Aspart, Lispro, Glulisine)**: Administered 5–15 minutes prior to meals. Onset occurs within 15 minutes, peaking around 1–2 hours to cover mealtime glucose spikes.
* **Short-Acting (Regular) Insulins**: Taken 30 minutes before meals, with a duration of 6–8 hours.
* **Intermediate-Acting (NPH)**: Provides baseline coverage lasting up to 12–16 hours.
* **Long-Acting Basal Insulins (e.g., Glargine, Detemir, Degludec)**: Administered once or twice daily at the exact same time, providing steady, peakless 24-hour background insulin coverage.
* **Premixed Insulins**: Combinations of rapid/short and intermediate insulins for simplified dosing schedules.

---

## Storage and Handling Protocols

1. **Unopened Insulin Pens/Vials**: Must be stored inside the refrigerator at **2°C to 8°C (36°F to 46°F)**. Never freeze insulin; frozen insulin loses potency and must be discarded.
2. **In-Use Pens/Vials**: Can be kept at room temperature (up to 25°C/77°F) away from direct sunlight and heat. Must be discarded after **28 days** (or as specified by the manufacturer), even if some medication remains.

---

## Best Practices for Safe Injection

* **Site Rotation**: Rotate injection sites across the abdomen (at least 2 inches away from the navel), outer thighs, upper buttocks, and back of the arms to prevent **lipohypertrophy** (lumpy tissue buildup that causes unpredictable insulin absorption).
* **Needle Safety**: Always use a fresh, sterile pen needle (4mm or 5mm) for every injection. Never reuse needles.
* **Recognizing Hypoglycemia**: If blood sugar drops below 70 mg/dL, immediately consume 15 grams of fast-acting carbohydrates (3 glucose tablets, half a cup of fruit juice, or 3 teaspoons of sugar) and retest after 15 minutes (**The Rule of 15**).`,
  },
  {
    id: 3,
    title: 'Practical Diabetic Diet Management: Plate Method & South Indian Meal Plans',
    slug: 'practical-diabetic-diet-management',
    excerpt: 'How to enjoy traditional South Indian favorites while maintaining steady glycemic control using portion planning, fiber optimization, and glycemic index tips.',
    cover_image: '/assets/articles/diet-management.png',
    author: 'Mrs. L. Ramya, M.Sc.',
    status: 'published',
    created_at: '2026-07-17T09:30:00Z',
    updated_at: '2026-07-17T09:30:00Z',
    content: `# Nutrition as Clinical Therapy

Diet management is the cornerstone of glycemic control. A diabetic diet is not about total starvation or eliminating favorite traditional dishes; rather, it is about understanding glycemic response, portion control, and meal timing.

---

## The Karunya Sugalaya Healthy Plate Method

When preparing your lunch or dinner, visualize your plate divided into three zones:

1. **50% Non-Starchy Vegetables**: Fill half your plate with colorful greens and fiber-rich vegetables such as spinach (keerai), bottle gourd (suraikai), bitter gourd (pavakkai), ladies finger (vendakkai), and cucumber.
2. **25% High-Quality Lean Protein**: Dedicate one quarter of your plate to protein sources like sundal (boiled legumes), dal, paneer, tofu, eggs, or grilled fish/chicken. Protein stabilizes blood sugar curves and promotes satiety.
3. **25% Complex Carbohydrates**: Limit grains to one quarter of your plate. Replace polished white rice with traditional millets (foxtail millet, little millet, pearl millet), red rice, or whole wheat chapatis.

> "Small adjustments in cooking methods — such as adding methi seeds, parboiling vegetables, and pairing carbohydrates with healthy fats and proteins — can flatten postprandial glucose spikes by up to 35%." — Mrs. L. Ramya, Clinical Dietician

---

## Smart Eating Rules for Everyday Health

* **Avoid Liquid Sugars**: Completely eliminate soft drinks, packet fruit juices, and sweetened teas/coffees. Opt for buttermilk (mor), clear vegetable soups, or tender coconut water in moderation.
* **Frequent, Balanced Meals**: Eat 3 main meals and 2 small healthy snacks (such as roasted makhana, almonds, or guava) at consistent intervals to prevent severe fluctuations in insulin secretion.
* **Glycemic Index (GI) Awareness**: Choose foods with a low GI (below 55) that release glucose slowly into the bloodstream.`,
  },
  {
    id: 4,
    title: 'RITAM 360° Holistic Care Program: Precision Medicine Meets Lifestyle Science',
    slug: 'ritam-360-holistic-diabetes-care',
    excerpt: 'Explore Karunya Sugalaya’s signature multidisciplinary protocol combining AI-assisted glucose tracking, clinical nutrition, yoga, and stress mastery.',
    cover_image: '/assets/articles/ritam-360.png',
    author: 'Dr. K. Sivakumar, M.D.',
    status: 'published',
    created_at: '2026-07-18T14:15:00Z',
    updated_at: '2026-07-18T14:15:00Z',
    content: `# Introducing RITAM 360°: Total Metabolic Restoration

True diabetes remission and long-term complication prevention require more than simply prescribing tablets. At Karunya Sugalaya, we engineered the **RITAM 360° Holistic Diabetes Care Program** — an integrative scientific protocol designed to treat the patient as a whole being.

---

## Core Pillars of the RITAM 360° Protocol

1. **Precision Clinical Diabetology & CGM Integration**: Using Continuous Glucose Monitoring sensors to map real-time glucose dynamics, pinpointing exact foods, emotional stressors, and sleep disruptions that trigger glucose spikes.
2. **Medical Nutrition Therapy (MNT)**: Personalized meal plans crafted by clinical dieticians tailored to individual metabolic rates, gut health, and cultural food preferences.
3. **Therapeutic Yoga & Pranayama**: Specialized yogic postures (such as Mandukasana, Ardha Matsyendrasana, and Surya Namaskar) clinically proven to stimulate pancreatic blood circulation and enhance cellular insulin sensitivity.
4. **Mindfulness & Stress Mastery**: Chronic cortisol (stress hormone) secretion directly raises blood glucose. Our structured meditation protocols lower stress biomarkers and stabilize autonomic nervous function.
5. **Sleep Architecture Optimization**: Ensuring 7–8 hours of restorative deep sleep to balance ghrelin, leptin, and growth hormone secretion.

---

## Clinical Outcomes of RITAM 360°

Patients enrolled in our 6-month and 12-month RITAM protocols consistently achieve:
* Significant reduction in HbA1c (average drop of 1.8% to 3.2%)
* Reduction or safe deprescribing of oral medications under close medical supervision
* Enhanced energy, mental clarity, and improved cardiovascular fitness`,
  },
  {
    id: 5,
    title: 'Diabetic Foot Care Education: Daily Inspection, Footwear & Neuropathy Prevention',
    slug: 'diabetic-foot-care-prevention',
    excerpt: 'Critical daily protective steps to safeguard against neuropathy and foot ulcers, safe toenail care guidelines, and how to choose custom orthopedic footwear.',
    cover_image: '/assets/articles/foot-care.png',
    author: 'Dr. B. Lakshmi, D. Diab.',
    status: 'published',
    created_at: '2026-07-19T16:20:00Z',
    updated_at: '2026-07-19T16:20:00Z',
    content: `# Protecting Your Feet from Diabetic Complications

Diabetic peripheral neuropathy gradually reduces protective sensation in the lower extremities, while peripheral arterial disease reduces vital blood flow. Consequently, even a minor pebble cut, blister, or ingrown toenail can quickly escalate into a serious diabetic foot ulcer if left undetected.

---

## The 5-Minute Daily Foot Inspection Checklist

Every evening before sleeping, perform a thorough inspection of both feet:

* **Check the Soles and Between Toes**: Use a mirror (or ask a family member) to look for cuts, blisters, redness, swelling, or warm spots.
* **Wash and Dry Gently**: Wash feet daily in lukewarm water (never hot water). Dry thoroughly using a soft towel, paying extra attention to the spaces between the toes where moisture can foster fungal infections.
* **Moisturize the Skin**: Apply a mild, unscented moisturizing cream or coconut oil to the tops and soles of the feet to prevent dry, cracked skin. **Never apply moisturizer between the toes.**

---

## Safe Toenail & Footwear Guidelines

1. **Straight-Edge Nail Trim**: Cut toenails straight across and file sharp corners gently with an emery board. Never dig into the corners with sharp scissors or clippers.
2. **Never Walk Barefoot**: Always wear protective footwear inside and outside the home. Even small splinters or hot floor surfaces can cause severe burns without pain warning.
3. **Customized Orthopedic & Diabetic Footwear**: Wear deep-toe-box shoes made of breathable, soft materials with microcellular polymer (MCP) insoles that evenly distribute plantar pressure. Inspect shoe interiors with your hand before wearing to ensure no foreign objects are inside.

> "Early diagnosis of neuropathy using biothesiometry and Doppler arterial assessment at Karunya Sugalaya prevents over 95% of diabetic foot complications." — Dr. B. Lakshmi`,
  },
  {
    id: 6,
    title: 'Scientific Obesity Management in Diabetes: Reversing Metabolic Risk',
    slug: 'scientific-obesity-management-diabetes',
    excerpt: 'Understanding the biological link between visceral adipose tissue and insulin resistance, structured clinical weight reduction, and long-term metabolic health.',
    cover_image: '/assets/articles/obesity-management.png',
    author: 'Dr. K. Sivakumar, M.D.',
    status: 'published',
    created_at: '2026-07-20T12:00:00Z',
    updated_at: '2026-07-20T12:00:00Z',
    content: `# The Visceral Fat and Insulin Resistance Connection

Obesity and Type 2 Diabetes are deeply interlinked metabolic disorders often referred to clinically as **Diabesity**. When excess fat accumulates around internal organs in the abdominal cavity (visceral adipose tissue), it releases inflammatory cytokines and free fatty acids that directly block insulin signaling pathways.

---

## Why Weight Loss is the Most Powerful Diabetes Medicine

Clinical research confirms that losing **5% to 10% of total body weight** can lead to dramatic improvements in insulin sensitivity, blood pressure, and lipid profiles. In many newly diagnosed patients, structured weight loss can achieve complete clinical remission of Type 2 Diabetes.

---

## Our Evidence-Based Clinical Obesity Protocols

At Karunya Sugalaya’s specialized **Obesity & Metabolic Clinic**, we do not advocate crash diets or unscientific supplements. Instead, we utilize a tiered medical approach:

1. **Body Composition & Metabolic Assessment**: Advanced bio-impedance analysis to precisely measure visceral fat area, skeletal muscle mass, basal metabolic rate (BMR), and total body water.
2. **Targeted Medical Nutrition & Caloric Optimization**: Customized hypocaloric high-protein, adequate-fiber diets designed to burn visceral fat while preserving critical skeletal muscle.
3. **Medical & Pharmacological Management**: When clinically indicated, safe prescription medications (including GLP-1 receptor agonists and SGLT2 inhibitors) are utilized to regulate appetite, enhance satiety curves, and promote cardio-renal protection.
4. **Behavioral Cognitive Counseling**: Empowering patients with psychological tools to overcome emotional eating, stress-induced cravings, and sedentary habits.`,
  },
];

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  let blog = await getBlog(slug);
  if (!blog) {
    blog = DEFAULT_BLOG_POSTS.find((b) => b.slug === slug) || null;
  }
  if (!blog) return { title: 'Article Not Found — Karunya Sugalaya' };
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
