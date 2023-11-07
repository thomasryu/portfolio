'use client'

import { Canvas } from '@react-three/fiber'

import { BlurOverlay } from './components/BlurOverlay'
import { Diorama } from './components/Diorama'

export const Background = () => {
  return (
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-screen min-h-[800px] h-screen -z-10">
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
