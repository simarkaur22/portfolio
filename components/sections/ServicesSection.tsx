'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Server, 
  ShoppingBag, 
  Zap, 
  LayoutDashboard, 
  Gauge, 
  Wrench, 
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/Badge';
import { services } from '@/data/portfolioData';

const iconMap: Record<string, React.ReactNode> = {
  Server: <Server className="w-6 h-6 text-sky-500" />,
  Code2: <Code2 className="w-6 h-6 text-violet-500" />,
  ShoppingBag: <ShoppingBag className="w-6 h-6 text-emerald-500" />,
  LayoutDashboard: <LayoutDashboard className="w-6 h-6 text-indigo-500" />,
  Gauge: <Gauge className="w-6 h-6 text-rose-500" />,
  Zap: <Zap className="w-6 h-6 text-amber-500" />
};

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-24 relative z-10 bg-[var(--bg-page)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge variant="emerald" size="md" icon={<Wrench className="w-3.5 h-3.5" />}>
            Services & Solutions
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--text-heading)] tracking-tight">
            Laravel & Web <span className="gradient-text">Services Offered</span>
          </h2>
          <p className="text-base sm:text-lg text-[var(--text-body)]">
            Professional Laravel backend engineering, full stack web apps, custom Shopify storefronts, and performance tuning.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((srv, index) => (
            <motion.div
              key={srv.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex"
            >
              <GlassCard className={`w-full flex flex-col justify-between p-6 space-y-6 relative overflow-hidden ${
                srv.popular ? 'border-sky-500/40 bg-sky-50/20 dark:bg-zinc-900/90' : ''
              }`}>
                {srv.popular && (
                  <div className="absolute top-4 right-4">
                    <Badge variant="cyan" size="sm" icon={<Sparkles className="w-3 h-3" />}>
                      Popular Choice
                    </Badge>
                  </div>
                )}

                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-[var(--bg-pill)] border border-[var(--border-subtle)] flex items-center justify-center">
                    {iconMap[srv.icon] || <Server className="w-6 h-6 text-sky-500" />}
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-[var(--text-heading)]">{srv.title}</h3>
                    <p className="text-xs sm:text-sm text-[var(--text-body)] leading-relaxed">
                      {srv.description}
                    </p>
                  </div>
                </div>

                {/* Deliverables List */}
                <div className="space-y-2.5 pt-4 border-t border-[var(--border-subtle)]">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)]">Key Deliverables</h4>
                  <ul className="space-y-1.5 text-xs text-[var(--text-body)]">
                    {srv.deliverables.map((deliv, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>{deliv}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </GlassCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
