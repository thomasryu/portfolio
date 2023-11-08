import { Environment } from '@react-three/drei'

export const Lighting = () => (
  <>
    <Environment preset="dawn" />

    <directionalLight position={[3, 8, -3]} intensity={4} castShadow shadow-normalBias={0.04} shadow-mapSize={1024}>
      <orthographicCamera attach="shadow-camera" args={[-10, 10, -10, 10, 0.1, 50]} />
    </directionalLight>
    <directionalLight position={[3, 2, 2]} intensity={2} castShadow shadow-normalBias={0.04} shadow-mapSize={1024}>
      <orthographicCamera attach="shadow-camera" args={[-10, 10, -10, 10, 0.1, 50]} />
    </directionalLight>
    <ambientLight intensity={1} />
  </>
)
