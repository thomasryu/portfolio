import { Project } from '@/types'

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
  //       src: '/images/projects/-desktop.png',
  //       alt: "",
  //     },
  //     {
  //       type: 'mobile',
  //       src: '/images/projects/-mobile.png',
  //       alt: "",
  //     },
  //   ],

  //   description: '',
  //   items: [''],

  //   tags: [''],
  // },

  {
    label: 'Website',
    name: 'Cobli',
    href: 'https://www.cobli.co',

    date: {
      start: '2018',
      end: 'present',
    },

    images: [
      {
        type: 'desktop',
        src: '/images/projects/cobli-desktop.png',
        alt: "Desktop version of Cobli's website home page",
      },
      {
        type: 'mobile',
        src: '/images/projects/cobli-mobile.png',
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

  // {
  //   label: 'Personal',
  //   name: 'The SeDAN Crew',
  //   href: 'https://the-sedan-crew.netlify.app',

  //   date: '2021',

  //   images: {
  //     type: 'desktop',
  //     src: '/images/projects/the-sedan-crew-desktop.png',
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
      src: '/images/projects/threejs-portal-desktop.png',
      alt: 'A 3D model of a pink stone portal with a pink hue. Around it an assortment of stones, cut tree logs, fences and lamp posts.',
    },

    description: `A Three.js (a 3D rendering library for JavaScript) and 3D modeling exercise, done for one of Bruno Simon's (@bruno_simon) Three.js Journey courses.`,

    tags: ['HTML', 'CSS', 'JavaScript', 'Three.js', 'Blender'],
  },
]
