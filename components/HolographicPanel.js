import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function HologramModel() {
  const { scene } = useGLTF('/models/hologram_panel.glb');
  return <primitive object={scene} scale={1.2} position={[0, -1, 0]} />;
}

export default function HolographicPanel({ title, content }) {
  return (
    <div className="relative bg-white bg-opacity-10 backdrop-blur-md p-4 rounded-lg mb-6 shadow-lg">
      {/* Hologram 3D Canvas */}
      <div className="h-64 w-full rounded-md overflow-hidden mb-4">
        <Canvas camera={{ position: [0, 0, 3] }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 2, 2]} intensity={1} />
          <HologramModel />
          <OrbitControls enableZoom={false} autoRotate />
        </Canvas>
      </div>

      {/* Title and Content Area */}
      <div className="bg-black bg-opacity-50 p-4 rounded-lg text-white">
        <h3 className="text-cyan-400 text-2xl font-semibold mb-2 hover:text-cyan-300 transition duration-300 ease-in-out">{title}</h3>
        <p className="text-white text-sm">{content}</p>
      </div>
    </div>
  );
}
