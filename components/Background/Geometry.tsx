'use client'

import { useFrame } from '@react-three/fiber'
import type { BoxGeometryProps, GroupProps } from '@react-three/fiber'
import { useRef } from 'react'

type Props = {
  className?: string
}

export const Geometry = (props: Props) => {
  const groupRef = useRef<GroupProps>(null)
  const meshRef = useRef<BoxGeometryProps>(null)

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta
      meshRef.current.rotation.z -= delta
    }
    if (groupRef.current) {
    }
  })

  return (
    <>
      <directionalLight position={[2, 2, 3]} intensity={2} color="rgb(250, 204, 21)" />
      <ambientLight intensity={1} />

      <group ref={groupRef}>
        <mesh ref={meshRef} scale={2}>
          <dodecahedronGeometry />
          <meshStandardMaterial color="rgb(250, 204, 21)" />
        </mesh>
      </group>
    </>
  )
}
