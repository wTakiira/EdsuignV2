import FeatherIcon from 'feather-icons-react';

// Dictionnaire de styles selon le variant
const variantStyles = {
  primary: "bg-[var(--primary)] flex items-center text-white hover:bg-[var(--primary-bis)] color-[var(--tertiary)]",
  secondary: "bg-[var(--secondary)] text-[var(--quaternary)] hover:bg-[var(--secondary-bis)]",
};

export default function CustomButton({
  icon,
  children,
  variant = "primary",
  className = "",
  iconClassName = "",
  ...props
}) {
  return (
    <button
      className={`
        flex items-center gap-2 px-4 py-2 rounded font-bold transition-colors duration-200
        ${variantStyles[variant] || variantStyles.primary}
        ${className}
      `}
      {...props}
    >
         {children}
      {icon && (
        <FeatherIcon
          icon={icon}
          size={20}
          className={iconClassName}
    
        />
      )}
     
    </button>
  );
}

