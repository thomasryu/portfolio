'use client'

import { useState } from 'react'
import { Overlay } from '../Overlay'
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
    <Overlay open onClose={props.onClose}>
      <div className='w-full h-full p-2 lg:p-10'>
        <div className='relative w-full h-full max-h-[calc(100% - 48rem)]'>
          <Image
            className='object-contain rounded animate-fade-in'
            src={image.src}
            alt={image.alt}
            fill
          />
        </div>
      </div>
    </Overlay>
  )
}

export default Lightbox
