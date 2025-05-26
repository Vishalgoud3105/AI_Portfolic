import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { OrbitControls } from '@react-three/drei'; // Import OrbitControls for camera interactions
import AIHeadModel from '@/components/AIHeadModel';

export default function Home() {
  return (
    <div className="h-screen w-full relative">
      <Canvas camera={{ position: [0, 0, 5] }}>
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 2]} intensity={1} />
        <spotLight position={[10, 10, 10]} angle={0.15} intensity={1} />
        
        {/* OrbitControls for interactive 3D experience */}
        <OrbitControls />

        {/* Suspense wrapper for loading 3D models */}
        <Suspense fallback={null}>
          <AIHeadModel />
        </Suspense>
      </Canvas>

      {/* Title overlay */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-5xl text-purple-400 drop-shadow-lg">AI Awakens</h1>
      </div>
    </div>
  );
}
