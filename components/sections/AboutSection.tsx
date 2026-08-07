'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  UserCheck, 
  ShieldCheck, 
  Sparkles, 
  Cpu, 
  GraduationCap,
  Layers,
  Server
} from 'lucide-react';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/Badge';
import { personalInfo } from '@/data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 relative z-10 bg-[var(--bg-page)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge variant="violet" size="md" icon={<UserCheck className="w-3.5 h-3.5" />}>
            About My Profile
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--text-heading)] tracking-tight">
            Laravel Development with <span className="gradient-text">QA Rigor</span>
          </h2>
          <p className="text-base sm:text-lg text-[var(--text-body)]">
            A backend-focused developer who delivers secure Laravel systems while building modern full-stack products.
          </p>
        </div>

        {/* Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Story & Summary Card */}
          <div className="lg:col-span-7 flex flex-col">
            <GlassCard className="h-full p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-500">
                    <Server className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[var(--text-heading)]">Laravel & Backend Engineering Background</h3>
                    <p className="text-xs text-sky-600 dark:text-sky-400 font-mono font-semibold">Laravel (Primary) · PHP · MySQL · REST APIs · React & Next.js</p>
                  </div>
                </div>

                <div className="space-y-4 text-[var(--text-body)] text-sm sm:text-base leading-relaxed">
                  <p>
                    I am a <strong>PHP & Laravel Developer</strong> based in Punjab, India, with over 2 years of hands-on experience building database-driven web applications, enterprise portals, and backend REST APIs.
                  </p>
                  <p>
                    My primary technical strength lies in <strong>Laravel, PHP, Eloquent ORM, MySQL, and Blade templates</strong>. I focus heavily on writing clean business logic, secure controllers, database migrations, and role-based access control systems.
                  </p>
                  <p>
                    Additionally, I build modern full-stack web applications using <strong>React.js, Next.js, and TypeScript</strong> with AI-augmented workflows (Claude, Copilot) to deliver complete digital products.
                  </p>
                  <p>
                    My previous career as a <strong>Quality Control Representative</strong> gave me an invaluable edge: I approach code with strict attention to edge cases, data validation, and issue prevention.
                  </p>
                </div>
              </div>

              {/* Core Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[var(--border-subtle)]">
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-sky-600 dark:text-sky-400">
                    <Server className="w-4 h-4" /> Laravel Core
                  </div>
                  <p className="text-xs text-[var(--text-muted)]">Primary strength in Laravel APIs & MySQL</p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-violet-600 dark:text-violet-400">
                    <Cpu className="w-4 h-4" /> AI-Augmented
                  </div>
                  <p className="text-xs text-[var(--text-muted)]">Accelerated dev speed with Claude & Copilot</p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                    <ShieldCheck className="w-4 h-4" /> QA Rigor
                  </div>
                  <p className="text-xs text-[var(--text-muted)]">Data integrity & bug prevention focus</p>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Highlights & Strengths Sidebar */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            <GlassCard className="p-6 space-y-4">
              <h4 className="text-base font-bold text-[var(--text-heading)] flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-sky-500" /> What I Enjoy Building
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[var(--text-body)]">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-2 shrink-0" />
                  <span><strong>Laravel Backend Applications & REST APIs</strong> with secure authentication and Eloquent query tuning.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-500 mt-2 shrink-0" />
                  <span><strong>Enterprise Web Portals</strong> featuring multi-level Role-Based Access Control (RBAC).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                  <span><strong>Custom Shopify eCommerce Stores</strong> using Liquid themes, JavaScript scripts, and app integrations.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                  <span><strong>Modern Full Stack Applications</strong> incorporating React.js & Next.js frontend interfaces.</span>
                </li>
              </ul>
            </GlassCard>

            <GlassCard className="p-6 space-y-4">
              <h4 className="text-base font-bold text-[var(--text-heading)] flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-violet-500" /> Academic Foundation
              </h4>
              <div className="space-y-3">
                <div className="border-l-2 border-sky-500 pl-3">
                  <h5 className="text-xs font-bold text-[var(--text-heading)]">M.C.A. — Computer Applications</h5>
                  <p className="text-[11px] text-sky-600 dark:text-sky-400 font-mono">Lovely Professional University (2021 – 2023)</p>
                </div>
                <div className="border-l-2 border-violet-500 pl-3">
                  <h5 className="text-xs font-bold text-[var(--text-heading)]">B.C.A. — Computer Applications</h5>
                  <p className="text-[11px] text-violet-600 dark:text-violet-400 font-mono">Guru Nanak Dev University (2018 – 2021)</p>
                </div>
              </div>
            </GlassCard>

          </div>

        </div>
      </div>
    </section>
  );
};
