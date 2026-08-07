'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Send, 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { GlassCard } from '@/components/ui/GlassCard';
import { personalInfo } from '@/data/portfolioData';

const roles = [
  "Laravel & PHP Developer",
  "Full Stack Web Developer",
  "Laravel Backend Architect",
  "Shopify eCommerce Developer",
  "Laravel & React Web Developer"
];

export const HeroSection: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let typingSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && displayedText === currentRole) {
      typingSpeed = 2000;
      const timeout = setTimeout(() => setIsDeleting(true), typingSpeed);
      return () => clearTimeout(timeout);
    } else if (isDeleting && displayedText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      typingSpeed = 500;
    }

    const timeout = setTimeout(() => {
      setDisplayedText((prev) =>
        isDeleting
          ? currentRole.substring(0, prev.length - 1)
          : currentRole.substring(0, prev.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, roleIndex]);

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline & Intro */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6">
            
            {/* Status Pill - Single Row Flex Layout */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-full"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-xs sm:text-sm font-semibold whitespace-nowrap shadow-sm">
                <span className="relative flex h-2.5 w-2.5 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span>{personalInfo.status} — Available for Roles & Projects</span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-2 w-full"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.1]">
                Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
              </h1>
              
              {/* Dynamic Typewriter Title */}
              <div className="h-12 flex items-center text-xl sm:text-2xl md:text-3xl font-semibold text-slate-700 dark:text-slate-300">
                <span className="text-sky-600 dark:text-sky-400 mr-2 font-mono">&gt;</span>
                <span className="text-slate-900 dark:text-white font-mono">{displayedText}</span>
                <span className="w-0.5 h-7 bg-sky-500 ml-1 animate-pulse" />
              </div>
            </motion.div>

            {/* Bio Summary */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed max-w-2xl font-normal"
            >
              Full Stack Web Developer with <strong className="text-sky-700 dark:text-sky-400 font-semibold">2+ years of experience</strong> centered on <strong className="text-indigo-700 dark:text-indigo-400 font-semibold">Laravel, PHP, and MySQL</strong> backend engineering. Experienced building enterprise portals, REST APIs, custom Shopify storefronts, and modern React.js and Next.js applications.
            </motion.p>

            {/* Quick Tech Stack Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-2 pt-1"
            >
              {[
                { name: "Laravel (Primary)", primary: true },
                { name: "PHP", primary: true },
                { name: "MySQL", primary: true },
                { name: "JavaScript", primary: false },
                { name: "Shopify Liquid", primary: false },
                { name: "React.js", primary: false },
                { name: "Next.js", primary: false }
              ].map((tech) => (
                <span
                  key={tech.name}
                  className={`px-3 py-1 text-xs font-mono rounded-lg border transition-colors ${
                    tech.primary
                      ? 'bg-sky-50 dark:bg-sky-500/10 border-sky-200 dark:border-sky-500/40 text-sky-700 dark:text-sky-400 font-bold'
                      : 'bg-slate-100 dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-300 font-medium'
                  }`}
                >
                  {tech.name}
                </span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 pt-4"
            >
              <a href="#contact">
                <Button variant="primary" size="lg" icon={<Send className="w-4 h-4" />}>
                  Get In Touch
                </Button>
              </a>

              <a href="#projects">
                <Button variant="glass" size="lg" icon={<ExternalLink className="w-4 h-4" />}>
                  View Live Projects
                </Button>
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-4 pt-2"
            >
              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Email Simarjeet"
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 hover:border-sky-400/40 transition-all shadow-sm"
              >
                <Mail className="w-5 h-5" />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 hover:border-sky-400/40 transition-all shadow-sm"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 hover:border-sky-400/40 transition-all shadow-sm"
              >
                <Github className="w-5 h-5" />
              </a>
            </motion.div>

          </div>

          {/* Right Column: Code Card & Metric Counters */}
          <div className="lg:col-span-5 relative">
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative z-10"
            >
              <GlassCard className="p-6 md:p-8 space-y-6 border-slate-200 dark:border-slate-800 shadow-xl relative overflow-hidden bg-slate-50/90 dark:bg-slate-900/80">
                
                {/* Code Header Bar */}
                <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-xs font-mono text-slate-500">simarjeet.config.ts</span>
                </div>

                {/* Code Snippet Display */}
                <div className="font-mono text-xs sm:text-sm space-y-2 text-slate-800 dark:text-slate-300 leading-relaxed">
                  <div>
                    <span className="text-purple-600 dark:text-purple-400 font-bold">const</span>{' '}
                    <span className="text-sky-600 dark:text-sky-300 font-bold">developer</span> = &#123;
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-500 dark:text-slate-400">name:</span>{' '}
                    <span className="text-emerald-700 dark:text-emerald-300 font-semibold">"{personalInfo.name}"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-500 dark:text-slate-400">primaryBackend:</span> [
                    <span className="text-amber-700 dark:text-amber-300 font-semibold">"Laravel"</span>,{' '}
                    <span className="text-amber-700 dark:text-amber-300 font-semibold">"PHP"</span>,{' '}
                    <span className="text-amber-700 dark:text-amber-300 font-semibold">"MySQL"</span>],
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-500 dark:text-slate-400">eCommerce:</span> [
                    <span className="text-sky-700 dark:text-sky-300 font-semibold">"Shopify Liquid"</span>],
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-500 dark:text-slate-400">frontend:</span> [
                    <span className="text-purple-700 dark:text-purple-300 font-semibold">"React.js"</span>,{' '}
                    <span className="text-purple-700 dark:text-purple-300 font-semibold">"Next.js"</span>],
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-500 dark:text-slate-400">aiAugmented:</span>{' '}
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold">true</span>
                  </div>
                  <div>&#125;;</div>
                </div>

                {/* Metric Counter Cards */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3.5 rounded-xl bg-white dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 text-center shadow-xs">
                    <div className="text-2xl font-bold text-sky-600 dark:text-sky-400 font-mono">
                      {personalInfo.stats.experienceYears}
                    </div>
                    <div className="text-xs text-slate-600 dark:text-slate-400 font-medium mt-0.5">Years Exp.</div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 text-center shadow-xs">
                    <div className="text-2xl font-bold text-violet-600 dark:text-violet-400 font-mono">
                      {personalInfo.stats.projectsCompleted}
                    </div>
                    <div className="text-xs text-slate-600 dark:text-slate-400 font-medium mt-0.5">Projects Built</div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 text-center shadow-xs">
                    <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 font-mono">
                      {personalInfo.stats.techMastered}
                    </div>
                    <div className="text-xs text-slate-600 dark:text-slate-400 font-medium mt-0.5">Tech Tools</div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 text-center shadow-xs">
                    <div className="text-2xl font-bold text-amber-600 dark:text-amber-400 font-mono">
                      {personalInfo.stats.satisfactionRate}
                    </div>
                    <div className="text-xs text-slate-600 dark:text-slate-400 font-medium mt-0.5">Code Reliability</div>
                  </div>
                </div>

              </GlassCard>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};
