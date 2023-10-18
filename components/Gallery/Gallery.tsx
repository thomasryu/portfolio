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
      <div className={`flex space-x-2 ${props.className}`}>
        {props.images.map((image, index) => (
          <div className='' onClick={() => handleClick(index)}>
            <Image
              className='h-full w-auto object-contain'
              src={image.src}
              alt={image.alt}
              width={image.size?.width}
              height={image.size?.height}
              style={{
                aspectRatio: `${image.size?.width}/${image.size?.height}`,
              }}
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {open && (
        <Lightbox
          images={props.images}
          open={open}
          current={current}
          onClose={handleClose}
        />
      )}
    </>
  )
}
