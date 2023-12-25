'use client'

import { Canvas } from '@react-three/fiber'
import { useEffect, useRef, useState } from 'react'

import { BlurOverlay } from './components/BlurOverlay'
import { Diorama } from './components/Diorama'

export const Background = () => {
  const [height, setHeight] = useState('100dvh')
  const canvasRef = useRef<HTMLDivElement>(null)

  // Work around for the issue with the <Html> from Drei, where
  // it is positioned incorrectly on iOS, on canvases with a odd number height
  // more info here: https://github.com/pmndrs/drei/issues/720
  useEffect(() => {
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
      className="fixed bottom-0 left-0 w-screen -z-10 bg-gradient-to-t from-light-gray to-50% to-transparent"
      style={{ height }}
      ref={canvasRef}
    >
      <BlurOverlay />

      <Canvas
        className="touch-none -z-10"
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
