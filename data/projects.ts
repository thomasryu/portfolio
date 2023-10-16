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
      { type: 'mobile', src: '/images/projects/cobli-mobile.png', alt: '' },
      { type: 'desktop', src: '/images/projects/cobli-desktop.png', alt: '' },
    ],

    description: '',
    tags: ['HTML', 'CSS', 'TypeScript', 'React', 'Next.js', 'Styled JSX'],
  },
]
