import type { Mentor } from '@/interfaces/mentor'

export const data: Array<Mentor> = [
  {
    id: 1,
    photo: '/images/mentors/rayhan.png',
    name: 'Md. Emran Hossain',
    category: 'Co-Founder · Technical Lead',
    description:
      'Leads architecture and full-stack delivery across Next.js and Django projects—from MVP scoping to production deployment.',
  },
  {
    id: 2,
    photo: '/images/mentors/tanha.jpg',
    name: 'Sumiya Tanha',
    category: 'Co-Founder · Project Manager',
    description:
      'Keeps clients aligned on scope, timelines, and milestones. Bridges business goals with engineering execution.',
  },
  {
    id: 3,
    photo: '/images/mentors/ifti.png',
    name: 'Muhtasin Ifti',
    category: 'Software Engineer',
    description:
      'Builds backend APIs, integrations, and data layers with Django and PostgreSQL for reliable, maintainable systems.',
  },
  {
    id: 4,
    photo: '/images/mentors/nadim.png',
    name: 'Khalid Mahmud Nadim',
    category: 'Software Engineer',
    description:
      'Develops responsive frontends and user-facing features with React and Next.js, focused on performance and UX.',
  },
]
