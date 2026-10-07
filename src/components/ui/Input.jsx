const variants = {
  default: 'rounded-control border border-slate-200 bg-white px-3 py-2 text-sm',
  search: 'min-w-0 flex-1 bg-transparent px-1 py-1 text-[10px] outline-none placeholder:text-slate-400',
};

export default function Input({ variant = 'default', className = '', ...props }) {
  return <input className={`${variants[variant] ?? variants.default} ${className}`} {...props} />;
}
