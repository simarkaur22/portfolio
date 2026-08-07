'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  glowColor?: 'cyan' | 'violet' | 'emerald' | 'none';
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className,
  hoverEffect = true,
  glowColor = 'cyan',
  ...props
}) => {
  const glowMap = {
    cyan: 'hover:border-sky-500/50 hover:shadow-sky-500/10',
    violet: 'hover:border-violet-500/50 hover:shadow-violet-500/10',
    emerald: 'hover:border-emerald-500/50 hover:shadow-emerald-500/10',
    none: ''
  };

  return (
    <div
      className={cn(
        'relative rounded-2xl p-6 transition-all duration-300',
        'bg-[var(--bg-card)] backdrop-blur-md border border-[var(--border-subtle)] shadow-[var(--shadow-card)] text-[var(--text-heading)]',
        hoverEffect && [
          'hover:-translate-y-1 hover:border-sky-500/40',
          glowMap[glowColor]
        ],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
