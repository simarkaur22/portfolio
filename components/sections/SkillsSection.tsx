'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, 
  Server, 
  ShoppingBag, 
  Database, 
  Sparkles, 
  Cpu, 
  CheckCircle,
  BookOpen
} from 'lucide-react';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/Badge';
import { skillCategories } from '@/data/portfolioData';

const iconMap: Record<string, React.ReactNode> = {
  "Backend & API Architecture (Primary)": <Server className="w-5 h-5" />,
  "Databases & Cloud": <Database className="w-5 h-5" />,
  "Frontend Development": <Code2 className="w-5 h-5" />,
  "eCommerce Solutions": <ShoppingBag className="w-5 h-5" />,
  "AI & Developer Tools": <Cpu className="w-5 h-5" />
};

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="skills" className="py-24 relative z-10 bg-[var(--bg-page)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge variant="cyan" size="md" icon={<Sparkles className="w-3.5 h-3.5" />}>
            Technical Expertise
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--text-heading)] tracking-tight">
            Laravel & <span className="gradient-text">Full Stack Skills</span>
          </h2>
          <p className="text-base sm:text-lg text-[var(--text-body)]">
            Primary expertise in Laravel, PHP, and database architecture, alongside modern React and Next.js applications.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {skillCategories.map((cat, idx) => {
            const isActive = activeCategory === idx;
            return (
              <button
                key={cat.title}
                onClick={() => setActiveCategory(idx)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-sky-600 to-indigo-600 !text-white shadow-lg shadow-sky-500/20 border border-sky-400/40'
                    : 'bg-[var(--bg-card)] text-[var(--text-body)] border border-[var(--border-subtle)] hover:text-[var(--text-heading)] hover:border-[var(--border-strong)] shadow-sm'
                }`}
              >
                {iconMap[cat.title]}
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Skill Category Active Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="space-y-8"
          >
            <div className="text-center max-w-xl mx-auto">
              <h3 className="text-xl font-bold text-[var(--text-heading)] mb-2">
                {skillCategories[activeCategory].title}
              </h3>
              <p className="text-xs sm:text-sm text-[var(--text-body)]">
                {skillCategories[activeCategory].description}
              </p>
            </div>

            {/* Skills Meter Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {skillCategories[activeCategory].skills.map((skill) => {
                const isAiAugmented = skill.badge?.includes("AI");

                return (
                  <GlassCard key={skill.name} className="p-4 flex flex-col justify-between space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-sky-500" />
                        <span className="text-sm font-bold text-[var(--text-heading)]">{skill.name}</span>
                      </div>
                      {skill.badge && (
                        <Badge variant={isAiAugmented ? "violet" : "cyan"} size="sm">
                          {skill.badge}
                        </Badge>
                      )}
                    </div>

                    {/* Progress Bar */}
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-[11px] font-mono text-[var(--text-muted)]">
                        <span>Proficiency</span>
                        <span className="text-sky-600 dark:text-sky-400 font-bold">{skill.level}%</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-[var(--bg-pill)] overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                          className="h-full rounded-full bg-gradient-to-r from-sky-400 via-indigo-500 to-violet-500"
                        />
                      </div>
                    </div>
                  </GlassCard>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
