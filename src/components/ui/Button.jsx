const variants = {
  primary: 'bg-brand text-white shadow-sm hover:bg-violet-700',
  secondary: 'border border-violet-300 bg-white/80 text-brand hover:bg-violet-50',
  outline: 'border border-slate-200 bg-white/90 text-slate-600 hover:border-violet-300 hover:text-brand',
  icon: 'text-slate-600 hover:bg-slate-100',
  chip: 'border border-slate-200 bg-white/90 font-semibold text-slate-600 hover:border-violet-300 hover:text-brand',
};

const sizes = {
  md: 'px-4 py-2.5 text-sm',
  sm: 'px-3 py-1.5 text-[10px] font-bold',
  xs: 'px-3 py-1.5 text-[9px] font-bold',
  hero: 'px-3.5 py-2 text-[10px] font-bold',
  chip: 'px-2.5 py-1 text-[9px]',
  icon: 'p-2',
};

export default function Button({
  href,
  type = 'button',
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}) {
  const Component = href ? 'a' : 'button';
  const classes = `inline-flex shrink-0 items-center justify-center gap-1.5 rounded-control font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${variants[variant] ?? variants.primary} ${sizes[size] ?? sizes.md} ${className}`;

  return <Component href={href} type={href ? undefined : type} className={classes} {...props}>{children}</Component>;
}
