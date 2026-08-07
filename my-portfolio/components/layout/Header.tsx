'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Send, Sparkles } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { Button } from '@/components/ui/Button';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Services', href: '#services' },
  { name: 'Why Hire Me', href: '#why-hire-me' },
  { name: 'Contact', href: '#contact' }
];

export const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const winScroll = document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);

      const sections = navLinks.map((link) => link.href.substring(1));
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[var(--bg-page)]/95 backdrop-blur-md border-b border-[var(--border-subtle)] shadow-md py-3'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="flex items-center gap-2.5 group focus:outline-none shrink-0"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-md group-hover:scale-105 transition-transform shrink-0">
            SK
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-base sm:text-lg text-[var(--text-heading)] tracking-tight leading-none group-hover:text-sky-500 transition-colors whitespace-nowrap">
              Simarjeet Kaur
            </span>
            <span className="text-[10px] sm:text-[11px] text-sky-600 dark:text-sky-400 font-mono tracking-wider flex items-center gap-1 mt-0.5 font-semibold whitespace-nowrap">
              <Sparkles className="w-2.5 h-2.5 shrink-0" /> Laravel & Full Stack Dev
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-[var(--bg-card)] backdrop-blur-md px-4 py-1.5 rounded-full border border-[var(--border-subtle)] shadow-xs">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 ${
                  isActive
                    ? 'text-sky-600 dark:text-white font-bold'
                    : 'text-[var(--text-body)] hover:text-[var(--text-heading)]'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavTab"
                    className="absolute inset-0 bg-sky-50 dark:bg-zinc-800 border border-sky-200 dark:border-zinc-700 rounded-full -z-10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Desktop Action Buttons & Theme Switcher */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2.5 rounded-xl bg-[var(--bg-pill)] border border-[var(--border-subtle)] text-[var(--text-body)] hover:text-[var(--text-heading)] hover:border-sky-500/40 transition-all cursor-pointer shadow-xs shrink-0"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400 shrink-0" />
            ) : (
              <Moon className="w-4 h-4 text-sky-600 shrink-0" />
            )}
          </button>

          <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>
            <Button variant="primary" size="sm" icon={<Send className="w-3.5 h-3.5 shrink-0" />}>
              Hire Me
            </Button>
          </a>
        </div>

        {/* Mobile Actions: Theme Toggle & Hamburger */}
        <div className="flex lg:hidden items-center gap-2 shrink-0">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2.5 rounded-xl bg-[var(--bg-pill)] border border-[var(--border-subtle)] text-[var(--text-body)] active:scale-95 transition-transform shrink-0 min-h-[42px] min-w-[42px] flex items-center justify-center"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400 shrink-0" />
            ) : (
              <Moon className="w-4 h-4 text-sky-600 shrink-0" />
            )}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile navigation menu"
            aria-expanded={mobileMenuOpen}
            className="p-2.5 rounded-xl bg-[var(--bg-pill)] border border-[var(--border-subtle)] text-[var(--text-heading)] active:scale-95 transition-transform shrink-0 min-h-[42px] min-w-[42px] flex items-center justify-center cursor-pointer"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-sky-500 shrink-0" />
            ) : (
              <Menu className="w-6 h-6 shrink-0" />
            )}
          </button>
        </div>
      </div>

      {/* Top Scroll Progress Line */}
      <div
        className="absolute bottom-0 left-0 h-[2.5px] bg-gradient-to-r from-sky-500 via-indigo-500 to-emerald-400 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Mobile Animated Dropdown Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -10 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -10 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden fixed top-full left-0 right-0 z-50 bg-[var(--bg-page)] border-b border-[var(--border-subtle)] shadow-2xl overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`flex items-center justify-between text-base font-semibold py-3 px-4 rounded-xl transition-all ${
                      isActive
                        ? 'bg-sky-500/10 text-sky-600 dark:text-sky-400 font-bold border border-sky-500/20'
                        : 'text-[var(--text-body)] hover:text-[var(--text-heading)] hover:bg-[var(--bg-pill)]'
                    }`}
                  >
                    <span>{link.name}</span>
                    <span className="text-xs font-mono text-[var(--text-muted)]">&rarr;</span>
                  </a>
                );
              })}

              <div className="pt-4 border-t border-[var(--border-subtle)] mt-2">
                <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="block w-full">
                  <Button variant="primary" size="lg" icon={<Send className="w-4 h-4 shrink-0" />} className="w-full justify-center">
                    Contact & Hire Me
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
