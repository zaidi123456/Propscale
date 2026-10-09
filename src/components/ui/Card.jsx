const variants = {
  surface: 'rounded-xl border border-slate-200 bg-white',
  interactive: 'overflow-hidden rounded-xl border border-slate-200 bg-white transition hover:shadow-soft',
  market: 'group overflow-hidden rounded-[8px] border border-[#e4e2eb] bg-white transition hover:shadow-soft',
  microMarket: 'group overflow-hidden rounded-[14px] border border-violet-100 bg-white transition hover:-translate-y-1 hover:shadow-soft',
  category: 'group flex min-h-[142px] flex-col rounded-[14px] border p-[17px] transition hover:-translate-y-1 hover:shadow-soft',
  feature: 'relative rounded-[16px] border border-violet-200 bg-[rgba(110,78,239,0.05)]',
  preview: 'overflow-hidden rounded-[8px] border border-[#e3def0] bg-white shadow-[0_3px_10px_rgba(56,34,120,0.06)] transition hover:shadow-md',
};

export default function Card({ as, href, variant = 'surface', className = '', children, ...props }) {
  const Component = as ?? (href ? 'a' : 'div');
  const classes = `${variants[variant] ?? variants.surface} ${className}`;

  return <Component href={href} className={classes} {...props}>{children}</Component>;
}
