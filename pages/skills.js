import { motion } from 'framer-motion';
import { useState } from 'react';

export default function NeuralNode({ skill, proficiency }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative flex justify-center items-center p-6 w-48 h-48 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Pulsing Ring Animation */}
      <div
        className={`absolute inset-0 border-2 rounded-full ring-opacity-50 ${
          isHovered ? 'animate-pulse' : ''
        } border-white`}
      ></div>

      {/* Synaptic Dots (Floating) */}
      <motion.div
        className="absolute w-2 h-2 bg-white rounded-full top-2 left-2"
        animate={{
          x: [0, 10, 0], // simulate floating effect
          y: [0, 10, 0],
        }}
        transition={{ repeat: Infinity, duration: 2, ease: 'ease-in-out' }}
      />
      <motion.div
        className="absolute w-2 h-2 bg-white rounded-full top-10 left-10"
        animate={{
          x: [0, -10, 0],
          y: [0, -10, 0],
        }}
        transition={{ repeat: Infinity, duration: 2, ease: 'ease-in-out' }}
      />

      {/* Radial Dendrite Lines */}
      <div className="absolute w-full h-full rounded-full border-t-2 border-white opacity-40"></div>
      <div className="absolute w-full h-full rounded-full border-l-2 border-white opacity-40"></div>

      {/* Skill and Proficiency Text */}
      <motion.div
        className="relative text-center text-white z-10"
        animate={{
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1.2 : 1,
        }}
        transition={{ duration: 0.4 }}
      >
        <h4 className="text-xl font-semibold">{skill}</h4>
        <p className="text-sm">{proficiency}</p>
      </motion.div>
    </motion.div>
  );
}
