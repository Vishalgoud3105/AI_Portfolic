import ProjectCard3D from '@/components/ProjectCard3D';

export default function Projects() {
  return (
    <div
      className="min-h-screen relative text-white p-8"
      style={{
        backgroundImage: "url('/images/project-bg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark overlay with blur */}
      <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-md z-0" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold mb-10 text-cyan-400 text-center drop-shadow-lg">
          Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="transition-transform hover:-translate-y-2 hover:shadow-cyan-500/50 duration-300 rounded-2xl bg-white/10 backdrop-blur-lg p-4">
            <ProjectCard3D
              title="LeYOLO Object Detection"
              description="Scalable CNN-YOLO fusion for real-time, multimodal, small, and far object detection."
            />
          </div>

          <div className="transition-transform hover:-translate-y-2 hover:shadow-cyan-500/50 duration-300 rounded-2xl bg-white/10 backdrop-blur-lg p-4">
            <ProjectCard3D
              title="Fitness Assessment Vision"
              description="AI + OpenCV based workout tracking and posture analysis tool."
            />
          </div>

          <div className="transition-transform hover:-translate-y-2 hover:shadow-cyan-500/50 duration-300 rounded-2xl bg-white/10 backdrop-blur-lg p-4">
            <ProjectCard3D
              title="Satellite Imagery Segmentation"
              description="U-Net-based segmentation of satellite data to detect terrain and objects."
            />
          </div>

          <div className="transition-transform hover:-translate-y-2 hover:shadow-cyan-500/50 duration-300 rounded-2xl bg-white/10 backdrop-blur-lg p-4">
            <ProjectCard3D
              title="Handwritten Digit Recognition"
              description="CNN model trained on MNIST to classify digits with high accuracy."
            />
          </div>

          <div className="transition-transform hover:-translate-y-2 hover:shadow-cyan-500/50 duration-300 rounded-2xl bg-white/10 backdrop-blur-lg p-4">
            <ProjectCard3D
              title="FireTV Desktop Interface"
              description="Transform TV UI into a resizable Windows-like desktop with multitasking support."
            />
          </div>

          <div className="transition-transform hover:-translate-y-2 hover:shadow-cyan-500/50 duration-300 rounded-2xl bg-white/10 backdrop-blur-lg p-4">
            <ProjectCard3D
              title="AI Mirror Hub"
              description="Desktop mode, casting, video chat, and gaming experience from phone to TV."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
