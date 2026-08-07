'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Award, ChevronRight } from 'lucide-react';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/Badge';
import { workExperiences } from '@/data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="scroll-mt-24 py-16 sm:py-24 relative z-10 bg-[var(--bg-page)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge variant="violet" size="md" icon={<Briefcase className="w-3.5 h-3.5" />}>
            Work History
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--text-heading)] tracking-tight">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-base sm:text-lg text-[var(--text-body)]">
            A timeline of Laravel engineering roles, enterprise portal development, and quality assurance leadership.
          </p>
        </div>

        {/* Vertical Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-[var(--border-subtle)] -translate-x-1/2 hidden md:block" />

          <div className="space-y-12">
            {workExperiences.map((exp, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative flex flex-col md:flex-row items-stretch gap-8"
                >
                  
                  {/* Timeline Dot (Desktop) */}
                  <div className="absolute left-1/2 top-8 -translate-x-1/2 z-20 hidden md:flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full border-4 bg-sky-500 border-[var(--bg-page)] shadow-md flex items-center justify-center text-white text-xs font-bold">
                      {index + 1}
                    </div>
                  </div>

                  {/* Card Container */}
                  <div className={`w-full md:w-1/2 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto'}`}>
                    <GlassCard className="p-6 md:p-8 space-y-5 text-left border-[var(--border-subtle)] hover:border-sky-500/40">
                      
                      {/* Top Meta Bar */}
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--border-subtle)] pb-3">
                        <div className="space-y-1">
                          <h3 className="text-xl font-bold text-[var(--text-heading)] tracking-tight">{exp.position}</h3>
                          <div className="text-sm font-semibold text-sky-600 dark:text-sky-400 flex items-center gap-1">
                            {exp.company}
                          </div>
                        </div>

                        <div className="flex flex-col items-end gap-1 text-xs text-[var(--text-muted)] font-mono">
                          <span className="flex items-center gap-1 bg-[var(--bg-pill)] px-2.5 py-1 rounded-md border border-[var(--border-subtle)]">
                            <Calendar className="w-3 h-3 text-sky-500" /> {exp.period}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-[var(--text-muted)]" /> {exp.location}
                          </span>
                        </div>
                      </div>

                      {/* Summary */}
                      <p className="text-xs sm:text-sm text-[var(--text-body)] italic">
                        "{exp.summary}"
                      </p>

                      {/* Responsibilities List */}
                      <div className="space-y-2">
                        <h4 className="text-xs font-bold text-[var(--text-heading)] uppercase tracking-wider">Key Contributions & Deliverables</h4>
                        <ul className="space-y-1.5 text-xs text-[var(--text-body)]">
                          {exp.responsibilities.map((resp, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <ChevronRight className="w-3.5 h-3.5 text-sky-500 mt-0.5 shrink-0" />
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Achievements */}
                      {exp.achievements && exp.achievements.length > 0 && (
                        <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 space-y-1.5">
                          <div className="flex items-center gap-1.5 text-xs font-bold text-amber-600 dark:text-amber-400">
                            <Award className="w-3.5 h-3.5" /> Key Achievements
                          </div>
                          <ul className="space-y-1 text-xs text-[var(--text-body)] pl-4 list-disc">
                            {exp.achievements.map((ach, i) => (
                              <li key={i}>{ach}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Technologies Stack Pills */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className={`px-2 py-0.5 text-[11px] font-mono rounded border ${
                              tech.includes("Laravel") || tech.includes("PHP")
                                ? 'bg-sky-50 dark:bg-sky-500/10 border-sky-200 dark:border-sky-500/40 text-sky-700 dark:text-sky-400 font-bold'
                                : 'bg-[var(--bg-pill)] text-[var(--text-body)] border border-[var(--border-subtle)]'
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                    </GlassCard>
                  </div>

                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
