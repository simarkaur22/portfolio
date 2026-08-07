'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { 
  Send, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  CheckCircle2, 
  AlertCircle,
  MessageSquare,
  RotateCcw,
  ExternalLink
} from 'lucide-react';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { personalInfo } from '@/data/portfolioData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleResetForm = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setSubmitted(false);
    setErrorMessage('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage('Please fill out all required fields.');
      return;
    }

    setIsSubmitting(true);

    try {
      const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || '4f3e9d3b-c0aa-4f52-b28a-622935b00c5c';

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          subject: formData.subject || `Portfolio Contact from ${formData.name}`,
          message: formData.message,
          from_name: 'Simarjeet Kaur Portfolio'
        })
      });

      const result = await response.json();

      if (!result.success) {
        throw new Error(result.message || 'Submission failed');
      }

      setIsSubmitting(false);
      setSubmitted(true);

      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
      });
    } catch (err: any) {
      setIsSubmitting(false);
      setErrorMessage(err?.message || 'Failed to submit form. You can email directly below.');
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-24 relative z-10 bg-[var(--bg-page)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <Badge variant="emerald" size="md" icon={<MessageSquare className="w-3.5 h-3.5 shrink-0" />}>
            Get In Touch
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--text-heading)] tracking-tight">
            Let's Build Something <span className="gradient-text">Exceptional</span>
          </h2>
          <p className="text-sm sm:text-lg text-[var(--text-body)]">
            Open for Laravel developer roles, full-stack projects, or custom web development.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">
          
          {/* Left Column: Direct Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            <GlassCard className="p-6 sm:p-8 space-y-6">
              <h3 className="text-xl font-bold text-[var(--text-heading)]">Contact Information</h3>
              <p className="text-xs sm:text-sm text-[var(--text-body)] leading-relaxed">
                Feel free to reach out via email, phone, or LinkedIn. I typically respond within 12 hours.
              </p>

              <div className="space-y-4 pt-2">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-[var(--bg-pill)] border border-[var(--border-subtle)] hover:border-sky-500/40 transition-colors group max-w-full overflow-hidden"
                >
                  <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-500 group-hover:scale-105 transition-transform shrink-0">
                    <Mail className="w-5 h-5 shrink-0" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-xs text-[var(--text-muted)] font-mono">Email Address</div>
                    <div className="text-xs sm:text-sm font-semibold text-[var(--text-heading)] group-hover:text-sky-500 transition-colors truncate">
                      {personalInfo.email}
                    </div>
                  </div>
                </a>

                <a
                  href={`tel:${personalInfo.phone}`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-[var(--bg-pill)] border border-[var(--border-subtle)] hover:border-sky-500/40 transition-colors group max-w-full overflow-hidden"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-500 group-hover:scale-105 transition-transform shrink-0">
                    <Phone className="w-5 h-5 shrink-0" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-xs text-[var(--text-muted)] font-mono">Phone Number</div>
                    <div className="text-xs sm:text-sm font-semibold text-[var(--text-heading)] group-hover:text-emerald-500 transition-colors truncate">
                      {personalInfo.phone}
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-[var(--bg-pill)] border border-[var(--border-subtle)] max-w-full overflow-hidden">
                  <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/30 flex items-center justify-center text-violet-500 shrink-0">
                    <MapPin className="w-5 h-5 shrink-0" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-xs text-[var(--text-muted)] font-mono">Location</div>
                    <div className="text-xs sm:text-sm font-semibold text-[var(--text-heading)] truncate">
                      {personalInfo.location}
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Buttons */}
              <div className="pt-4 border-t border-[var(--border-subtle)] space-y-3">
                <div className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider">Connect Online</div>
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-[var(--bg-pill)] border border-[var(--border-subtle)] text-[var(--text-body)] hover:text-sky-500 hover:border-sky-400/40 transition-all flex items-center gap-2 text-xs font-semibold shrink-0 min-h-[42px]"
                  >
                    <Linkedin className="w-4 h-4 shrink-0" /> LinkedIn
                  </a>

                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-[var(--bg-pill)] border border-[var(--border-subtle)] text-[var(--text-body)] hover:text-sky-500 hover:border-sky-400/40 transition-all flex items-center gap-2 text-xs font-semibold shrink-0 min-h-[42px]"
                  >
                    <Github className="w-4 h-4 shrink-0" /> GitHub
                  </a>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <GlassCard className="p-6 sm:p-8 space-y-6">
              <h3 className="text-xl font-bold text-[var(--text-heading)]">Send a Direct Message</h3>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-6 md:p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-5"
                >
                  <CheckCircle2 className="w-12 h-12 sm:w-14 sm:h-14 text-emerald-500 mx-auto shrink-0" />
                  
                  <div className="space-y-2">
                    <h4 className="text-lg sm:text-xl font-bold text-[var(--text-heading)]">Message Delivered!</h4>
                    <p className="text-xs sm:text-sm text-[var(--text-body)] leading-relaxed max-w-md mx-auto">
                      Thank you! Your message has been sent directly to <strong className="break-all">{personalInfo.email}</strong>. I'll review it and get back to you shortly.
                    </p>
                  </div>

                  {/* Reset Form & Alternative Actions */}
                  <div className="pt-4 border-t border-emerald-500/20 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <Button
                      variant="primary"
                      size="md"
                      icon={<RotateCcw className="w-4 h-4 shrink-0" />}
                      onClick={handleResetForm}
                      className="w-full sm:w-auto"
                    >
                      Send Another Message
                    </Button>

                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="w-full sm:w-auto"
                    >
                      <Button
                        variant="glass"
                        size="md"
                        icon={<Mail className="w-4 h-4 shrink-0" />}
                        className="w-full justify-center"
                      >
                        Direct Email
                      </Button>
                    </a>
                  </div>

                  <div className="text-[11px] text-[var(--text-muted)] font-mono">
                    Want to connect on social media instead?{' '}
                    <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-sky-500 hover:underline inline-flex items-center gap-0.5 font-semibold">
                      LinkedIn <ExternalLink className="w-2.5 h-2.5 shrink-0" />
                    </a>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMessage && (
                    <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-xs text-rose-600 dark:text-rose-300 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-rose-500 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-[var(--text-body)]">Your Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="w-full px-4 py-2.5 rounded-xl bg-[var(--bg-input)] border border-[var(--border-subtle)] text-[var(--text-heading)] text-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors min-h-[42px]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-[var(--text-body)]">Your Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="w-full px-4 py-2.5 rounded-xl bg-[var(--bg-input)] border border-[var(--border-subtle)] text-[var(--text-heading)] text-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors min-h-[42px]"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[var(--text-body)]">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Laravel Role / Project Inquiry"
                      className="w-full px-4 py-2.5 rounded-xl bg-[var(--bg-input)] border border-[var(--border-subtle)] text-[var(--text-heading)] text-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors min-h-[42px]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[var(--text-body)]">Message *</label>
                    <textarea
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hi Simarjeet, I'd like to discuss a project..."
                      required
                      className="w-full px-4 py-2.5 rounded-xl bg-[var(--bg-input)] border border-[var(--border-subtle)] text-[var(--text-heading)] text-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    isLoading={isSubmitting}
                    icon={<Send className="w-4 h-4 shrink-0" />}
                    className="w-full justify-center"
                  >
                    Send Message
                  </Button>
                </form>
              )}
            </GlassCard>
          </div>

        </div>

      </div>
    </section>
  );
};
