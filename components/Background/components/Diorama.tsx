import { Float, Html, PresentationControls, useGLTF } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { useRouter } from 'next/navigation'
import { useRef } from 'react'
import { Group } from 'three'
import type { GLTF } from 'three/examples/jsm/Addons.js'

import { Button } from './Button'
import { Lighting } from './Lighting'
import { Title } from './Title'

type GLTFResult = GLTF & {
  nodes: {
    [key: string]: THREE.Mesh
  }
  materials: {
    [key: string]: THREE.Material
  }
}

export const Diorama = () => {
  const { camera, gl } = useThree()
  const groupRef = useRef<Group>(null)

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.lookAt(camera.position)
    }
  })

  const router = useRouter()
  const { nodes } = useGLTF('/models/model.glb') as GLTFResult

  return (
    <>
      <Lighting />

      <group ref={groupRef}>
        <Html position-y={1.55} distanceFactor={2} transform center>
          <Title />
        </Html>
      </group>

      <PresentationControls
        global
        polar={[-0.1, 0.1]}
        azimuth={[-0.2, 0.2]}
        config={{ mass: 2, tension: 400 }}
        snap={{ mass: 2, tension: 400 }}
        cursor={false}
      >
        <group scale={2} position-y={-2.6}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.bag.geometry}
            position={[-0.656, 0.501, 0.366]}
            rotation={[0, 0.593, 0]}
            scale={0.566}
          >
            <meshStandardMaterial color="orange" roughness={0.25} metalness={0.5} />
          </mesh>
          <Html position={[-0.1, 0.6, 0.45]} center>
            <Button router={router} href="/work" />
          </Html>

          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pencil.geometry}
            position={[0.31, 1.466, -0.237]}
            rotation={[0.295, 1.025, -0.619]}
            scale={0.085}
          >
            <meshStandardMaterial color="orange" roughness={0.25} metalness={0.5} />
          </mesh>
          <Html position={[0.3, 1.7, -0.2]} center>
            <Button color="gray" router={router} href="/gallery"></Button>
          </Html>

          <Float rotationIntensity={0.15} floatIntensity={0.3}>
            <group rotation-y={Math.PI / 8} position-y={0.1}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.phone.geometry}
                position={[0, 1.283, 0]}
                rotation-x={0.2}
                scale={0.684}
              >
                <meshStandardMaterial color="orange" roughness={0.25} metalness={0.5} />
              </mesh>
              <Html transform scale={0.021} position-y={1.29} rotation-x={-Math.PI / 2 + 0.2}>
                <iframe className="rounded-[55px] bg-white" seamless width={396} height={836} src="/html"></iframe>
              </Html>
            </group>
          </Float>
          <Html position={[0.22, 1.3, 0.34]} center>
            <Button router={router} href="/about" />
          </Html>

          <mesh
            castShadow
            receiveShadow
            geometry={nodes.background.geometry}
            position={[-0.264, 1.285, 0.108]}
            rotation={[0, 0.351, 0]}
            scale={0.018}
          >
            <meshStandardMaterial color="white" roughness={0.25} metalness={0.5} />
          </mesh>
        </group>
      </PresentationControls>
    </>
  )
}