const { hairlineWidth } = require('nativewind/theme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        success: {
          DEFAULT: 'hsl(var(--success))',
          foreground: 'hsl(var(--success-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      // Approximation of the Apple HIG type scale (points), used as the
      // shared vocabulary for hierarchy across the app.
      fontSize: {
        'large-title': ['34px', { lineHeight: '41px', fontWeight: '700' }],
        title1: ['28px', { lineHeight: '34px', fontWeight: '700' }],
        title2: ['22px', { lineHeight: '28px', fontWeight: '700' }],
        title3: ['20px', { lineHeight: '25px', fontWeight: '600' }],
        headline: ['17px', { lineHeight: '22px', fontWeight: '600' }],
        body: ['17px', { lineHeight: '22px', fontWeight: '400' }],
        callout: ['16px', { lineHeight: '21px', fontWeight: '400' }],
        subhead: ['15px', { lineHeight: '20px', fontWeight: '400' }],
        footnote: ['13px', { lineHeight: '18px', fontWeight: '400' }],
        caption1: ['12px', { lineHeight: '16px', fontWeight: '400' }],
        caption2: ['11px', { lineHeight: '13px', fontWeight: '400' }],
      },
      spacing: {
        // 4px baseline grid, plus the min. Apple HIG touch target.
        safe: '16px',
        'touch-target': '44px',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 6px)',
        sm: 'calc(var(--radius) - 10px)',
        xl: 'calc(var(--radius) + 6px)',
        '2xl': 'calc(var(--radius) + 12px)',
        pill: '999px',
      },
      borderWidth: {
        hairline: hairlineWidth(),
      },
      boxShadow: {
        card: '0 1px 2px rgba(20, 16, 12, 0.04), 0 8px 24px rgba(20, 16, 12, 0.06)',
        raised: '0 2px 4px rgba(20, 16, 12, 0.06), 0 12px 32px rgba(20, 16, 12, 0.1)',
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [require('tailwindcss-animate')],
};
