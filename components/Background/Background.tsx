'use client'

import { Canvas } from '@react-three/fiber'

import { Diorama } from './Diorama'

type Props = {
  className?: string
}

export const Background = (props: Props) => (
  <div className={`fixed top-0 left-0 bottom-0 right-0 -z-10 ${props.className}`}>
    <Canvas
      className="touch-none"
      camera={{
        fov: 90,
        near: 0.1,
        far: 8,
        position: [2, 2, 2],
      }}
      shadows
    >
      <Diorama />
    </Canvas>
  </div>
)
