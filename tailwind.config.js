/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/app/**/*.{js,jsx}', './src/components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: 'var(--color-brand)',
        primary: 'var(--color-brand)',
        secondary: 'var(--color-text-secondary)',
        tertiary: 'var(--color-text-tertiary)',
        surface: 'var(--color-surface)',
        'surface-muted': 'var(--color-surface-muted)',
        'border-default': 'var(--color-border)',
        positive: 'var(--color-positive)',
        caution: 'var(--color-caution)',
      },
      spacing: {
        'page-gutter': 'var(--space-page-gutter)',
        'section-y': 'var(--space-section-y)',
        'card-padding': 'var(--space-card-padding)',
      },
      fontSize: {
        micro: 'var(--font-size-micro)',
        compact: 'var(--font-size-compact)',
        'section-title': ['var(--font-size-section-title)', { lineHeight: 'var(--line-height-heading)' }],
        hero: ['var(--font-size-hero)', { lineHeight: 'var(--line-height-hero)' }],
      },
      lineHeight: {
        compact: 'var(--line-height-compact)',
        body: 'var(--line-height-body)',
        heading: 'var(--line-height-heading)',
      },
      letterSpacing: {
        label: 'var(--letter-spacing-label)',
        hero: 'var(--letter-spacing-hero)',
      },
      borderWidth: {
        DEFAULT: 'var(--border-width-default)',
        strong: 'var(--border-width-strong)',
      },
      borderRadius: {
        control: 'var(--radius-control)',
        card: 'var(--radius-card)',
        panel: 'var(--radius-panel)',
      },
      boxShadow: { soft: '0 8px 28px rgba(39, 29, 87, .07)' },
    },
  },
  plugins: [],
};
