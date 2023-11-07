'use client'

import { Canvas } from '@react-three/fiber'
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
      <div
        className={`absolute top-0 left-0 h-full w-full ${
          pathname === '/' ? 'opacity-0 pointer-events-none' : 'opacity-1'
        } transition-opacity`}
      >
        <div className="absolute top-0 left-0 w-full h-full backdrop-blur-lg"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-white opacity-50 transition-none"></div>
      </div>

      <Canvas
        className="touch-none -z-10"
        camera={{
          fov: 60,
          near: 0.1,
          far: 10,
          position: [3, 3, 3],
        }}
        shadows
        linear
      >
        <Diorama />
      </Canvas>
    </div>
  )
}
