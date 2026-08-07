# Simarjeet Kaur — AI-Augmented Full Stack Developer Portfolio

A modern, high-performance developer portfolio built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, **Tailwind CSS v4**, **Framer Motion**, and **Lucide Icons**. Designed with glassmorphism aesthetics, dark/light theme switching, interactive case study modals, and responsive UX.

---

## 🚀 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router & Server Components)
- **Library**: [React 19](https://react.dev/) & TypeScript
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with Glassmorphism Design Tokens
- **Animations**: [Framer Motion](https://www.framer.com/motion/) & [Canvas Confetti](https://github.com/catdad/canvas-confetti)
- **Icons**: [Lucide React](https://lucide.dev/)
- **SEO & Schema**: JSON-LD Structured Person Schema, OpenGraph, Dynamic Sitemap & Robots.txt

---

## 📁 Project Structure

```
my-portfolio/
├── app/
│   ├── layout.tsx             # Root layout with SEO, JSON-LD Schema & ThemeProvider
│   ├── page.tsx               # Main assembly page for all portfolio sections
│   ├── globals.css            # Custom glassmorphism, theme variables & design tokens
│   ├── sitemap.ts             # Dynamic XML sitemap generator
│   └── robots.ts              # Search engine directives
├── components/
│   ├── ui/                    # Reusable atomic UI components
│   │   ├── Button.tsx
│   │   ├── GlassCard.tsx
│   │   ├── Badge.tsx
│   │   └── Modal.tsx
│   ├── sections/              # Section components
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── WhyHireMeSection.tsx
│   │   ├── AiWorkflowSection.tsx
│   │   ├── EducationSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   └── ContactSection.tsx
│   ├── interactive/           # Dynamic widgets & modals
│   │   ├── BackgroundEffect.tsx
│   │   ├── ProjectModal.tsx
│   │   └── ScrollToTop.tsx
│   └── layout/
│       ├── Header.tsx         # Navbar with scroll progress, active section & mobile drawer
│       └── Footer.tsx         # Footer with quick links & social icons
├── context/
│   └── ThemeContext.tsx       # Dark/Light theme state provider
├── data/
│   └── portfolioData.ts       # Structured resume content source of truth
├── types/
│   └── portfolio.ts           # TypeScript interfaces for resume data
└── lib/
    └── utils.ts               # Class name merging utility (clsx + tailwind-merge)
```

---

## 🛠️ Installation & Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/simarkaur22/portfolio.git
   cd my-portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Build for production**:
   ```bash
   npm run build
   ```

---

## 🌐 Deploying to Vercel

1. Push your code to your GitHub repository.
2. Sign in to [Vercel](https://vercel.com).
3. Click **"New Project"** and import your repository `portfolio`.
4. Vercel will automatically detect **Next.js**. Click **"Deploy"**.
5. Your portfolio will be live in under 2 minutes!

---

## 💡 Post-Deployment Recommendations

1. **Add PDF Resume**: Place your updated `resume.pdf` file inside the `public/` directory so visitors can directly download it.
2. **Connect Custom Domain**: Point your custom domain (e.g. `yourmedicals.co.uk` or `simarjeetkaur.dev`) in Vercel settings.
3. **Analytics Integration**: Add Vercel Analytics or Google Analytics in `app/layout.tsx` for tracking visitor engagements.
