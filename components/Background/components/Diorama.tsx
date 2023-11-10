import { Float, Html, PresentationControls, useGLTF, useMatcapTexture } from '@react-three/drei'
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
  const { camera } = useThree()
  const groupRef = useRef<Group>(null)

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.lookAt(camera.position)
    }

    // state.camera.position.x = damp(state.camera.position.x, 3 + Math.sin(state.pointer.x), 0.4, delta)
    // state.camera.position.y = damp(state.camera.position.y, 3 + state.pointer.y / 2, 0.2, delta)
    // state.camera.position.z = damp(state.camera.position.z, 3 + Math.cos(state.pointer.x), 0.4, delta)
    // state.camera.lookAt(0, 0, 0)
  })

  const router = useRouter()
  const { nodes } = useGLTF('/models/diorama.glb') as GLTFResult
  const [matcapTexture] = useMatcapTexture('7B5254_E9DCC7_B19986_C8AC91', 256)

  return (
    <>
      <Lighting />

      <fog attach="fog" args={['#f9fafb', 7, 9.2]} />

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
            position={[0.302, 1.469, -0.242]}
            rotation={[1.022, 1.349, -1.39]}
            scale={0.085}
          >
            <meshStandardMaterial color="orange" roughness={0.25} metalness={0.5} />
          </mesh>
          <Html position={[0.28, 1.65, -0.25]} center>
            <Button color="gray" router={router} href="/gallery"></Button>
          </Html>

          <Float rotationIntensity={0.15} floatIntensity={0.3}>
            <group rotation={[0.2, Math.PI / 8, 0]} position={[0, 1.43, 0]} scale={0.684}>
              <mesh castShadow receiveShadow geometry={nodes.phone.geometry}>
                <meshStandardMaterial color="orange" roughness={0.25} metalness={0.5} />
              </mesh>

              <Html transform scale={0.03} position-y={0.01} rotation-x={-Math.PI / 2}>
                <iframe className="rounded-[55px] bg-white" seamless width={396} height={836} src="/html"></iframe>
              </Html>
            </group>
          </Float>

          <Html position={[0.17, 1.35, 0.3]} center>
            <Button router={router} href="/about" />
          </Html>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.background.geometry}
            position={[-0.31, 1.272, 0.033]}
            rotation={[0, 0.312, 0]}
            scale={0.429}
          >
            <meshStandardMaterial color="white" roughness={0.25} metalness={0.5} />
          </mesh>
        </group>
      </PresentationControls>
    </>
  )
}
