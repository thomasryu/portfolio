'use client'

import { Canvas } from '@react-three/fiber'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { NoToneMapping } from 'three'

import { Diorama } from './Diorama'

type Props = {
  className?: string
}

export const Background = (props: Props) => {
  const pathname = usePathname()
  const isHome = pathname == '/'

  return (
    <div className={`fixed top-0 left-0 w-screen h-screen -z-10 ${props.className}`}>
      {/* Leaving a single transition of opacity on the wrapper was not possible for some reason,
          the blur effect did not transition when done that way (adding one for each was necessary) */}
      <div className={`absolute top-0 left-0 h-full w-full ${isHome ? 'pointer-events-none' : ''}`} aria-hidden="true">
        <div
          className={`absolute top-0 left-0 w-full h-full backdrop-blur-lg transition-opacity duration-500 ${
            isHome ? 'opacity-0' : 'opacity-1'
          }`}
        />
        <div
          className={`absolute top-0 left-0 w-full h-full bg-white transition-opacity duration-500 ${
            isHome ? 'opacity-0' : 'opacity-75'
          }`}
        />
      </div>

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
