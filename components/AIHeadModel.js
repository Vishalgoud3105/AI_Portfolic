'use client';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { PointLight } from '@react-three/fiber';

export default function AIHeadModel(props) {
  const modelRef = useRef();
  const { scene } = useGLTF('/models/ai_brain.glb');

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.002; // Slow rotation for a futuristic feel
    }
  });

  return (
    <>
      {/* Ambient light for overall illumination */}
      <ambientLight intensity={0.5} />

      {/* Point light for a glowing effect */}
      <PointLight
        position={[0, 3, 0]}
        intensity={0.8}
        color="cyan"
        decay={2}
        distance={10}
      />

      {/* 3D model */}
      <primitive
        ref={modelRef}
        object={scene}
        scale={props.scale || 1.5}
        position={props.position || [0, -1, 0]}
        rotation={props.rotation || [0, 0, 0]}
      />
    </>
  );
}
