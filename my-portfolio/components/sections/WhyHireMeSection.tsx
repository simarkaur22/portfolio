'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Layers, 
  ShoppingCart, 
  ShieldCheck, 
  Sparkles, 
  FileCode2, 
  Award,
  CheckCircle2,
  Server
} from 'lucide-react';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/Badge';
import { whyHireMe } from '@/data/portfolioData';

const iconMap: Record<string, React.ReactNode> = {
  Server: <Server className="w-6 h-6 text-sky-500" />,
  Layers: <Layers className="w-6 h-6 text-indigo-500" />,
  ShoppingCart: <ShoppingCart className="w-6 h-6 text-emerald-500" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-violet-500" />,
  Sparkles: <Sparkles className="w-6 h-6 text-amber-500" />,
  FileCode2: <FileCode2 className="w-6 h-6 text-rose-500" />
};

export const WhyHireMeSection: React.FC = () => {
  return (
    <section id="why-hire-me" className="py-24 relative z-10 bg-[var(--bg-page)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge variant="cyan" size="md" icon={<Award className="w-3.5 h-3.5" />}>
            Value Proposition
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--text-heading)] tracking-tight">
            Why Teams & Clients <span className="gradient-text">Choose Me</span>
          </h2>
          <p className="text-base sm:text-lg text-[var(--text-body)]">
            A solid foundation in Laravel backend architecture, eCommerce experience, quality control rigor, and modern React development.
          </p>
        </div>

        {/* 6 Core Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyHireMe.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex"
            >
              <GlassCard className="w-full flex flex-col justify-between p-6 space-y-5">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-[var(--bg-pill)] border border-[var(--border-subtle)] flex items-center justify-center">
                      {iconMap[item.icon] || <CheckCircle2 className="w-6 h-6 text-sky-500" />}
                    </div>
                    <Badge variant="violet" size="sm">
                      {item.highlight}
                    </Badge>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-[var(--text-heading)]">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-[var(--text-body)] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

              </GlassCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
