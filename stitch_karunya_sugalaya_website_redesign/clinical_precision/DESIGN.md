---
name: Clinical Precision
colors:
  surface: '#f5faf8'
  surface-dim: '#d6dbd9'
  surface-bright: '#f5faf8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f5f2'
  surface-container: '#eaefed'
  surface-container-high: '#e4e9e7'
  surface-container-highest: '#dee4e1'
  on-surface: '#171d1c'
  on-surface-variant: '#3d4947'
  inverse-surface: '#2c3130'
  inverse-on-surface: '#edf2f0'
  outline: '#6d7a77'
  outline-variant: '#bcc9c6'
  surface-tint: '#006a61'
  primary: '#00685f'
  on-primary: '#ffffff'
  primary-container: '#008378'
  on-primary-container: '#f4fffc'
  inverse-primary: '#6bd8cb'
  secondary: '#545f73'
  on-secondary: '#ffffff'
  secondary-container: '#d5e0f8'
  on-secondary-container: '#586377'
  tertiary: '#006574'
  on-tertiary: '#ffffff'
  tertiary-container: '#008092'
  on-tertiary-container: '#f8fdff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#89f5e7'
  primary-fixed-dim: '#6bd8cb'
  on-primary-fixed: '#00201d'
  on-primary-fixed-variant: '#005049'
  secondary-fixed: '#d8e3fb'
  secondary-fixed-dim: '#bcc7de'
  on-secondary-fixed: '#111c2d'
  on-secondary-fixed-variant: '#3c475a'
  tertiary-fixed: '#a2eeff'
  tertiary-fixed-dim: '#2fd9f4'
  on-tertiary-fixed: '#001f25'
  on-tertiary-fixed-variant: '#004e5a'
  background: '#f5faf8'
  on-background: '#171d1c'
  surface-variant: '#dee4e1'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-overline:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.1em
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max-width: 1280px
  gutter: 24px
  margin-desktop: 40px
  margin-mobile: 20px
---

## Brand & Style

The design system is engineered for a specialized diabetes care and research environment, balancing high-tech medical data with human-centric care. The brand personality is that of a **quietly confident clinician**: authoritative and deeply experienced, yet approachable.

The aesthetic blends **Modern Corporate** with subtle **Glassmorphism**. It prioritizes clarity and precision to reflect research-grade data, using ample whitespace and high-contrast typography to ensure readability for a diverse patient demographic. The emotional response should be one of profound trust, technological empowerment, and calm reliability.

## Colors

The palette is anchored in **Deep Teal** and **Slate Blue** to establish a foundation of medical authority and institutional trust. 

- **Primary (Deep Teal):** Used for primary actions and brand presence.
- **Secondary (Slate Blue):** Applied to core navigation and secondary text to provide a grounded, professional feel.
- **Electric Cyan:** Reserved for AI-driven insights, data visualizations, and "tech-forward" highlights.
- **Warm Amber:** Used sparingly for critical alerts, soft highlights, or progress indicators to prevent the UI from feeling overly clinical or cold.
- **Backgrounds:** A soft **Pearl Off-white** acts as the canvas, while **Pure White** cards create clear separation and perceived depth.

## Typography

This design system utilizes **Plus Jakarta Sans** for its modern, friendly, yet professional geometric qualities. 

The typographic hierarchy relies on **strong weight contrast**—pairing heavy headers with light, airy body copy. **Overlines** are a critical structural element, set in all-caps with generous letter spacing (10%) to categorize sections without adding visual weight. For mobile devices, display and large headline sizes are scaled down to ensure comfortable reading without excessive wrapping.

## Layout & Spacing

The layout follows a **Fluid Grid** model with a focus on "Airy" spacing. 

- **Desktop:** 12-column grid with 24px gutters. Content is centered in a 1280px max-width container.
- **Tablet:** 8-column grid with 20px gutters.
- **Mobile:** 4-column grid with 16px gutters and 20px side margins.

A consistent 8px base unit drives all padding and margin decisions. Use generous vertical padding (64px+) between major sections to maintain a premium, uncluttered experience. Elements should feel uncrowded, allowing complex medical data to "breathe."

## Elevation & Depth

Hierarchy is established through **Tonal Layers** and **Ambient Shadows**. 

- **Base Layer:** The Pearl background (#F8FAFC).
- **Surface Layer:** Pure white cards used for content containers, featuring a 1px border (#E2E8F0) and a soft, diffused shadow (0px 4px 20px rgba(30, 41, 59, 0.05)).
- **Active Elevation:** Interactive elements or featured cards utilize a **Cyan Glow** effect (0px 0px 15px rgba(34, 211, 238, 0.3)) to signify technical prominence or focus.
- **Glassmorphism:** Secondary overlays, such as tags or filter bars, use a 20px backdrop blur with 80% white opacity to maintain context of the underlying data.

## Shapes

The design system employs **Rounded** geometry to soften the clinical nature of the content. 

Standard components (buttons, inputs) utilize a **0.5rem (8px)** corner radius. Large containers and content cards must use **rounded-xl (1.5rem/24px)** to create a sophisticated, modern silhouette. This high radius on large cards is a signature of the brand's "accessible expert" persona.

## Components

### Buttons & Inputs
- **Primary Buttons:** Deep Teal background with white text. On hover, apply a subtle shift to a slightly lighter teal with a 60fps scale-up (1.02x).
- **Secondary Buttons:** Ghost style with a Slate Blue 1px border and transparent background.
- **Input Fields:** 16px vertical padding, Slate Blue 100 border. On focus, the border transitions to Electric Cyan with a soft outer glow.

### Specialized Health Components
- **Data Chips:** Small, pill-shaped tags using glassmorphism (translucent backgrounds) to categorize lab results or patient status.
- **Insight Cards:** Use Electric Cyan for the left border accent to denote AI-generated medical insights.
- **Progress Trackers:** High-contrast lines with Warm Amber markers for target glucose ranges.

### Lists & Selection
- **Lists:** Clean rows separated by subtle 1px lines (#F1F5F9). Interaction states should include a soft background color change to #F8FAFC.
- **Checkboxes:** Custom squares with 4px border radius. When checked, they fill with Deep Teal and animate a checkmark stroke.

### Transitions
All transitions must be 300ms "Ease-Out" to ensure a buttery-smooth feel, avoiding abrupt changes in medical data presentation.