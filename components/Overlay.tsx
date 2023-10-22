'use client'

import { MouseEvent, forwardRef, useCallback, useEffect, useRef } from 'react'
import { Portal } from './Portal'

type Props = {
  open: boolean
  children: React.ReactNode
  onClose?: () => void

  className?: string
}

export const Overlay = forwardRef<HTMLDivElement, Props>(
  ({ open, onClose, className, children }, ref) => {
    const contentRef = useRef<HTMLDivElement>(null)

    const toggleScrolling = (lock: boolean) => {
      document.body.style.overflow = lock ? 'hidden' : 'visible'
      document.documentElement.style.overflow = lock ? 'hidden' : 'visible'
    }

    const handleEscPress = useCallback(
      (e: KeyboardEvent) => {
        if (e.key === 'Escape' && onClose) {
          onClose()
        }
      },
      [onClose],
    )

    const handleContentClick = (e: MouseEvent<HTMLDivElement>) => {
      e.stopPropagation()
    }

    useEffect(() => {
      toggleScrolling(open)
      return () => toggleScrolling(false)
    }, [open])

    useEffect(() => {
      document.addEventListener('keydown', handleEscPress)
      return () => document.removeEventListener('keydown', handleEscPress)
    }, [handleEscPress])

    const opacityMap = {
      open: 'visible opacity-100 transition-opacity',
      close: 'hidden opacity-0',
    }

    return (
      <Portal>
        <div
          className={`fixed top-0 left-0 bottom-0 right-0 flex justify-center items-center bg-black bg-opacity-90 ${
            open ? opacityMap.open : opacityMap.close
          } ${className}`}
          onClick={onClose}
          ref={ref}
        >
          <div onClick={(e) => handleContentClick(e)}>{children}</div>
        </div>
      </Portal>
    )
  },
)

Overlay.displayName = 'Overlay'
