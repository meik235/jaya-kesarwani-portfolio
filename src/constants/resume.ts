import type { ResumeData } from '@/types'

export const RESUME: ResumeData = {
  name: 'Jaya Kesarwani',
  role: 'Full Stack Engineer',
  location: 'Bengaluru, India',
  phone: '+91 7007314604',
  email: 'jaya.kesar25@gmail.com',
  linkedin: 'https://linkedin.com/in/jaya-kesarwani/',
  github: 'https://github.com/meik235',
  summary:
    'Full Stack Engineer with 3+ years of experience building scalable, high-performance web applications and backend systems. Strong expertise in FastAPI, Node.js, and AWS cloud services, with hands-on experience in React.js, Next.js, TypeScript, and modern frontend architecture. Experienced in system design, performance optimization, microservices architecture, and concurrent systems, delivering reliable and production-grade solutions for applications serving 10k+ users.',
  techStack: ['FastAPI', 'React.js', 'TypeScript', 'Go', 'Node.js', 'AWS', 'Next.js', 'Python'],
  stats: [
    { value: '4+', label: 'Years Experience' },
    { value: '10k+', label: 'Users Served' },
    { value: '40%', label: 'Ops Reduced' },
  ],
  skills: [
    {
      category: 'Languages',
      icon: '⌨',
      skills: ['Go', 'Python', 'JavaScript', 'TypeScript'],
    },
    {
      category: 'Backend',
      icon: '⚙',
      skills: ['Node.js', 'Express.js', 'FastAPI'],
    },
    {
      category: 'Frontend',
      icon: '◈',
      skills: ['React.js', 'Next.js (App Router)', 'Redux Toolkit', 'MUI', 'Tailwind CSS'],
    },
    {
      category: 'Cloud & DevOps',
      icon: '☁',
      skills: ['AWS S3', 'DynamoDB', 'Lambda', 'Docker'],
    },
    {
      category: 'Architecture',
      icon: '◎',
      skills: ['REST APIs', 'Microservices', 'SSR/SSG/ISR', 'System Design', 'Concurrency'],
    },
  ],
  experience: [
    {
      company: 'White Martech Solutions Pvt. Ltd.',
      role: 'Software Development Engineer II',
      period: 'Feb 2023 – Present',
      tags: ['Python', 'FastAPI', 'Go', 'React.js', 'TypeScript', 'AWS S3', 'DynamoDB'],
      groups: [
        {
          heading: 'Backend & AI Systems',
          bullets: [
            'Designed and implemented AI-assisted audio annotation pipelines using Python, AWS S3, and Label Studio, improving workflow efficiency',
            'Built scalable microservices using FastAPI, REST APIs, and DynamoDB for high-throughput data processing',
            'Developed asynchronous processing systems (workers + cron jobs), reducing manual operations by 40%',
          ],
        },
        {
          heading: 'High-Concurrency Systems (Go)',
          bullets: [
            'Architected a concurrent wallet monitoring service using goroutines and worker pools',
            'Processed multiple blockchain streams in parallel with fault-tolerant retry mechanisms',
            'Implemented real-time alerting systems using Slack webhooks for anomaly detection',
          ],
        },
        {
          heading: 'Frontend & Platform Engineering',
          bullets: [
            'Led development of scalable frontend architecture using React.js and TypeScript for a platform serving 10k+ users',
            'Improved web performance by reducing redundant API calls by 30–40% using caching, memoization, and request deduplication',
            'Built responsive, state-driven UI systems for web and mobile platforms',
          ],
        },
        {
          heading: 'Web3 Infrastructure',
          bullets: [
            'Designed automated token distribution systems for multi-wallet operations',
            'Integrated cross-chain RPC services with validation and error handling',
          ],
        },
      ],
    },
    {
      company: 'Tracxn Technologies Ltd',
      role: 'Google Workspace Developer',
      period: 'May 2022 – Feb 2023',
      tags: ['Google Apps Script', 'REST APIs', 'JavaScript'],
      groups: [
        {
          heading: 'Workflow Automation',
          bullets: [
            'Automated internal workflows using Google Apps Script and REST APIs',
            'Improved reporting efficiency and data reliability across teams',
          ],
        },
      ],
    },
  ],
  projects: [
    {
      number: '01',
      title: 'AI Audio Labeling Automation',
      description:
        'Built end-to-end dataset ingestion and export pipelines. Improved annotation lifecycle through automation and validation systems.',
      tags: ['Python', 'FastAPI', 'AWS S3'],
      featured: true,
      github: 'https://github.com/meik235',
    },
    {
      number: '02',
      title: 'Web3 Wallet Balance Monitor',
      description:
        'Developed concurrent wallet scanning system using goroutines. Enabled real-time anomaly detection via Slack webhook integrations.',
      tags: ['Go', 'Blockchain APIs', 'Goroutines'],
      github: 'https://github.com/meik235',
    },
    {
      number: '03',
      title: 'Expert Availability System',
      description:
        'Designed scheduling APIs with frontend integration. Implemented role-based access control and availability management.',
      tags: ['React', 'Node.js', 'REST APIs'],
      github: 'https://github.com/meik235',
    },
  ],
  contact: [
    {
      label: 'Email',
      value: 'jaya.kesar25@gmail.com',
      href: 'mailto:jaya.kesar25@gmail.com',
      icon: '✉',
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/jaya-kesarwani',
      href: 'https://linkedin.com/in/jaya-kesarwani/',
      icon: '◈',
    },
    {
      label: 'GitHub',
      value: 'github.com/meik235',
      href: 'https://github.com/meik235',
      icon: '⌥',
    },
    {
      label: 'Phone',
      value: '+91 7007314604',
      href: 'tel:+917007314604',
      icon: '◎',
    },
  ],
  education: {
    degree: 'Master of Computer Applications (MCA)',
    university: 'Dr. A. P. J. Abdul Kalam Technical University, Lucknow',
    year: '2022',
  },
}

export const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Skill Tree', href: '#skill-tree' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]
