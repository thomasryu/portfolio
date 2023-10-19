'use client'

import { useState } from 'react'
import { Overlay } from '../Overlay'

import Close from '@/icons/close.svg'

import { Image as ImageType } from '@/types'
import Image from 'next/image'

type Props = {
  images: ImageType[]
  current?: number

  open: boolean
  onClose: () => void

  className?: string
}

const Lightbox = (props: Props) => {
  const [current, setCurrent] = useState(props.current || 0)
  const image = props.images[current]

  return (
    <Overlay onClose={props.onClose} open>
      <button
        className='absolute top-1 right-1 shrink-0 p-2 z-10'
        onClick={props.onClose}
      >
        <Close className='text-gray w-8 h-8 lg:w-12 lg:h-12' />
      </button>

      <div
        className='relative h-screen max-w-[calc(100vw-1rem)] max-h-[calc(100vh-1rem)] lg:max-w-[calc(100vw-3rem)] lg:max-h-[calc(100vh-3rem)]'
        style={{
          aspectRatio: `${image.size?.width}/${image.size?.height}`,
        }}
      >
        <Image
          className='object-contain rounded lg:rounded-lg animate-fade-in shadow lg:shadow-lg'
          src={image.src}
          alt={image.alt}
          fill
        />
      </div>
    </Overlay>
  )
}

export default Lightbox
