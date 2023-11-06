'use client'

import { Canvas } from '@react-three/fiber'

import { Experience } from '@/components/Experience'

export default function ContactPage() {
  return (
    <main className="pt-12 pb-32 lg:pt-20 lg:pb-40">
      <div className="w-screen h-screen">
        <Canvas
          camera={{
            fov: 45,
            near: 0.1,
            far: 20,
            position: [4, 6, 4],
          }}
          shadows
        >
          <Experience></Experience>
        </Canvas>
      </div>
    </main>
  )
}
