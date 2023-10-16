import { Project } from '@/types'

export const projects: Project[] = [
  // {
  //   label: '',
  //   name: '',
  //   images: [{ src: '/images/projects/', alt: '' }],
  //   description: '',
  //   tags: [''],
  // },

  {
    label: 'Website',
    name: 'Cobli',
    href: 'https://www.cobli.co',

    date: {
      start: '2018',
      end: '2023',
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
      "Cobli was my first experience with React. Back in 2018, I was tasked with building the company's website from scratch, using Gatsby and Netlify.",
    tags: ['HTML', 'CSS', 'TypeScript', 'React', 'Next.js', 'Styled JSX'],
  },
]
