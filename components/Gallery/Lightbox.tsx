'use client'

import NextImage from 'next/image'
import { useCallback, useEffect, useState } from 'react'

import { Overlay } from '../Overlay'

import { Image } from '@/types'

import Caret from '@/icons/caret.svg'
import Close from '@/icons/close.svg'

type Props = {
  images: Image[]
  current?: number

  open: boolean
  onClose: () => void

  className?: string
}

const Lightbox = ({ images, ...props }: Props) => {
  const [current, setCurrent] = useState(props.current ?? 0)
  const image = images[current]

  const handleArrowClick = (next?: boolean) => {
    const { length } = images
    setCurrent((length + current + (next ? 1 : -1)) % length)
  }

  const handleArrowPress = useCallback(
    (e: KeyboardEvent) => {
      const { length } = images
      switch (e.key) {
        case 'ArrowLeft':
          setCurrent((length + current - 1) % length)
          break
        case 'ArrowRight':
          setCurrent((length + current + 1) % length)
          break
      }
    },
    [current, images],
  )

  useEffect(() => {
    document.addEventListener('keydown', handleArrowPress)
    return () => document.removeEventListener('keydown', handleArrowPress)
  }, [handleArrowPress])

  return (
    <Overlay className="text-gray" onClose={props.onClose} open>
      <button className="absolute top-1 right-1 shrink-0 p-2 z-10" onClick={props.onClose}>
        <Close className="w-8 h-8 lg:w-12 lg:h-12" />
      </button>

      <button
        className="shrink-0 absolute top-1/2 left-1 -translate-y-1/2 p-2 lg:p-4 z-10"
        onClick={() => handleArrowClick()}
      >
        <Caret className="w-6 h-6 lg:w-8 lg:h-8 rotate-180" />
      </button>
      <button
        className="shrink-0 absolute top-1/2 right-1 -translate-y-1/2 p-2 lg:p-4 z-10"
        onClick={() => handleArrowClick(true)}
      >
        <Caret className="w-6 h-6 lg:w-8 lg:h-8" />
      </button>

      <div
        className="relative h-screen max-w-[calc(100vw-1rem)] max-h-[calc(100vh-1rem)] lg:max-w-[calc(100vw-3rem)] lg:max-h-[calc(100vh-3rem)]"
        style={{
          aspectRatio: `${image.size?.width}/${image.size?.height}`,
        }}
      >
        <NextImage
          className="object-contain rounded lg:rounded-lg animate-fade-in shadow lg:shadow-lg"
          src={image.src}
          alt={image.alt}
          fill
        />
      </div>
    </Overlay>
  )
}

export default Lightbox
