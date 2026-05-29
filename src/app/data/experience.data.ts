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
      'Orchestrating the front-end lifecycle, architecting a scalable platform using modern Angular 17+, and conducting rigorous code reviews to enforce strict clean code standards. Delivering high-impact products including a multilingual e-commerce platform, an enterprise analytics dashboard, and a telemedicine interface.',
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
          'Healthcare shouldn\'t stop at the clinic door. I built the EasyMed telemedicine dashboard from scratch — a platform that lets doctors and patients meet face-to-face from anywhere, through live video and audio calls that run directly in the browser. No app to download, no friction, just a click and you\'re in the room with your doctor. Beyond the calls, the interface gives medical teams everything they need to manage appointments, track patients, and communicate in real time — all wrapped in a clean, responsive design that feels as trustworthy as the care it delivers.',
        type: 'achievement',
      },
      {
        date: 'May 2026',
        title: 'Multi-Country Architecture & Multi-Store Engine',
        description:
          'Faced with the challenge of scaling the tires platform across multiple markets simultaneously, I architected a zero-duplication multi-country system from scratch. Designed a dynamic routing layer using Angular\'s :country URL parameter, a reactive CountryService powered by Angular Signals for instant context switching, a custom AssetPipe for serving country-specific brand assets, and an HTTP interceptor that transparently scopes every API call to the active storefront. The result: Egypt and Saudi Arabia now run as fully independent storefronts — each with its own localized pricing, catalog, RTL/LTR layout, and branding — all from a single unified codebase, switchable at runtime without a single page reload.',
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
      'Developed and maintained complex web applications, collaborated with cross-functional teams.',
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
        title: 'Completed E-commerce Project',
        description:
          'Successfully delivered a full-featured e-commerce platform using Angular.',
        type: 'achievement',
      },
    ],
  },
];
