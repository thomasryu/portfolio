import { Float, Html, PresentationControls, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRouter } from 'next/navigation'
import { useMemo } from 'react'
import { MeshStandardMaterial } from 'three'
import type { GLTF } from 'three/examples/jsm/Addons.js'

import { Button } from './Button'
import { Lighting } from './Lighting'

type GLTFResult = GLTF & {
  nodes: {
    [key: string]: THREE.Mesh
  }
  materials: {
    [key: string]: THREE.Material
  }
}

export const Diorama = () => {
  // const { camera } = useThree()
  // const groupRef = useRef<Group>(null)

  const router = useRouter()
  const { nodes } = useGLTF('/models/diorama.glb') as GLTFResult

  const whiteMaterial = useMemo(() => new MeshStandardMaterial({ color: 'white', roughness: 0.25, metalness: 0.5 }), [])
  const orangeMaterial = useMemo(
    () => new MeshStandardMaterial({ color: 'orange', roughness: 0.25, metalness: 0.5 }),
    [],
  )

  useMemo(() => {
    orangeMaterial.transparent = true
    whiteMaterial.transparent = true
    orangeMaterial.opacity = 0
    whiteMaterial.opacity = 0
  }, [whiteMaterial, orangeMaterial])

  useFrame((state, delta) => {
    if (whiteMaterial.opacity < 1) {
      whiteMaterial.opacity += delta * 4
    }
    if (orangeMaterial.opacity < 1) {
      orangeMaterial.opacity += delta * 4
    }

    // if (groupRef.current) {
    //   groupRef.current.lookAt(camera.position)
    // }
    // state.camera.position.x = damp(state.camera.position.x, 3 + Math.sin(state.pointer.x), 0.4, delta)
    // state.camera.position.y = damp(state.camera.position.y, 3 + state.pointer.y / 2, 0.2, delta)
    // state.camera.position.z = damp(state.camera.position.z, 3 + Math.cos(state.pointer.x), 0.4, delta)
    // state.camera.lookAt(0, 0, 0)
  })

  return (
    <>
      <Lighting />

      <fog attach="fog" args={['#f9fafb', 7, 9.2]} />

      {/* <group ref={groupRef}>
        <Html position-y={1.55} distanceFactor={2} transform center>
          <Title />
        </Html>
      </group> */}

      <PresentationControls
        global
        polar={[-0.1, 0.1]}
        azimuth={[-0.2, 0.2]}
        config={{ mass: 2, tension: 400 }}
        snap={{ mass: 2, tension: 400 }}
        cursor={false}
      >
        <group scale={2} position-y={-2.7}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.bag.geometry}
            material={orangeMaterial}
            position={[-0.656, 0.501, 0.366]}
            rotation={[0, 0.593, 0]}
            scale={0.566}
          ></mesh>
          <Html position={[-0.1, 0.6, 0.45]} center>
            <Button router={router} href="/work" />
          </Html>

          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pencil.geometry}
            material={orangeMaterial}
            position={[0.302, 1.469, -0.242]}
            rotation={[1.022, 1.349, -1.39]}
            scale={0.085}
          ></mesh>
          <Html position={[0.28, 1.65, -0.25]} center>
            <Button color="gray" router={router} href="/gallery"></Button>
          </Html>

          <Float rotationIntensity={0.15} floatIntensity={0.3}>
            <group rotation={[0.2, Math.PI / 8, 0]} position={[0, 1.43, 0]} scale={0.684}>
              <mesh castShadow receiveShadow geometry={nodes.phone.geometry} material={orangeMaterial}></mesh>

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
            material={whiteMaterial}
            position={[0.512, 1.276, -0.451]}
            rotation={[0.003, -0.003, -0.027]}
          ></mesh>
        </group>
      </PresentationControls>
    </>
  )
}
