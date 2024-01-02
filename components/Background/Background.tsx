'use client'

import { Canvas } from '@react-three/fiber'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'

import { BlurOverlay } from './components/BlurOverlay'
import { Diorama } from './components/Diorama'

export const Background = () => {
  const [height, setHeight] = useState('100dvh')
  const canvasRef = useRef<HTMLDivElement>(null)

  // Work around for the issue with the <Html> from Drei, where
  // it is positioned incorrectly on iOS, on canvases with a odd number height
  // more info here: https://github.com/pmndrs/drei/issues/720
  useLayoutEffect(() => {
    adjustHeight()
    window.addEventListener('resize', adjustHeight)
    return () => window.removeEventListener('resize', adjustHeight)
  }, [])

  const adjustHeight = () => {
    const { current } = canvasRef
    if (current) {
      let height = current.clientHeight
      setHeight(`${height + (height % 2)}px`)
    }
  }

  return (
    <div
      className="fixed bottom-0 left-0 -z-10 w-screen bg-gradient-to-t from-light-gray to-transparent to-50%"
      style={{ height }}
      ref={canvasRef}
    >
      <BlurOverlay />

      <Canvas
        className="-z-10 touch-none"
        camera={{
          fov: 60,
          near: 0.1,
          far: 11,
          position: [3, 3, 3],
        }}
        shadows
      >
        <Diorama />
      </Canvas>
    </div>
  )
}
