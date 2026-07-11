import type { Course } from '@/interfaces/course'

export const data: Array<Course> = [
  {
    id: 1,
    cover: '/images/courses/a9e7b27a0c5e986a22416d79e2e9dba9.jpg',
    title: 'Web Development',
    rating: 5,
    ratingCount: 8,
    price: 25,
    category: 'Core service',
    description:
      'Full-stack web applications with Next.js and Django—fast, SEO-friendly frontends paired with secure, scalable APIs and admin panels.',
    highlights: ['Responsive UI & dashboards', 'REST & GraphQL APIs', 'Auth, roles & permissions'],
  },
  {
    id: 3,
    cover: '/images/courses/christopher-gower-m_HRfLhgABo-unsplash.jpg',
    title: 'AI & Automation',
    rating: 4,
    ratingCount: 7,
    price: 30,
    category: 'High demand',
    description:
      'Integrate OpenAI, Claude, and custom Python models into your product—chat assistants, document processing, and workflow automation.',
    highlights: ['ChatGPT & Claude APIs', 'Document & form automation', 'Smart search & recommendations'],
  },
  {
    id: 4,
    cover: '/images/courses/true-agency-o4UhdLv5jbQ-unsplash.jpg',
    title: 'Cloud Solutions',
    rating: 4,
    ratingCount: 12,
    price: 30,
    category: 'Infrastructure',
    description:
      'Production deployments with Docker, Nginx, PostgreSQL, and CI/CD. We host and manage Django + Next.js apps on AWS, GCP, or Azure.',
    highlights: ['Docker & containerization', 'Staging & production pipelines', 'Monitoring & backups'],
  },
  {
    id: 5,
    cover: '/images/courses/stillness-inmotion-Jh6aQX-25Uo-unsplash.jpg',
    title: 'Mobile App Development',
    rating: 4,
    ratingCount: 32,
    price: 35,
    category: 'Cross-platform',
    description:
      'Cross-platform mobile apps powered by Django REST APIs and Flutter or React Native for seamless Android and iOS experiences.',
    highlights: ['iOS & Android from one codebase', 'Offline-ready mobile UX', 'Push notifications & deep links'],
  },
]
