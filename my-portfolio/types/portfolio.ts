export interface Skill {
  name: string;
  level: number; // percentage 1-100
  iconName?: string;
  badge?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: Skill[];
}

export interface WorkExperience {
  id: string;
  company: string;
  location: string;
  position: string;
  period: string;
  isCurrent?: boolean;
  summary: string;
  responsibilities: string[];
  technologies: string[];
  achievements: string[];
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'Full Stack' | 'eCommerce' | 'Enterprise Portal' | 'Healthcare';
  projectType: 'Professional Project' | 'Client Work' | 'Freelance Project';
  isLive: boolean;
  liveUrl?: string;
  githubUrl?: string; // Omitted or null for client work
  availabilityNote?: string; // e.g. "Enterprise Codebase — Details & Demos Available Upon Request"
  shortDescription: string;
  problemSolved: string;
  role: string;
  contributions: string[];
  technologies: string[];
  challenges: string[];
  businessImpact: string;
  image: string;
  featured: boolean;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  deliverables: string[];
  popular?: boolean;
}

export interface WhyHireMePoint {
  id: string;
  title: string;
  description: string;
  icon: string;
  highlight: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  subtitle: string;
  status: string;
  location: string;
  email: string;
  phone: string;
  website: string;
  github: string;
  linkedin: string;
  bio: string;
  stats: {
    experienceYears: string;
    projectsCompleted: string;
    techMastered: string;
    satisfactionRate: string;
  };
}
