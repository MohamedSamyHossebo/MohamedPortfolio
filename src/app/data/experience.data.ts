export interface ExperienceEvent {
  date: string;
  title: string;
  description: string;
  type: 'achievement' | 'promotion' | 'skill' | 'milestone';
}

export interface Experience {
  id: string;
  companyName: string;
  companyLogo: string;
  role: string;
  employmentType: string;
  startDate: string;
  endDate?: string;
  isCurrent: boolean;
  summary: string;
  skills: string[];
  linkedinUrl?: string; // Keep for backward compatibility if needed, but socialLinks is preferred
  socialLinks?: {
    linkedin?: string;
    website?: string;
    twitter?: string;
    github?: string;
  };
  timeline: ExperienceEvent[];
}

export const EXPERIENCES: Experience[] = [
  {
    id: 'alyaqeen-technology',
    companyName: 'Alyaqeen Technology',
    companyLogo: '/assets/alyaqeen-logo.jpeg',
    role: 'Senior Front-End Developer',
    employmentType: 'Full-time',
    startDate: '2025-05-01',
    isCurrent: true,
    summary:
      'Leading the front-end architecture and development lifecycle using Angular 17+, with a focus on scalable patterns, clean code standards, and rigorous code reviews. Driving technical decisions across a range of products and mentoring junior developers on RxJS and component design.',
    skills: [
      'Angular 17+',
      'Next.js',
      'TypeScript',
      'WebSockets',
      'JWT',
      'Google OAuth',
      'SSR',
      'RTL/LTR',
      'Chart.js',
      'RBAC',
      'PrimeNG',
      'Shadcn/UI',
      'RxJS',
      'WebRTC',
      'Technical Leadership',
    ],
    socialLinks: {
      linkedin: 'https://www.linkedin.com/company/alyaqeentech',
      website: 'https://alyaqeen.com',
    },
    timeline: [
      {
        date: 'May 2025',
        title: 'Joined as Mid-Level Front-End Developer',
        description:
          'Joined Alyaqeen Technology, immediately taking ownership of core UI modules and the legacy codebase.',
        type: 'milestone',
      },
      {
        date: 'May 2025',
        title: 'Refactored Legacy Codebase',
        description:
          'Refactored legacy code into scalable Angular patterns and mentored junior developers on RxJS best practices.',
        type: 'skill',
      },
      {
        date: 'June 2025',
        title: 'Promoted to Senior Front-End Developer',
        description:
          'Promoted after just one month due to exceptional architectural contributions and leadership potential.',
        type: 'promotion',
      },
      {
        date: 'June 2025',
        title: 'E-Commerce Tires Platform',
        description:
          'Engineered a full tire-sales solution (tires.elsabaawy.com) featuring real-time support via WebSockets, optimized JWT & Google OAuth flows, and complex multilingual UI (RTL/LTR) with SSR.',
        type: 'achievement',
      },
      {
        date: 'July 2025',
        title: 'Tires Management Dashboard',
        description:
          'Built an enterprise-grade dashboard utilizing Chart.js for real-time analytics, role-based access control (RBAC), and dynamic theme switching.',
        type: 'achievement',
      },
      {
        date: 'August 2025',
        title: 'Event Management System',
        description:
          'Developed complex modules for event creation and ticketing using Angular + PrimeNG, ensuring secure authentication and real-time data updates.',
        type: 'achievement',
      },
      {
        date: 'September 2025',
        title: 'EasyMed Telemedicine Dashboard',
        description:
          'Built the EasyMed telemedicine dashboard from scratch — enabling browser-based video and audio consultations via WebRTC with no installation required. The platform covers appointment management, patient tracking, and real-time team communication, all within a responsive interface designed for clinical workflows.',
        type: 'achievement',
      },
      {
        date: 'May 2026',
        title: 'Multi-Country Architecture & Multi-Store Engine',
        description:
          'Scaled the tires platform to support Egypt and Saudi Arabia as independent storefronts from a single codebase — each with its own localized pricing, catalog, RTL/LTR layout, and branding, switchable at runtime without a page reload.',
        type: 'achievement',
      },
    ],
  },
  {
    id: 'freelancer',
    companyName: 'Freelancer',
    companyLogo: '',
    role: 'Junior Developer',
    employmentType: 'Full-time',
    startDate: '2023-01-01',
    endDate: '2025-05-01',
    isCurrent: false,
    summary:
      'Delivered client projects end-to-end as a freelance front-end developer, handling requirements gathering, UI architecture, and implementation. Primary focus on Angular-based solutions for small and mid-sized businesses.',
    skills: [
      'Angular',
      'TypeScript',
      'JavaScript',
      'HTML5',
      'Tailwind CSS',
      'Bootstrap',
    ],
    socialLinks: {
      github: 'https://github.com/mohamed',
    },
    timeline: [
      {
        date: 'January 2023',
        title: 'Started Freelancing',
        description:
          'Began taking on web development projects for various clients.',
        type: 'milestone',
      },
      {
        date: '2024',
        title: 'Artovia E-Commerce Suite',
        description:
          'Designed and built a full e-commerce solution for Artovia comprising two deliverables: a customer-facing storefront and a dedicated admin dashboard for inventory, order, and product management. Both built with Angular and TypeScript, with a focus on clean component architecture and maintainable code.',
        type: 'achievement',
      },
    ],
  },
];
