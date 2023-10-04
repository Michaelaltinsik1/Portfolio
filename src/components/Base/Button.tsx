import React, { ReactNode } from 'react';
import Loader from '@/features/Loader';

interface ButtonProps {
  href?: string;
  isButton?: boolean;
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
  href = '',
  isButton = true,
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
    <>
      {isButton ? (
        <button
          onClick={onClick}
          className={`border border-solid  w-full h-[52px] px-4 desktop:w-fit font-body rounded-[4px] ${className} ${handleVariant()} `}
          type={type}
          disabled={disabled}
        >
          {loading ? <Loader /> : children}
        </button>
      ) : (
        <a
          href={href}
          target="_blank"
          className={`flex items-center justify-center border border-solid  w-full h-[52px] px-4 desktop:w-fit font-body rounded-[4px] ${className} ${handleVariant()} `} //external link
        >
          {children}
        </a>
      )}
    </>
  );
};
export default Button;
