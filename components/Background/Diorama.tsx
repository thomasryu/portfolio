import { Float, Html, PresentationControls, useGLTF } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import Link from 'next/link'
import { useRef } from 'react'
import { Mesh } from 'three'
import type { GLTF } from 'three/examples/jsm/Addons.js'

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

  const cubeRef = useRef<Mesh>(null)
  const groupRef = useRef(null)

  useFrame((state, delta) => {
    // const angle = state.clock.elapsedTime
    // state.camera.position.x = Math.sin(angle) * 8
    // state.camera.position.z = Math.cos(angle) * 8
    // state.camera.lookAt(0, 0, 0)
    if (cubeRef.current) {
      cubeRef.current.rotation.y += delta
    }
    // groupRef.current.rotation.y += delta
  })

  const { nodes, materials } = useGLTF('/models/model.glb') as GLTFResult

  return (
    <>
      <directionalLight
        position={[3, 8, -3]}
        intensity={4}
        castShadow
        shadow-normalBias={0.04}
        shadow-mapSize={[1024, 1024]}
        shadow-camera-near={1}
        shadow-camera-far={10}
        shadow-camera-top={2}
        shadow-camera-right={2}
        shadow-camera-bottom={-2}
        shadow-camera-left={-2}
      />
      <directionalLight
        position={[3, 2, 2]}
        intensity={2}
        castShadow
        shadow-normalBias={0.04}
        shadow-mapSize={[1024, 1024]}
        shadow-camera-near={1}
        shadow-camera-far={10}
        shadow-camera-top={2}
        shadow-camera-right={2}
        shadow-camera-bottom={-2}
        shadow-camera-left={-2}
      />

      <ambientLight intensity={4} />
      <PresentationControls
        global
        polar={[-0.1, 0.1]}
        azimuth={[-0.2, 0.2]}
        config={{ mass: 2, tension: 400 }}
        snap={{ mass: 2, tension: 400 }}
      >
        <group scale={2} position-y={-2.5}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.bag.geometry}
            material={materials.yellow}
            position={[-0.656, 0.501, 0.366]}
            rotation={[0, 0.593, 0]}
            scale={0.566}
          />
          <Html position={[-0.1, 0.6, 0.45]} center>
            <Link
              className="group flex justify-center items-center w-10 h-10 rounded-full border-2 border-white"
              href="/work"
            >
              <div
                className="w-5 h-5 group-hover:scale-125 transition-transform rounded-full bg-white"
                aria-hidden="true"
              />
            </Link>
          </Html>

          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pencil.geometry}
            material={materials.yellow}
            position={[0.31, 1.466, -0.237]}
            rotation={[0.295, 1.025, -0.619]}
            scale={0.085}
          />
          <Html position={[0.3, 1.7, -0.2]} center>
            <Link
              className="group flex justify-center items-center w-10 h-10 rounded-full border-2 border-light-gray"
              href="/gallery"
            >
              <div
                className="w-5 h-5 group-hover:scale-125 transition-transform rounded-full bg-light-gray"
                aria-hidden="true"
              />
            </Link>
          </Html>

          <Float rotationIntensity={0.1} floatIntensity={0.2}>
            <group rotation-y={Math.PI / 8} position-y={0.1}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.phone.geometry}
                material={materials.yellow}
                position={[0, 1.283, 0]}
                rotation-x={0.2}
                scale={0.684}
              />
              <group position-y={1.29} rotation-x={-Math.PI / 2 + 0.2}>
                <Html transform scale={0.021}>
                  <iframe className="rounded-[55px] bg-white" seamless width={396} height={836} src="/html"></iframe>
                </Html>
              </group>
            </group>
          </Float>
          <Html position={[0.22, 1.3, 0.34]} center>
            <Link
              className="group flex justify-center items-center w-10 h-10 rounded-full border-2 border-white "
              href="/about"
            >
              <div
                className="w-5 h-5 group-hover:scale-125 transition-transform rounded-full bg-white"
                aria-hidden="true"
              />
            </Link>
          </Html>

          <mesh
            castShadow
            receiveShadow
            geometry={nodes.background.geometry}
            material={materials.white}
            position={[-0.264, 1.285, 0.108]}
            rotation={[0, 0.351, 0]}
            scale={0.018}
          />
        </group>
      </PresentationControls>
    </>
  )
}
