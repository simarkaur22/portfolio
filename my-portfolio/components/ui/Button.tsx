'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'glass' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      children,
      icon,
      iconPosition = 'right',
      isLoading = false,
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-sky-500/50 disabled:opacity-50 disabled:cursor-not-allowed select-none active:scale-[0.98] shrink-0';

    const variants = {
      primary:
        'bg-gradient-to-r from-sky-600 via-indigo-600 to-violet-600 !text-white shadow-md shadow-sky-500/20 hover:shadow-lg hover:shadow-sky-500/30 hover:brightness-105 border border-sky-400/30 font-bold',
      secondary:
        'bg-[var(--bg-pill)] text-[var(--text-heading)] hover:bg-[var(--bg-card-hover)] border border-[var(--border-subtle)] font-semibold shadow-xs',
      outline:
        'bg-transparent text-sky-600 dark:text-sky-400 border border-sky-500/50 hover:bg-sky-500/10 hover:border-sky-500 font-semibold',
      glass:
        'bg-[var(--bg-card)] backdrop-blur-md text-[var(--text-heading)] border border-[var(--border-subtle)] hover:bg-[var(--bg-card-hover)] hover:border-sky-500/40 font-semibold shadow-xs',
      ghost:
        'bg-transparent text-[var(--text-body)] hover:text-[var(--text-heading)] hover:bg-[var(--bg-pill)]'
    };

    const sizes = {
      sm: 'px-3.5 py-2 text-xs gap-1.5 min-h-[36px]',
      md: 'px-5 py-2.5 text-sm gap-2 min-h-[42px]',
      lg: 'px-7 py-3.5 text-base gap-2.5 font-semibold min-h-[48px]'
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {isLoading ? (
          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2 shrink-0" />
        ) : null}
        {icon && iconPosition === 'left' && !isLoading && (
          <span className="shrink-0 flex items-center justify-center">{icon}</span>
        )}
        <span className="whitespace-nowrap">{children}</span>
        {icon && iconPosition === 'right' && !isLoading && (
          <span className="shrink-0 flex items-center justify-center">{icon}</span>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';
