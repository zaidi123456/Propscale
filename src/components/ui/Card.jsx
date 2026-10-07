const variants = {
  surface: 'rounded-xl border border-slate-200 bg-white',
  interactive: 'overflow-hidden rounded-xl border border-slate-200 bg-white transition hover:shadow-soft',
  market: 'group overflow-hidden rounded-xl border border-slate-200 bg-white transition hover:shadow-soft',
  microMarket: 'group overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-soft',
  category: 'group flex min-h-[142px] flex-col rounded-2xl border p-4 transition hover:-translate-y-1 hover:shadow-soft',
  feature: 'relative rounded-xl border border-violet-200 bg-[#f8f6ff]',
  preview: 'overflow-hidden rounded-control border border-violet-100 bg-white shadow-sm transition hover:shadow-md',
};

export default function Card({ as, href, variant = 'surface', className = '', children, ...props }) {
  const Component = as ?? (href ? 'a' : 'div');
  const classes = `${variants[variant] ?? variants.surface} ${className}`;

  return <Component href={href} className={classes} {...props}>{children}</Component>;
}
