const variants = {
  surface: 'rounded-card border border-border-default bg-surface',
  interactive: 'overflow-hidden rounded-card border border-border-default bg-surface transition hover:shadow-soft',
  market: 'group overflow-hidden rounded-card border border-border-default bg-surface transition hover:shadow-soft',
  microMarket: 'group overflow-hidden rounded-card border border-border-default bg-surface transition hover:-translate-y-1 hover:shadow-soft',
  category: 'group flex min-h-[142px] flex-col rounded-card border border-border-default bg-surface p-card-padding transition hover:-translate-y-1 hover:shadow-soft',
  feature: 'relative rounded-card border border-border-default bg-surface-muted',
  preview: 'overflow-hidden rounded-card border border-border-default bg-surface shadow-soft transition hover:shadow-md',
};

export default function Card({ as, href, variant = 'surface', className = '', style, children, ...props }) {
  const Component = as ?? (href ? 'a' : 'div');
  const classes = `${variants[variant] ?? variants.surface} ${className}`;
  const backgroundColor = variant === 'feature' ? 'var(--color-surface-muted)' : 'var(--color-surface)';

  return <Component href={href} className={classes} style={{ borderRadius: 'var(--radius-card)', borderColor: 'var(--color-border)', backgroundColor, ...style }} {...props}>{children}</Component>;
}
