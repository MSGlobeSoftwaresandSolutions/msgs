# MS Globe Softwares and Solutions – Corporate Web Platform

> **Tagline:** Innovating Software. Empowering Possibilities.  
> **Brand Identity:** High-performance software engineering, vertical ERP solutions, desktop utilities, and accessible computer science education.

---

## 🌟 Executive Overview

This repository houses the complete, production-ready corporate website for **MS Globe Softwares and Solutions**. Built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**, the platform exhibits the aesthetic of an international tier-one software brand with a dark navy glassmorphic design system (#070B17 / #0F172A), glowing electric blue (#2563EB), cyan (#22D3EE), and subtle violet (#A78BFA) accents.

The official company crest provided by the brand has been integrated directly into the brand identity system, complemented by original high-DPI vector illustrations, interactive product mockups, and responsive layouts.

---

## 🚀 Key Pages & Architecture

| Route | Page | Description |
|---|---|---|
| `/` | **Home** | Hero section with original stylized 3D/SVG digital globe, exact headline (*"Building Smarter Software for a Better Tomorrow"*), featured products, service disciplines, and Why Choose Us. |
| `/about` | **About Us** | Software-first company introduction, core engineering values, technology focus, and official brand crest showcase without fabricated corporate history or false statistics. |
| `/products` | **Products** | Reusable product registry with interactive search, category filters, and architectural comparison matrix. |
| `/products/tijori-erp` | **Tijori ERP** | Dedicated detail page for Jewellery Retail & Inventory Management: daily spot gold/silver rates, HUID hallmarking, karigar ledgers, and fast POS billing. |
| `/products/spark-assistant` | **Spark Assistant** | Dedicated detail page for the high-efficiency desktop productivity companion: instant hotkeys, writing synthesis, and local-first privacy. |
| `/products/codeverse-ai` | **CodeVerse AI** | Dedicated detail page for the free multi-language programming education platform with interactive browser test runners and verifiable platform completion certificates. |
| `/services` | **Services** | 6 core focus disciplines: Custom Software, Windows Desktop Apps, Vertical ERPs, Applied AI, UI/UX Engineering, and Long-Term Maintenance. |
| `/contact` | **Contact** | Interactive communication portal with client-side validation, server-side submission handler (`/api/contact`), spam honeypots, rate limiting, and transparent status notifications. |
| `/privacy` | **Privacy Policy** | Honest, responsible data privacy policy reflecting only actual data collected. |
| `/terms` | **Terms of Use** | Professional website usage and intellectual property terms. |
| `/_not-found` | **Custom 404** | Polished error screen with guided navigation back to active sections. |
| `/sitemap.xml` | **SEO Sitemap** | Automated dynamic sitemap including all static and product detail routes. |
| `/robots.txt` | **SEO Robots** | Standard web crawler directives. |

---

## 🛠️ Tech Stack & Dependencies

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router, Static Site Generation & Edge Runtime API routes)
- **Language:** TypeScript 5.6 (strict mode enabled)
- **Styling:** [Tailwind CSS 3.4](https://tailwindcss.com/) with custom dark navy palette, mesh textures, and glassmorphism utilities
- **Icons:** [Lucide React](https://lucide.dev/)
- **Animations:** Hardware-accelerated CSS keyframes, SVG paths, and smooth transitions adhering to `prefers-reduced-motion`

---

## 📦 Getting Started Locally

### Prerequisites
- Node.js `v18.17+` or `v20+` (Tested on `v24.20.0`)
- npm, pnpm, or yarn

### Installation
```bash
# Clone the repository and navigate into the workspace
cd "MS Globe Foundation"

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build & Local Preview
```bash
# Compile and build optimized production bundle
npm run build

# Start production server
npm run start
```

---

## ⚙️ Environment Variables & Configuration

Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

### Configuration Options

```env
# Public URL & Contact Info
NEXT_PUBLIC_SITE_URL=https://msglobesoftwares.com
NEXT_PUBLIC_CONTACT_EMAIL=contact@msglobesoftwares.com
NEXT_PUBLIC_SUPPORT_EMAIL=support@msglobesoftwares.com

# Remote Email Delivery (Optional)
# If provided, inquiries submitted on /contact are forwarded to your inbox via Resend.
# If omitted, inquiries are validated and logged safely to server runtime logs with an
# honest notification so users are not misled about delivery.
RESEND_API_KEY=
RESEND_FROM_EMAIL=MS Globe Website <onboarding@resend.dev>
CONTACT_NOTIFICATION_EMAIL=contact@msglobesoftwares.com
```

---

## ☁️ Deployment Guide (Vercel)

This application is optimized for zero-configuration deployment to [Vercel](https://vercel.com/):

1. **Push to Git Repository:**
   Initialize a Git repository (e.g. GitHub or GitLab) and push the codebase.

2. **Import into Vercel:**
   - Log in to your Vercel dashboard and click **"Add New" &rarr; "Project"**.
   - Select your repository.
   - Framework preset will automatically detect **Next.js**.
   - Root directory: `./`

3. **Configure Environment Variables (Optional):**
   - Add `RESEND_API_KEY` (if you wish to enable live email forwarding).
   - Add `NEXT_PUBLIC_SITE_URL` (set to your custom production domain, e.g. `https://msglobesoftwares.com`).

4. **Deploy:**
   Click **"Deploy"**. Vercel will build all static routes and deploy edge API functions in under 60 seconds.

---

## 🔍 Functionality Status Matrix

To maintain the highest standard of corporate integrity:

| Feature | Status | Notes |
|---|---|---|
| **Design System & Dark Glassmorphism** | Fully Operational | #070B17 background, cyan & violet glow accents, responsive mobile navigation drawer. |
| **Official Brand Logo Integration** | Fully Operational | Integrated official circular logo asset with fallback vector monogram. |
| **Static Pre-rendering (SSG)** | Fully Operational | All pages pre-rendered statically for sub-second load times and SEO optimization. |
| **Contact Form Client & Server Validation** | Fully Operational | Field validation, rate-limiting, and spam honeypot filters. |
| **Contact Email Dispatch** | Configurable Gateway | Operates in honest server-logging mode out-of-the-box; live inbox forwarding activates instantly when `RESEND_API_KEY` is provided. |
| **Microsoft Store Download Buttons** | Configurable Placeholders | Currently renders *"Store link coming soon"*; easily updated in `src/config/site.ts` with verified store URLs upon release. |
| **Social Links** | Configurable Registry | Centralized in `src/config/site.ts` for instant updates. |

---

## 📄 License & Attribution

Copyright &copy; 2026 MS Globe Softwares and Solutions. All rights reserved.
