'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Zap, ShieldCheck, Code2, Bot } from 'lucide-react';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/Badge';

export const AiWorkflowSection: React.FC = () => {
  return (
    <section id="ai-workflow" className="py-16 sm:py-24 relative z-10 bg-[var(--bg-page)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <Badge variant="violet" size="md" icon={<Bot className="w-3.5 h-3.5 shrink-0" />}>
            AI-Augmented Engineering
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--text-heading)] tracking-tight">
            Accelerated <span className="gradient-text">Developer Velocity</span>
          </h2>
          <p className="text-sm sm:text-lg text-[var(--text-body)]">
            How I integrate modern AI tools into daily workflows to build Laravel backends rapidly and execute modern React & Next.js projects.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          
          <GlassCard className="p-6 space-y-4 border-sky-500/20">
            <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-500 shrink-0">
              <Zap className="w-5 h-5 shrink-0" />
            </div>
            <h3 className="text-lg font-bold text-[var(--text-heading)]">Rapid Backend & API Scaffolding</h3>
            <p className="text-xs sm:text-sm text-[var(--text-body)] leading-relaxed">
              Using <strong>Claude</strong> and <strong>ChatGPT</strong> to design Laravel controllers, database migrations, and API routes in minutes.
            </p>
          </GlassCard>

          <GlassCard className="p-6 space-y-4 border-violet-500/20">
            <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/30 flex items-center justify-center text-violet-500 shrink-0">
              <Code2 className="w-5 h-5 shrink-0" />
            </div>
            <h3 className="text-lg font-bold text-[var(--text-heading)]">Accelerated Full Stack Velocity</h3>
            <p className="text-xs sm:text-sm text-[var(--text-body)] leading-relaxed">
              Leveraging <strong>GitHub Copilot</strong> in VS Code for intelligent inline completions, React component patterns, and Next.js App Router syntax.
            </p>
          </GlassCard>

          <GlassCard className="p-6 space-y-4 border-emerald-500/20">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-500 shrink-0">
              <ShieldCheck className="w-5 h-5 shrink-0" />
            </div>
            <h3 className="text-lg font-bold text-[var(--text-heading)]">Code Review & Quality Scans</h3>
            <p className="text-xs sm:text-sm text-[var(--text-body)] leading-relaxed">
              Performing automated code reviews, checking Eloquent query optimization, edge-case vulnerability scans, and maintaining documentation standards.
            </p>
          </GlassCard>

        </div>

      </div>
    </section>
  );
};
