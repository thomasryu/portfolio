'use client'

import { Canvas } from '@react-three/fiber'

import { Geometry } from './Geometry'

type Props = {
  className?: string
}

export const Background = (props: Props) => (
  <div
    className={`fixed top-1/2 left-1/2 w-screen max-w-2xl lg:max-w-3xl aspect-square
      -translate-x-1/2 -translate-y-1/2 -z-10 opacity-10 ${props.className}`}
  >
    <Canvas>
      <Geometry />
    </Canvas>
  </div>
)
