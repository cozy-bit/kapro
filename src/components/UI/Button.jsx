export default function Button({
  children,
  type = 'button',
  variant = 'primary',
  className = '',
  onClick,
  ...props
}) {
  const baseStyles =
    'w-full py-3.5 px-6 rounded-xl font-medium text-sm transition-all duration-200 flex items-center justify-center cursor-pointer shadow-xs active:scale-[0.99]';

  const variants = {
    primary:
      'bg-brand-dark text-white hover:bg-brand-blue focus:ring-4 focus:ring-blue-100',
    secondary:
      'bg-brand-light text-brand-dark hover:bg-brand-blue/30 focus:ring-4 focus:ring-blue-100',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant] || variants.primary} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}