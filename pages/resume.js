'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Switch } from '@/components/ui/switch'; // Optional: replace with any styled switch or make your own
import { Download } from 'lucide-react';

export default function Resume() {
  const [isCV, setIsCV] = useState(false);

  const filePath = isCV ? '/cv.pdf' : '/resume.pdf';
  const fileLabel = isCV ? 'CV' : 'Resume';

  return (
    <div
      className="min-h-screen relative text-white p-8"
      style={{
        backgroundImage: "url('/images/project-bg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-md z-0" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-5xl font-bold text-cyan-400 drop-shadow-md">
            {fileLabel}
          </h2>

          {/* Toggle Switch */}
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-300">Resume</span>
            <Switch
              checked={isCV}
              onCheckedChange={() => setIsCV(!isCV)}
              className="data-[state=checked]:bg-cyan-500"
            />
            <span className="text-sm text-gray-300">CV</span>
          </div>
        </div>

        {/* Download Button */}
        <div className="mb-6">
          <a
            href={filePath}
            download
            className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 transition px-5 py-2 rounded-lg font-semibold shadow-md"
          >
            <Download className="w-5 h-5" />
            Download {fileLabel}
          </a>
        </div>

        {/* Scroll Reveal with Fallback */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="w-full h-[85vh] rounded-xl overflow-hidden shadow-2xl border border-cyan-500/20 bg-black bg-opacity-40"
        >
          <iframe
            src={filePath}
            className="w-full h-full"
            title={fileLabel}
            onError={(e) => {
              e.target.outerHTML =
                '<div class="p-8 text-center text-red-500 font-semibold">Failed to load PDF. Please try downloading it instead.</div>';
            }}
          />
        </motion.div>
      </div>
    </div>
  );
}
