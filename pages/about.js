import HolographicPanel from '@/components/HolographicPanel';

export default function About() {
  return (
    <div
      className="min-h-screen text-white p-8"
      style={{
        backgroundImage: "url('/images/futuristic-lab.jpg')", // 🔁 Replace with your actual image name
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="bg-black bg-opacity-80 min-h-screen p-8 rounded-lg shadow-xl">
        <h2 className="text-4xl text-cyan-400 font-bold mb-6 animate-on-scroll">About Me</h2>
        <div className="space-y-6">
          <HolographicPanel title="Background" content="Your background information here." />
          <HolographicPanel title="Skills" content="Your skills information here." />
          <HolographicPanel title="Personal Journey" content="Your personal journey here." />
        </div>
      </div>
    </div>
  );
}
