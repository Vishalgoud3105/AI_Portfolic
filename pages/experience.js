import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei'; // useGLTF to load 3D model
import TimelinePanel from '@/components/TimelinePanel';

// Function to load the GLTF model
function RobotModel() {
  const { scene } = useGLTF('/models/robot-model.glb'); // Load the 3D model from the specified path

  return <primitive object={scene} scale={2} position={[0, -1, 0]} />;
}

export default function Experience() {
  return (
    <div
      className="min-h-screen relative bg-gray-900 text-white p-8"
      style={{
        backgroundImage: "url('/images/corridor-timeline-bg.jpg')", // Experience Corridor Background
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-0" />

      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Robot 3D Model */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-cyan-400 mb-4">Robot Experience Overview</h3>
          {/* 3D Model Section */}
          <div className="w-full h-96 bg-gray-800 rounded-lg shadow-lg mb-4">
            <Canvas camera={{ position: [5, 5, 5], fov: 50 }}>
              <ambientLight intensity={0.5} />
              <spotLight position={[10, 10, 10]} angle={0.15} />
              <OrbitControls />
              {/* Insert your 3D model here */}
              <RobotModel /> {/* This will render your 3D model */}
            </Canvas>
          </div>
        </div>

        {/* Static Robot Image (Fallback) */}
        <div className="hidden lg:block">
          <img
            src="/models/robot-or-android.jpg" // Static image as fallback
            alt="Robot Experience"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Timeline Panels */}
        <h2 className="text-4xl mb-6 text-cyan-400">Experience</h2>
        <TimelinePanel title="Job Title 1" timeframe="2020 - 2021" description="Description of job 1." />
        <TimelinePanel title="Job Title 2" timeframe="2021 - Present" description="Description of job 2." />
        {/* Add more TimelinePanel components as needed */}
      </div>
    </div>
  );
}
