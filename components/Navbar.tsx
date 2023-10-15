import Link from 'next/link'
import { Container } from '@/components/Container'

import House from '@/icons/house.svg'

type Props = {}

export const links = [
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Projects',
    href: '/projects',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
]

export const Navbar = (props: Props) => (
  <nav className='text-black'>
    <Container className='h-16 flex items-center'>
      <Link className='flex items-center p-1' href='/' aria-label='Home'>
        <House className='w-7 h-7 lg:mb-1' />
        <span className='text-md lg:text-lg hidden md:block font-serif font-bold ml-3'>
          Home
        </span>
      </Link>

      <div className='space-x-2 ml-auto'>
        {links.map((link) => (
          <Link
            className='text-md lg:text-lg font-serif hover:bg-yellow transition-colors font-bold px-2 py-1 lg:px-3 lg:pt-1.5 lg:pb-1 rounded'
            href={link.href}
            key={link.label}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </Container>
  </nav>
)
