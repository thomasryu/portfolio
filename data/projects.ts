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

  //   image: [
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

    image: [
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
      "I built Cobli's website and blog from scratch using Gatsby (a React-based framework) and WordPress, respectively. I later refactored the website to the more modern Next.js, improving not only code quality, but also scalability and performance.",
    // items: [
    //   'Developing new pages, tools, and components',
    //   'Adding and maintaining analytics and tracking, and CRM workflows',
    //   'Implementing technical SEO improvements to better rank our platforms in search results',
    //   'Implementing A/B tests to improve our conversion rates',
    // ],

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
]
