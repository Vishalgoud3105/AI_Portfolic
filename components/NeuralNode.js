export default function NeuralNode({ skill, proficiency }) {
    return (
      <div
        className="relative p-4 rounded-xl shadow-lg border border-cyan-500 hover:shadow-cyan-500/50 transition-transform transform hover:scale-105 ease-in-out duration-300"
        style={{
          backgroundImage: "url('/images/circuit-board-bg.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="bg-black bg-opacity-70 backdrop-blur-sm p-4 rounded-lg">
          <h4 className="text-cyan-400 text-xl font-bold mb-1">{skill}</h4>
          <p className="text-white text-sm">{proficiency}</p>
        </div>
      </div>
    );
  }
  