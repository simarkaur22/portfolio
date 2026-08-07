import React from 'react';
import { Header } from '@/components/layout/Header';
import { BackgroundEffect } from '@/components/interactive/BackgroundEffect';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { WhyHireMeSection } from '@/components/sections/WhyHireMeSection';
import { AiWorkflowSection } from '@/components/sections/AiWorkflowSection';
import { EducationSection } from '@/components/sections/EducationSection';
// import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { Footer } from '@/components/layout/Footer';
import { ScrollToTop } from '@/components/interactive/ScrollToTop';

export default function Home() {
  return (
    <main className="min-h-screen relative bg-[var(--bg-page)] text-[var(--text-heading)] selection:bg-sky-500/30 selection:text-sky-400 overflow-hidden transition-colors duration-300">
      {/* Background Ambient Mesh & Cursor Glow */}
      <BackgroundEffect />

      {/* Navigation Header */}
      <Header />

      {/* Main Page Sections */}
      <div className="relative z-10 bg-[var(--bg-page)]">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ServicesSection />
        <WhyHireMeSection />
        <AiWorkflowSection />
        <EducationSection />
        {/* <TestimonialsSection /> */}
        <ContactSection />
      </div>

      {/* Footer */}
      <Footer />

      {/* Scroll To Top Floating Button */}
      <ScrollToTop />
    </main>
  );
}
