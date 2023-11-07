'use client'

import { Canvas } from '@react-three/fiber'

import { Diorama } from '@/components/Background/Diorama'

export default function ContactPage() {
  return (
    <main className="pt-12 pb-32 lg:pt-20 lg:pb-40">
      <div className="w-screen h-screen">
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
          <Diorama></Diorama>
        </Canvas>
      </div>
    </main>
  )
}
