'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquareQuote, Star, Quote } from 'lucide-react';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/Badge';
import { testimonials } from '@/data/portfolioData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 relative z-10 bg-[var(--bg-page)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge variant="cyan" size="md" icon={<MessageSquareQuote className="w-3.5 h-3.5" />}>
            Stakeholder Feedback
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--text-heading)] tracking-tight">
            Client & Manager <span className="gradient-text">Recommendations</span>
          </h2>
          <p className="text-base sm:text-lg text-[var(--text-body)]">
            Endorsements from engineering leads, store owners, and project stakeholders.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex"
            >
              <GlassCard className="w-full flex flex-col justify-between p-6 space-y-6 relative">
                
                <div className="space-y-4">
                  {/* Star Rating */}
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>

                  <Quote className="w-8 h-8 text-sky-500/20" />

                  <p className="text-xs sm:text-sm text-[var(--text-body)] italic leading-relaxed">
                    "{t.quote}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm shrink-0">
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[var(--text-heading)]">{t.author}</h4>
                    <p className="text-xs text-sky-600 dark:text-sky-400 font-medium">{t.role} · {t.company}</p>
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
