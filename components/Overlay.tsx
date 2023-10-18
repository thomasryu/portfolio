'use client'

import { forwardRef, useCallback, useEffect } from 'react'
import { Portal } from './Portal'

type Props = {
  open: boolean
  children: React.ReactNode
  onClose?: () => void
}

export const Overlay = forwardRef<HTMLDivElement, Props>(
  ({ open, onClose, children }, ref) => {
    const handleEscapePress = useCallback(
      () => (e: KeyboardEvent) => {
        if (e.key === 'Escape' && onClose) {
          onClose()
        }
      },
      [onClose],
    )

    useEffect(() => {
      document.addEventListener('keydown', handleEscapePress)
      return () => document.removeEventListener('keydown', handleEscapePress)
    }, [handleEscapePress])

    const opacityMap = {
      open: 'visible opacity-100 transition-opacity',
      close: 'hidden opacity-0',
    }

    return (
      <Portal>
        <div
          className={`absolute top-0 left-0 flex justify-center items-center w-screen h-screen bg-black bg-opacity-80 ${
            open ? opacityMap.open : opacityMap.close
          }`}
          onClick={onClose}
          ref={ref}
        >
          {children}
        </div>
      </Portal>
    )
  },
)

Overlay.displayName = 'Overlay'
