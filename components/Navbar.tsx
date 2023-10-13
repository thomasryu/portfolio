import Link from 'next/link'
import { Container } from '@/components/Container'

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
      <div className='space-x-2 lg:space-x-4 ml-auto'>
        {links.map((link) => (
          <Link
            className='font-serif font-bold px-2 py-1'
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
