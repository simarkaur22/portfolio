'use client';

import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '@/data/portfolioData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border-subtle)] bg-[var(--bg-page)] relative z-10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Tagline */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <a href="#hero" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm">
                SK
              </div>
              <span className="font-bold text-[var(--text-heading)] text-base">Simarjeet Kaur</span>
            </a>
            <p className="text-xs text-[var(--text-muted)] max-w-sm text-center md:text-left">
              Laravel & Full Stack Web Developer — PHP, Laravel, MySQL, REST APIs, and modern frontend solutions.
            </p>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap justify-center gap-4 text-xs font-medium text-[var(--text-muted)]">
            <a href="#about" className="hover:text-sky-500 transition-colors">About</a>
            <a href="#skills" className="hover:text-sky-500 transition-colors">Skills</a>
            <a href="#experience" className="hover:text-sky-500 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-sky-500 transition-colors">Projects</a>
            <a href="#services" className="hover:text-sky-500 transition-colors">Services</a>
            <a href="#why-hire-me" className="hover:text-sky-500 transition-colors">Why Hire Me</a>
            <a href="#contact" className="hover:text-sky-500 transition-colors">Contact</a>
          </div>

          {/* Social Icons & Copyright */}
          <div className="flex flex-col items-center md:items-end gap-3">
            <div className="flex items-center gap-3">
              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Email"
                className="p-2 rounded-xl bg-[var(--bg-pill)] border border-[var(--border-subtle)] text-[var(--text-body)] hover:text-sky-500 hover:border-sky-400/40 transition-all"
              >
                <Mail className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 rounded-xl bg-[var(--bg-pill)] border border-[var(--border-subtle)] text-[var(--text-body)] hover:text-sky-500 hover:border-sky-400/40 transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2 rounded-xl bg-[var(--bg-pill)] border border-[var(--border-subtle)] text-[var(--text-body)] hover:text-sky-500 hover:border-sky-400/40 transition-all"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>

            <div className="text-xs text-[var(--text-muted)] font-mono text-center md:text-right">
              © {currentYear} Simarjeet Kaur · Built with Next.js 16 & Tailwind CSS
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};
