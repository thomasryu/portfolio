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
      ? 'transition-transform ease-jump-out duration-300 translate-y-[calc(100%+0.75rem)] lg:translate-y-[calc(100%+2.5rem)]'
      : ''
  }`

  return (
    <Card className={`fixed bottom-3 right-3 lg:bottom-6 lg:right-6 rounded-lg ${closeClassName} ${props.className}`}>
      <button className="absolute top-1 right-1" onClick={() => setOpen(false)} aria-label="Close">
        <Close className="w-8 h-8 p-1" />
      </button>

      {props.children}
    </Card>
  )
}
