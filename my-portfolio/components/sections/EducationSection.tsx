'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, BookOpen } from 'lucide-react';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/Badge';
import { education } from '@/data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-16 sm:py-24 relative z-10 bg-[var(--bg-page)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <Badge variant="violet" size="md" icon={<GraduationCap className="w-3.5 h-3.5 shrink-0" />}>
            Academic Background
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--text-heading)] tracking-tight">
            Degrees & <span className="gradient-text">Education</span>
          </h2>
          <p className="text-sm sm:text-lg text-[var(--text-body)]">
            Formal computer science education background providing deep theoretical foundations.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <GlassCard className="p-6 sm:p-8 space-y-4 h-full flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/30 flex items-center justify-center text-violet-500 shrink-0">
                      <BookOpen className="w-5 h-5 shrink-0" />
                    </div>
                    <Badge variant="cyan" size="sm" icon={<Calendar className="w-3 h-3 shrink-0" />}>
                      {edu.period}
                    </Badge>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[var(--text-heading)]">{edu.degree}</h3>
                    <p className="text-xs sm:text-sm font-semibold text-sky-600 dark:text-sky-400">{edu.institution}</p>
                  </div>

                  <p className="text-xs sm:text-sm text-[var(--text-body)] leading-relaxed pt-2">
                    {edu.description}
                  </p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
