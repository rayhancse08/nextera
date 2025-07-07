import type { Course } from '@/interfaces/course'

export const data: Array<Course> = [
  {
    id: 1,
    cover: '/images/courses/a9e7b27a0c5e986a22416d79e2e9dba9.jpg',
    title: 'Web Development',
    rating: 5,
    ratingCount: 8,
    price: 25,
    category: 'Beginner',
    description:'Full-stack web development using Next.js for the frontend and Django for the backend — delivering fast, SEO-friendly, and secure applications.'
  },

  {
    id: 3,
    cover: '/images/courses/christopher-gower-m_HRfLhgABo-unsplash.jpg',
    title: 'AI & Automation',
    rating: 4,
    ratingCount: 7,
    price: 30,
    category: 'Beginner',
    description:'We integrate Python-powered machine learning models into Django backends and visualize data interactively with dynamic Next.js dashboards.'
  },
  {
    id: 4,
    cover: '/images/courses/true-agency-o4UhdLv5jbQ-unsplash.jpg',
    title: 'Cloud Solutions',
    rating: 4,
    ratingCount: 12,
    price: 30,
    category: 'Intermediate',
    description:'Scalable deployments with Docker, Nginx, PostgreSQL, and CI/CD pipelines. We host and manage your Django + Next.js apps on AWS, GCP, or Azure.'
  },
  {
    id: 5,
    cover: '/images/courses/stillness-inmotion-Jh6aQX-25Uo-unsplash.jpg',
    title: 'Mobile App Development',
    rating: 4,
    ratingCount: 32,
    price: 35,
    category: 'Intermediate',
    description:'Build cross-platform mobile apps powered by Django REST APIs and Flutter or React Native for seamless Android and iOS experiences.'
  },

]
