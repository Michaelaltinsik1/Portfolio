import React, { ReactNode } from 'react';
import Loader from '../Features/Loader';
interface ButtonProps {
  type: 'submit' | 'button';
  disabled?: boolean;
  className?: string;
  loading?: boolean;
  children: ReactNode;
  variant: 'primary' | 'secondary';
  hasIcon?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({
  type,
  disabled = false,
  className = '',
  loading = false,
  children,
  variant,
  onClick,
}: ButtonProps) => {
  const handleVariant = () => {
    switch (variant) {
      case 'primary':
        return 'border-bg-primary-invert bg-primary-invert hover:bg-primary-invert-hover active:bg-primary-invert-active text-secondary';
      case 'secondary':
        return 'border-primary-invert bg-transparent text-primary-invert hover:bg-primary-invert active:bg-primary-invert-active hover:text-secondary active:text-secondary';
    }
  };
  return (
    <button
      onClick={onClick}
      className={`border border-solid  w-full h-[52px] px-4 desktop:w-fit font-body rounded-[4px] ${className} ${handleVariant()} `}
      type={type}
      disabled={disabled}
    >
      {loading ? <Loader /> : children}
    </button>
  );
};
export default Button;
