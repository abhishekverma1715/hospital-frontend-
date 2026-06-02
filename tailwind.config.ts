import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "on-secondary-container": "#586377",
        "on-error": "#ffffff",
        "secondary-fixed-dim": "#bcc7de",
        "on-primary-fixed": "#00201d",
        "surface-container-high": "#e4e9e7",
        "on-tertiary-container": "#f8fdff",
        "primary": "#00685f",
        "on-tertiary": "#ffffff",
        "error-container": "#ffdad6",
        "on-primary-fixed-variant": "#005049",
        "on-primary-container": "#f4fffc",
        "tertiary-fixed": "#a2eeff",
        "on-tertiary-fixed-variant": "#004e5a",
        "primary-fixed": "#89f5e7",
        "outline-variant": "#bcc9c6",
        "inverse-primary": "#6bd8cb",
        "primary-container": "#008378",
        "outline": "#6d7a77",
        "surface-tint": "#006a61",
        "tertiary-container": "#008092",
        "tertiary": "#006574",
        "surface-variant": "#dee4e1",
        "on-secondary": "#ffffff",
        "tertiary-fixed-dim": "#2fd9f4",
        "on-error-container": "#93000a",
        "surface-container": "#eaefed",
        "on-tertiary-fixed": "#001f25",
        "surface-container-highest": "#dee4e1",
        "background": "#f5faf8",
        "secondary": "#545f73",
        "surface-container-lowest": "#ffffff",
        "secondary-fixed": "#d8e3fb",
        "on-primary": "#ffffff",
        "surface-container-low": "#f0f5f2",
        "surface": "#f5faf8",
        "inverse-surface": "#2c3130",
        "surface-dim": "#d6dbd9",
        "secondary-container": "#d5e0f8",
        "error": "#ba1a1a",
        "on-surface": "#171d1c",
        "surface-bright": "#f5faf8",
        "inverse-on-surface": "#edf2f0",
        "on-surface-variant": "#3d4947",
        "primary-fixed-dim": "#6bd8cb",
        "on-background": "#171d1c",
        "on-secondary-fixed-variant": "#3c475a",
        "on-secondary-fixed": "#111c2d"
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      spacing: {
        "margin-desktop": "40px",
        "container-max-width": "1280px",
        "unit": "8px",
        "gutter": "24px",
        "margin-mobile": "20px"
      },
      fontFamily: {
        "headline-md": ["Inter", "sans-serif"],
        "label-md": ["Inter", "sans-serif"],
        "body-lg": ["Inter", "sans-serif"],
        "headline-lg-mobile": ["Inter", "sans-serif"],
        "headline-sm": ["Inter", "sans-serif"],
        "display-lg": ["Inter", "sans-serif"],
        "body-md": ["Inter", "sans-serif"],
        "label-overline": ["Inter", "sans-serif"],
        "headline-lg": ["Inter", "sans-serif"]
      },
      fontSize: {
        "headline-md": ["24px", {"lineHeight": "32px", "fontWeight": "700"}],
        "label-md": ["14px", {"lineHeight": "20px", "fontWeight": "600"}],
        "body-lg": ["18px", {"lineHeight": "28px", "fontWeight": "400"}],
        "headline-lg-mobile": ["28px", {"lineHeight": "36px", "fontWeight": "700"}],
        "headline-sm": ["20px", {"lineHeight": "28px", "fontWeight": "600"}],
        "display-lg": ["48px", {"lineHeight": "56px", "letterSpacing": "-0.02em", "fontWeight": "800"}],
        "body-md": ["16px", {"lineHeight": "24px", "fontWeight": "400"}],
        "label-overline": ["12px", {"lineHeight": "16px", "letterSpacing": "0.1em", "fontWeight": "700"}],
        "headline-lg": ["32px", {"lineHeight": "40px", "letterSpacing": "-0.01em", "fontWeight": "700"}]
      }
    },
  },
  plugins: [
    require('@tailwindcss/container-queries')
  ],
};
export default config;
