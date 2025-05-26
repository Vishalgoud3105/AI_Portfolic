export default function TimelinePanel({ title, timeframe, description, isCompleted }) {
    return (
      <div
        className={`border-l-4 pl-4 mb-4 ${isCompleted ? 'border-green-500' : 'border-purple-500'} 
                    hover:bg-gray-800 transition duration-300 ease-in-out transform hover:scale-105`}
      >
        {/* Timeline Icon */}
        <div className="relative flex items-center mb-2">
          <div className="absolute left-[-12px] top-[-2px] w-4 h-4 rounded-full bg-purple-500 border-2 border-white"></div>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
        </div>
  
        {/* Timeframe */}
        <span className="text-sm text-gray-400">{timeframe}</span>
  
        {/* Description */}
        <p className="text-white mt-2">{description}</p>
      </div>
    );
  }
  