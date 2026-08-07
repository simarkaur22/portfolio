'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FolderGit2, 
  ExternalLink, 
  Lock
} from 'lucide-react';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { projects } from '@/data/portfolioData';

const categories = ["All", "Full Stack", "eCommerce", "Healthcare"];

export const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-16 sm:py-24 relative z-10 bg-[var(--bg-page)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <Badge variant="cyan" size="md" icon={<FolderGit2 className="w-3.5 h-3.5 shrink-0" />}>
            Featured Work & Live Sites
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--text-heading)] tracking-tight">
            Featured <span className="gradient-text">Laravel & Web Projects</span>
          </h2>
          <p className="text-sm sm:text-lg text-[var(--text-body)]">
            Enterprise portals, client platforms, and custom Shopify storefronts.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 sm:mb-12">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer min-h-[38px] ${
                  isActive
                    ? 'bg-sky-600 !text-white shadow-md shadow-sky-500/20 border border-sky-400/40'
                    : 'bg-[var(--bg-card)] text-[var(--text-body)] border border-[var(--border-subtle)] hover:text-[var(--text-heading)] hover:border-[var(--border-strong)] shadow-xs'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="flex"
              >
                <GlassCard className="w-full flex flex-col justify-between p-5 sm:p-6 space-y-6 group">
                  
                  {/* Top Header & Badges */}
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <Badge variant="cyan" size="sm">
                        {project.category}
                      </Badge>

                      <Badge 
                        variant={project.projectType === 'Professional Project' ? 'violet' : 'emerald'} 
                        size="sm"
                      >
                        {project.projectType}
                      </Badge>
                    </div>

                    <div className="space-y-1.5">
                      <h3 className="text-lg sm:text-xl font-bold text-[var(--text-heading)] group-hover:text-sky-500 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs text-sky-600 dark:text-sky-400 font-mono font-semibold">{project.tagline}</p>
                    </div>

                    <p className="text-xs sm:text-sm text-[var(--text-body)] leading-relaxed">
                      {project.shortDescription}
                    </p>
                  </div>

                  {/* Contributions & Key Features */}
                  <div className="space-y-4">
                    <div className="space-y-1.5 border-t border-[var(--border-subtle)] pt-3">
                      <h4 className="text-[11px] font-bold text-[var(--text-muted)] uppercase tracking-wider">Key Contributions</h4>
                      <ul className="space-y-1 text-xs text-[var(--text-body)]">
                        {project.contributions.slice(0, 3).map((item, idx) => (
                          <li key={idx} className="flex items-start gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-1.5 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Pill Summary */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className={`px-2 py-0.5 text-[11px] font-mono rounded border shrink-0 ${
                            tech.includes("Laravel") || tech.includes("PHP")
                              ? 'bg-sky-50 dark:bg-sky-500/10 border-sky-200 dark:border-sky-500/30 text-sky-700 dark:text-sky-400 font-bold'
                              : 'bg-[var(--bg-pill)] text-[var(--text-body)] border border-[var(--border-subtle)]'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Direct Live Website Link or Enterprise NDA Pill */}
                    <div className="pt-4 border-t border-[var(--border-subtle)]">
                      {project.isLive && project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full"
                        >
                          <Button
                            variant="primary"
                            size="md"
                            icon={<ExternalLink className="w-4 h-4 shrink-0" />}
                            className="w-full justify-center"
                          >
                            Visit Live Website
                          </Button>
                        </a>
                      ) : (
                        <div className="w-full flex items-center justify-center gap-2 p-2.5 rounded-xl bg-[var(--bg-pill)] border border-[var(--border-subtle)] text-xs text-[var(--text-muted)] font-mono font-medium">
                          <Lock className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                          <span>Enterprise Client Codebase</span>
                        </div>
                      )}
                    </div>
                  </div>

                </GlassCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
