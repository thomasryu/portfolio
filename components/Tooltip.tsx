'use client'

import { useState } from 'react'
import { Card } from './Card'
import Close from '@/icons/close.svg'

type Props = {
  children: React.ReactNode
  className?: string
}

export const Tooltip = (props: Props) => {
  const [open, setOpen] = useState(true)

  const closeClassName = `${
    !open
      ? 'transition-transform ease-jump-out duration-300 ransform translate-y-[calc(100%+1.5rem)]'
      : ''
  }`

  return (
    <Card
      className={`fixed bottom-2 right-2 lg:bottom-6 lg:right-6 pr-7 border-4 border-white rounded-xl ${closeClassName} ${props.className}`}
    >
      <button className='absolute top-1 right-1' onClick={() => setOpen(false)}>
        <Close className='w-6 h-6 p-1' />
      </button>

      {props.children}
    </Card>
  )
}
