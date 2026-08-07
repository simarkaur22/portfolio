'use client';

import React from 'react';
import { Project } from '@/types/portfolio';
import { Modal } from '@/components/ui/Modal';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { ExternalLink, ShieldCheck, CheckCircle2, Cpu, Wrench, Layers, AlertCircle } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  isOpen,
  onClose
}) => {
  if (!project) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={project.title}>
      <div className="space-y-6 text-[var(--text-body)]">
        
        {/* Header Tagline & Badges */}
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="cyan" size="md">
              {project.category}
            </Badge>
            
            <Badge 
              variant={project.projectType === 'Professional Project' ? 'violet' : 'emerald'} 
              size="md"
            >
              {project.projectType}
            </Badge>

            {project.isLive && (
              <Badge variant="emerald" size="md" icon={<CheckCircle2 className="w-3.5 h-3.5" />}>
                Live Production
              </Badge>
            )}
          </div>

          <p className="text-base sm:text-lg font-medium text-[var(--text-body)]">
            {project.tagline}
          </p>
        </div>

        {/* Action / Availability Bar */}
        <div className="p-4 rounded-2xl bg-[var(--bg-pill)] border border-[var(--border-subtle)] flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-[var(--text-body)] font-mono">
            <ShieldCheck className="w-4 h-4 text-sky-500 shrink-0" />
            <span>{project.availabilityNote || "Codebase details available upon request"}</span>
          </div>

          {project.isLive && project.liveUrl ? (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="primary" size="sm" icon={<ExternalLink className="w-3.5 h-3.5" />}>
                Visit Live Site
              </Button>
            </a>
          ) : (
            <Button variant="secondary" size="sm" disabled>
              Enterprise Work / NDAs Apply
            </Button>
          )}
        </div>

        {/* Role & Problem Solved */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl bg-[var(--bg-pill)] border border-[var(--border-subtle)] space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 flex items-center gap-1.5">
              <Cpu className="w-4 h-4" /> My Role & Focus
            </h4>
            <p className="text-sm font-semibold text-[var(--text-heading)]">{project.role}</p>
            <p className="text-xs text-[var(--text-muted)]">{project.shortDescription}</p>
          </div>

          <div className="p-5 rounded-2xl bg-[var(--bg-pill)] border border-[var(--border-subtle)] space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-violet-600 dark:text-violet-400 flex items-center gap-1.5">
              <AlertCircle className="w-4 h-4" /> Problem Solved
            </h4>
            <p className="text-xs text-[var(--text-body)] leading-relaxed">{project.problemSolved}</p>
          </div>
        </div>

        {/* Key Engineering Contributions */}
        <div className="space-y-3">
          <h4 className="text-sm font-bold text-[var(--text-heading)] uppercase tracking-wider flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Key Engineering Contributions
          </h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[var(--text-body)]">
            {project.contributions.map((item, index) => (
              <li key={index} className="p-3 rounded-xl bg-[var(--bg-pill)] border border-[var(--border-subtle)] flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Challenges Solved */}
        <div className="space-y-3">
          <h4 className="text-sm font-bold text-[var(--text-heading)] uppercase tracking-wider flex items-center gap-2">
            <Wrench className="w-4 h-4 text-amber-500" /> Key Technical Challenges Solved
          </h4>
          <div className="space-y-2">
            {project.challenges.map((challenge, index) => (
              <div key={index} className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-800 dark:text-amber-200">
                • {challenge}
              </div>
            ))}
          </div>
        </div>

        {/* Business Impact */}
        <div className="p-4 rounded-2xl bg-sky-500/10 border border-sky-500/30 space-y-1">
          <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">Business Impact & Outcome</h4>
          <p className="text-sm text-[var(--text-heading)] font-medium">{project.businessImpact}</p>
        </div>

        {/* Technologies Stack */}
        <div className="space-y-2">
          <h4 className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5" /> Technologies & Tools Used
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-mono rounded-lg bg-[var(--bg-pill)] border border-[var(--border-subtle)] text-sky-700 dark:text-sky-300 font-semibold"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

      </div>
    </Modal>
  );
};
