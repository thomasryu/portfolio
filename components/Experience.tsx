import { useFrame } from '@react-three/fiber'

import { useRef } from 'react'

import type { BoxGeometryProps, GroupProps } from '@react-three/fiber'

type Props = {}

export const Experience = (props: Props) => {
  const groupRef = useRef<GroupProps>(null)
  const cubeRef = useRef<BoxGeometryProps>(null)

  useFrame((state, delta) => {
    if (cubeRef.current) {
      cubeRef.current.rotation.y += delta
    }

    if (groupRef.current) {
      groupRef.current.rotation.y += delta
    }
  })

  return (
    <>
      <group ref={groupRef}>
        <mesh position-x={-2}>
          <sphereGeometry />
          <meshBasicMaterial color='orange' />
        </mesh>

        <mesh
          rotation-y={Math.PI * 0.25}
          position-x={2}
          scale={1.5}
          ref={cubeRef}
        >
          <boxGeometry />
          <meshBasicMaterial color='mediumpurple' />
        </mesh>
      </group>

      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshBasicMaterial color='greenyellow' />
      </mesh>
    </>
  )
}
