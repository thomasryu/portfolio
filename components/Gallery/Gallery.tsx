'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { Image as ImageType } from '@/types'

type Props = {
  images: ImageType[]
  current?: number

  className?: string
}

const Lightbox = dynamic(() => import('./Lightbox'))

export const Gallery = (props: Props) => {
  const [current, setCurrent] = useState(props.current || 0)
  const [open, setOpen] = useState(false)

  const handleClick = (index: number) => {
    setCurrent(index)
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      {/* Gallery */}
      <div className={`flex flex-wrap ${props.className}`}>
        <div className='-m-2 flex flex-wrap'>
          {props.images.map((image, index) => (
            <div
              className='shrink max-h-44 lg:max-h-64 m-2 rounded overflow-hidden cursor-pointer shadow lg:shadow-lg lg:hover:shadow transition-shadow'
              style={{
                aspectRatio: `${image.size?.width}/${image.size?.height}`,
              }}
              onClick={() => handleClick(index)}
              key={image.src}
            >
              <Image
                className='object-contain bg-light-gray animate-fade-in'
                src={image.src}
                alt={image.alt}
                width={image.size?.width}
                height={image.size?.height}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {open && (
        <Lightbox
          images={props.images}
          current={current}
          onClose={handleClose}
          open
        />
      )}
    </>
  )
}
