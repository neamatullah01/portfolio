prd_content = """# Product Requirements Document (PRD): Personal Portfolio

## 1. Project Overview

**Project Name:** Neamat Ullah - Personal Portfolio
**Objective:** To build a highly interactive, fully responsive personal portfolio website that showcases professional experience as a Full-Stack Web Developer and aspiring DevOps Engineer, highlighting key projects, technical skills, and educational background.
**Target Audience:** Recruiters, hiring managers, potential clients, and fellow developers.

## 2. Technology Stack & Design System

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **Color Palette:** Sourced from Colorhunt (Preference for professional Dark Theme aesthetics with high-contrast accents).
- **Animations:** \* GSAP (for complex sequence animations)
  - Framer Motion (for page transitions and UI micro-interactions)
- **Scroll Behavior:** Lenis (for smooth scrolling experiences)
- **Deployment:** Vercel

## 3. Core Features & Functional Requirements

### 3.1. Navigation Bar (Navbar)

- **Layout:** Fixed top or sticky navbar.
- **Left Side:** Professional Logo / Branding (e.g., "Neamat").
- **Right Side:** Theme Toggle Button (Dark/Light mode) and Hamburger menu for mobile.
- **Functionality:** Smooth scroll navigation to all sections (Hero, About, Skills, Education, Projects, Contact).
- **Responsiveness:** Collapses into a mobile-friendly drawer or dropdown on smaller screens.

### 3.2. Hero Section

- **Designation:** Display professional titles prominently (e.g., "Full-Stack Web Developer & Aspiring DevOps Engineer").
- **Media:** A high-quality, professional headshot or stylized photo.
- **Social Links (Left Side):** Fixed or absolute positioned vertical sidebar containing icons linked to GitHub, LinkedIn, Twitter, and Facebook.
- **Call to Action (CTA):** "Download Resume" button.
  - _Note:_ Initially functions as a clickable placeholder if the resume file is not yet finalized, later updated with a direct PDF download link.

### 3.3. About Me Section

- **Content:**
  - **Introduction:** Overview of being a 4th-year Computer Science and Engineering (CSE) student.
  - **Programming Journey:** From competitive programming (C++) and university club involvement to building complex full-stack web applications.
  - **Work Preference:** Strong focus on architectural functionality, database design (Prisma/PostgreSQL), and Next.js rendering techniques over pure UI aesthetics.
  - **Hobbies/Personality:** Insights into interests outside of coding, showcasing a well-rounded personality.

### 3.4. Skills Section

- **UI/UX:** Visually appealing graphical format (e.g., progress bars, circular charts, or interactive grid icons) animated via Framer Motion.
- **Categories:**
  - **Frontend:** Next.js, React, Tailwind CSS, UI/UX Principles.
  - **Backend:** Node.js, Express, Prisma ORM, PostgreSQL.
  - **Tools & Languages:** Python (AI/ML), C++ (DSA), Git, DevOps tools.

### 3.5. Educational Qualification Section

- **Content:** Detailed breakdown of post-HSC education.
  - B.Sc. in Computer Science and Engineering (4th Year).
  - Relevant highlights: Competitive programming achievements, major university defense projects.

### 3.6. Projects Section

- **Layout:** Interactive card grid layout.
- **Card Components:** Project Name, Thumbnail Image, and a "View More / Details" button.
- **Detailed Project Page (Dynamic Route in Next.js):**
  Clicking "View More" opens a detailed page/modal containing:
  1.  **Main Technology Stack:** (e.g., Next.js, Express, PostgreSQL).
  2.  **Brief Description:** Context of the problem solved.
  3.  **Live Project Link:** URL to the deployed site.
  4.  **GitHub Repository Link:** Client-side source code link.
  5.  **Challenges Faced:** Technical hurdles overcome during development.
  6.  **Future Plans/Improvements:** Roadmap for the project.
- **Target Showcase Projects:**
  1.  _FoodHub:_ Full-stack multi-vendor food delivery platform (role-based dashboards, real-time tracking).
  2.  _Triplance:_ Travel agency portal (complex relational databases, ERD design).
  3.  _React Native Recipe App:_ Mobile app with 6-digit email verification and YouTube integration.

### 3.7. Contact Information Section

- **Objective:** Provide a frictionless way for visitors to reach out.
- **Details to Include:**
  - Email address (clickable `mailto:` link).
  - Phone number.
  - WhatsApp number (with direct `wa.me` chat link).
- **Layout:** Clean contact card or interactive form layout.

### 3.8. Footer Section

- **Design:** Simple, elegant, and minimal.
- **Content:** Copyright notice, secondary navigation links, and back-to-top button.

## 4. Non-Functional Requirements

- **Responsiveness:** 100% responsive across Mobile, Tablet, Laptop, and Desktop viewports.
- **Performance:** Optimized images, lazy loading for off-screen components, and fast First Contentful Paint (FCP) utilizing Next.js Server Components.
- **Accessibility:** ARIA labels for buttons (especially theme toggles and social links), semantic HTML structure, and keyboard-navigable links.
- **Version Control:** Git repository with semantic commit messages.

## 5. Development Milestones

1.  **Phase 1:** Project setup (Next.js, Tailwind, Lenis), folder structure, and color palette definition.
2.  **Phase 2:** Global components (Navbar, Footer) and Hero Section with GSAP entrance animations.
3.  **Phase 3:** Content sections (About, Skills, Education) and static data integration.
4.  **Phase 4:** Projects section grid and dynamic detail pages.
5.  **Phase 5:** Contact section, social links integration, and Dark/Light mode toggle logic.
6.  **Phase 6:** Final polish, Framer Motion scroll animations, cross-device testing, and deployment.
    """

with open("protfolio_prd.md", "w", encoding="utf-8") as f:
f.write(prd_content)

print("[file-tag: protfolio_prd.md]")
