import { Float, Html, PresentationControls, useGLTF } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { useRef } from 'react'
import { Mesh } from 'three'
import { GLTF } from 'three/examples/jsm/Addons.js'

type GLTFResult = GLTF & {
  nodes: {
    Cube: THREE.Mesh
  }
  materials: {}
}

export const Experience = () => {
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

  const background = useGLTF('/models/background.glb') as GLTFResult
  const { nodes, materials } = useGLTF('/models/phone.glb') as GLTFResult

  return (
    <>
      {/* <directionalLight position={[-4, 5, -2]} intensity={5} castShadow shadow-normalBias={0.04} /> */}
      <directionalLight
        position={[3, 8, -3]}
        intensity={4}
        castShadow
        shadow-normalBias={0.04}
        shadow-mapSize={[1024, 1024]}
        shadow-camera-near={1}
        shadow-camera-far={20}
        shadow-camera-top={2}
        shadow-camera-right={2}
        shadow-camera-bottom={-2}
        shadow-camera-left={-2}
      />
      <directionalLight
        position={[-3, 7, -2]}
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
      <ambientLight intensity={2.5} />
      {/* <Environment preset="city" /> */}
      {/* <Float> */}
      <group scale={2} position-y={-1}>
        <mesh
          castShadow
          receiveShadow
          geometry={background.nodes.floor.geometry}
          material={background.materials.white}
          rotation={[0, -1.571, 0]}
          scale={[0.1, 0.101, 0.101]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={background.nodes.table.geometry}
          material={background.materials.white}
          position={[0, 0.003, 0]}
          rotation={[-Math.PI, 0.425, -Math.PI]}
          scale={0.163}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={background.nodes['d6-1'].geometry}
          material={background.materials.white}
          position={[-0.276, 1.285, 0.132]}
          rotation={[0, -0.283, 0]}
          scale={0.018}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={background.nodes['d6-2'].geometry}
          material={background.materials.white}
          position={[-0.219, 1.285, 0.103]}
          rotation={[0, 0.155, 0]}
          scale={0.018}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={background.nodes.d20.geometry}
          material={background.materials.white}
          position={[-0.199, 1.293, 0.005]}
          rotation={[-1.39, 0.93, -0.454]}
          scale={0.035}
        />

        <mesh
          castShadow
          receiveShadow
          geometry={background.nodes['trash-can'].geometry}
          material={background.materials.white}
          position={[0.445, 0.427, -0.198]}
          rotation={[0, 1.252, 0]}
          scale={0.536}
        />

        <Float rotationIntensity={0.1} floatIntensity={0.1}>
          <group rotation-y={Math.PI / 4} position-y={0.1}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.phone.geometry}
              material={materials.phone}
              position={[0, 1.283, 0]}
              rotation-x={0.2}
              scale={0.684}
            />

            <group position-y={1.29} rotation-x={-Math.PI / 2 + 0.2}>
              {/* <rectAreaLight width={0.2} height={0.8} position-z={0.5} castShadow intensity={65} color={'#ffcc18'} /> */}
              <Html transform scale={0.021}>
                <iframe className="rounded-[55px] bg-white" seamless width={396} height={836} src="/"></iframe>
              </Html>
            </group>
          </group>
        </Float>
      </group>
    </>
  )
}
