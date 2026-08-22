export default function Input({
  id,
  name,
  type = 'text',
  placeholder = '',
  value,
  onChange,
  icon: Icon,
  className = '',
  required = false,
  ...props
}) {
  return (
    <div className={`relative w-full ${className}`}>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full bg-brand-light text-[#222B45] placeholder-[#8F9BB3] text-sm rounded-xl py-3.5 pl-4 pr-11 border border-transparent focus:border-brand-blue focus:bg-white focus:outline-hidden transition-all duration-200"
        {...props}
      />
      {Icon && (
        <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-brand-dark">
          {Icon}
        </div>
      )}
    </div>
  );
}