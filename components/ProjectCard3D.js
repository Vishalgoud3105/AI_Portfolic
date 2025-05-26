import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function ProjectModel() {
  const { scene } = useGLTF('/models/project_model.glb'); // Add a relevant model here
  return <primitive object={scene} scale={1.2} position={[0, -1, 0]} />;
}

export default function ProjectCard3D({ title, description }) {
  return (
    <div className="bg-white bg-opacity-10 backdrop-blur-md p-4 rounded-lg shadow-lg hover:shadow-cyan-400 hover:scale-105 transition-all duration-300 ease-in-out">
      <div className="h-64 w-full rounded-md overflow-hidden mb-4">
        <Canvas camera={{ position: [0, 0, 3] }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 2, 2]} intensity={1} />
          <ProjectModel />
          <OrbitControls enableZoom={false} autoRotate />
        </Canvas>
      </div>

      <h3 className="text-2xl text-cyan-400 mb-2">{title}</h3>
      <p className="text-white text-sm">{description}</p>
    </div>
  );
}
