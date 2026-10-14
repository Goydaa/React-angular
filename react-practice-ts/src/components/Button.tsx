import type { CSSProperties, ReactNode } from 'react';

// Задача 5. Button с вариантами
type Variant = 'primary' | 'secondary' | 'danger';

interface ButtonProps {
  children: ReactNode;
  variant?: Variant;
  onClick?: () => void;
  disabled?: boolean;
}

const colors: Record<Variant, string> = {
  primary: '#3b82f6',
  secondary: '#6b7280',
  danger: '#ef4444',
};

function Button({ children, variant = 'primary', onClick, disabled = false }: ButtonProps) {
  const style: CSSProperties = {
    backgroundColor: colors[variant],
    color: 'white',
    border: 'none',
    borderRadius: 6,
    padding: '8px 16px',
    fontSize: 14,
    opacity: disabled ? 0.5 : 1,
    cursor: disabled ? 'not-allowed' : 'pointer',
  };

  return (
    <button style={style} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
