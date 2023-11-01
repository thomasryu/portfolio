'use client'

import { Canvas } from '@react-three/fiber'
import { Metadata } from 'next'
import Link from 'next/link'

import { url } from '@/data'
import { contact } from '@/data/contact'

import { Container } from '@/components/Container'
import { Experience } from '@/components/Experience'

export default function ContactPage() {
  return (
    <main className="pt-12 pb-32 lg:pt-20 lg:pb-40">
      <div className="w-screen h-screen">
        <Canvas>
          <Experience />
        </Canvas>
      </div>
    </main>
  )
}
