import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  primary?: boolean;
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  href,
  type = 'button',
  primary = false,
  disabled = false,
  className = '',
  onClick,
}) => {
  const baseClasses = `
    inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-medium transition-all duration-300
    ${primary
      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-500/25'
      : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700'
    }
    ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:transform hover:-translate-y-1'}
    ${className}
  `;

  if (href) {
    return (
      <a href={href} className={baseClasses}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      className={baseClasses}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;