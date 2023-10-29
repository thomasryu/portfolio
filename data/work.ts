import { Article, Project } from '@/types'
import LinkedIn from '@/icons/linkedin.svg'
import Medium from '@/icons/medium.svg'
import Text from '@/icons/text.svg'

export const projects: Project[] = [
  // {
  //   label: '',
  //   name: '',
  //   href: '',

  //   date: {
  //     start: '',
  //     end: '',
  //   },

  //   images: [
  //     {
  //       type: 'desktop',
  //       src: '/images/work/-desktop.png',
  //       alt: "",
  //     },
  //     {
  //       type: 'mobile',
  //       src: '/images/work/-mobile.png',
  //       alt: "",
  //     },
  //   ],

  //   description: '',
  //   items: [''],

  //   tags: [''],
  // },

  {
    label: 'Work',
    name: 'Cobli',
    href: 'https://www.cobli.co',

    date: {
      start: '2018',
      end: 'present',
    },

    images: [
      {
        type: 'desktop',
        src: '/images/work/cobli-desktop.png',
        alt: "Desktop version of Cobli's website home page",
      },
      {
        type: 'mobile',
        src: '/images/work/cobli-mobile.png',
        alt: "Mobile version of Cobli's website home page",
      },
    ],

    description:
      "I built Cobli's website and blog from scratch using Gatsby (a React-based framework) and WordPress, respectively. I later refactored the website to the more modern Next.js, improving not only code quality, but also scalability and performance. Besides development, some of my responsibilities are:",
    items: [
      'Adding and maintaining analytics and tracking, and CRM workflows',
      'Implementing technical SEO improvements to better rank our platforms in search results',
      'Implementing A/B tests to improve our conversion rates',
    ],

    tags: [
      'HTML',
      'CSS',
      'TypeScript',
      'React',
      'Next.js',
      'WordPress',
      'Hotjar',
      'Google Analytics 4',
      'Google Optimize',
    ],
  },

  {
    label: 'Personal',
    name: 'Portfolio',
    href: '/',

    date: '2022',

    images: [
      {
        type: 'desktop',
        src: '/images/work/portfolio-desktop.png',
        alt: 'A screenshot of the desktop version of this very own portfolio',
      },
      {
        type: 'mobile',
        src: '/images/work/portfolio-mobile.png',
        alt: 'A screenshot of the mobile version of this very own portfolio',
      },
    ],

    description:
      "At first glance, including this portfolio in its own projects section may seem like a stretch, a desperate move even. However, because it's not a simple static webpage, it is worth including it here. For example, some technologies used in it were:",
    items: [
      'Tailwind CSS: My first experience with the framework, it significantly acceleretad the coding process',
      "Contentful Headless CMS: Used as a data source for the articles' contents, and the gallery page",
    ],

    tags: [
      'HTML',
      'CSS',
      'TypeScript',
      'React',
      'Next.js',
      'Vercel',
      'Tailwind CSS',
    ],
  },

  // {
  //   label: 'Personal',
  //   name: 'The SeDAN Crew',
  //   href: 'https://the-sedan-crew.netlify.app',

  //   date: '2021',

  //   images: {
  //     type: 'desktop',
  //     src: '/images/work/the-sedan-crew-desktop.png',
  //     alt: 'A 3D model of a pink and blue sedan with 6 characters: 4 inside the car and 2 outside.',
  //   },

  //   description: `A silly personal project, made to apply the things I've learned with Bruno Simon's (@bruno_simon) Three.js Journey course. 3D models and illustrations done by me!`,

  //   tags: ['HTML', 'CSS', 'JavaScript', 'Three.js', 'Blender'],
  // },

  {
    label: 'Personal',
    name: 'Three.js Portal',
    href: 'https://threejs-portal.netlify.app',

    date: '2021',

    images: {
      type: 'desktop',
      src: '/images/work/threejs-portal-desktop.png',
      alt: 'A 3D model of a pink stone portal with a pink hue. Around it an assortment of stones, cut tree logs, fences and lamp posts.',
    },

    description: `A Three.js (a 3D rendering library for JavaScript) and 3D modeling exercise, done for one of Bruno Simon's (@bruno_simon) Three.js Journey courses.`,

    tags: ['HTML', 'CSS', 'JavaScript', 'Three.js', 'Blender'],
  },
]

export const articles: Article[] = [
  // {
  //   label: '',
  //   href: '',
  // },

  {
    icon: Text,
    label: 'What is Growth Hacking?',
    href: '/articles/growth-hacking',
  },
  {
    icon: LinkedIn,
    label: "Migrating Cobli's Website from Gatsby to Next.js",
    href: 'https://medium.com/@thomas.sameshima/migrating-coblis-website-from-gatsbyjs-to-nextjs-c9133b0257b4',
  },
  {
    icon: Medium,
    label: "A Glimpse at Cobli's Website and Blog's Ecosystem",
    href: 'https://www.linkedin.com/posts/thomasryu_cobli-figma-activity-7023620769775509505-GC_7',
  },
]