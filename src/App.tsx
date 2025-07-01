import React from "react";
import { TrendingUp, Info, ChevronDown } from "lucide-react";

interface OptimizationCard {
  title: string;
  description: string;
  percentage: number;
  status: "good" | "warning" | "poor";
}

// Progress Meter Component
interface ProgressMeterProps {
  percentage: number;
}

const ProgressMeter: React.FC<ProgressMeterProps> = ({ percentage }) => {
  // Debug logging
  console.log("ProgressMeter percentage:", percentage);
  console.log("Calculated left position:", `${percentage}%`);

  const getOptimizationLevel = (score: number) => {
    if (score <= 60)
      return {
        level: "Less",
        color: "from-red-400 to-red-600",
        textColor: "text-red-600",
        bgColor: "bg-red-50",
        borderColor: "border-red-200",
        glowColor: "shadow-red-200",
      };
    if (score <= 80)
      return {
        level: "Somewhat",
        color: "from-yellow-400 to-yellow-600",
        textColor: "text-yellow-600",
        bgColor: "bg-yellow-50",
        borderColor: "border-yellow-200",
        glowColor: "shadow-yellow-200",
      };
    return {
      level: "Well",
      color: "from-green-400 to-green-600",
      textColor: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      glowColor: "shadow-green-200",
    };
  };

  const { level, color, textColor, bgColor, borderColor, glowColor } =
    getOptimizationLevel(percentage);

  return (
    <div
      className={`${bgColor} border ${borderColor} rounded-xl p-6 shadow-sm animate-slide-up`}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div
            className={`w-3 h-3 rounded-full bg-gradient-to-r ${color} shadow-sm animate-pulse-glow`}
          ></div>
          <span className="text-lg font-semibold text-gray-800">
            Optimization Level
          </span>
        </div>
        <div
          className={`px-4 py-2 rounded-full ${textColor} bg-white border-2 font-bold text-sm shadow-sm animate-bounce-in`}
        >
          {level}
        </div>
      </div>

      {/* Debug info */}
      <div className="text-xs text-gray-500 mb-2">
        Debug: Percentage = {percentage}%, Position = {percentage}%
      </div>

      <div className="relative">
        {/* Background track */}
        <div className="w-full progress-track rounded-full h-4 shadow-inner relative">
          {/* Progress fill with gradient */}
          <div
            className={`h-4 rounded-full bg-gradient-to-r ${color} shadow-lg transition-all duration-1000 ease-out relative overflow-hidden progress-fill ${glowColor}`}
            style={{ width: `${Math.min(percentage, 100)}%` }}
          >
            {/* Enhanced shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
          </div>

          {/* Percentage indicator positioned relative to the progress bar */}
          <div
            className="absolute -top-8 transition-all duration-1000 ease-out progress-indicator z-10"
            style={{
              left: `${Math.min(percentage, 100)}%`,
              transform: "translateX(-50%)",
            }}
          >
            <div className="bg-gray-800 text-white text-xs px-2 py-1 rounded shadow-lg animate-bounce-in whitespace-nowrap">
              {percentage}%
            </div>
            <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800 mx-auto"></div>
          </div>

          {/* Position marker line */}
          <div
            className="absolute top-0 w-0.5 h-4 bg-red-500 opacity-60 transition-all duration-1000 ease-out z-5"
            style={{
              left: `${Math.min(percentage, 100)}%`,
              transform: "translateX(-50%)",
            }}
          ></div>
        </div>
      </div>

      {/* Scale markers */}
      <div className="flex justify-between text-xs text-gray-500 mt-3 px-1">
        <div className="flex flex-col items-center">
          <div className="w-1 h-2 bg-gray-300 rounded-full mb-1"></div>
          <span>0%</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-1 h-2 bg-gray-300 rounded-full mb-1"></div>
          <span>60%</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-1 h-2 bg-gray-300 rounded-full mb-1"></div>
          <span>80%</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-1 h-2 bg-gray-300 rounded-full mb-1"></div>
          <span>100%</span>
        </div>
      </div>

      {/* Level descriptions */}
      <div className="grid grid-cols-3 gap-4 mt-4 text-xs">
        <div className="text-center">
          <div className="w-2 h-2 bg-red-500 rounded-full mx-auto mb-1 animate-pulse"></div>
          <span className="text-gray-600">Less</span>
        </div>
        <div className="text-center">
          <div className="w-2 h-2 bg-yellow-500 rounded-full mx-auto mb-1 animate-pulse"></div>
          <span className="text-gray-600">Somewhat</span>
        </div>
        <div className="text-center">
          <div className="w-2 h-2 bg-green-500 rounded-full mx-auto mb-1 animate-pulse"></div>
          <span className="text-gray-600">Well</span>
        </div>
      </div>
    </div>
  );
};

const optimizationCards: OptimizationCard[] = [
  {
    title: "Peak vs Off-Peak usage",
    description: "How much energy you use during peak pricing hours",
    percentage: 54,
    status: "poor",
  },
  {
    title: "Weather vs Thermostat",
    description:
      "Your AC had to work harder to keep your home cooled, as weather heated up.",
    percentage: 63,
    status: "warning",
  },
  {
    title: "Outlier Days",
    description: "How often your energy use spikes unexpectedly",
    percentage: 87,
    status: "good",
  },
  {
    title: "Baseload",
    description: "Energy used continuously by your always-on devices",
    percentage: 46,
    status: "poor",
  },
  {
    title: "Appliance Efficiency",
    description: "How efficiently your major appliances use energy",
    percentage: 76,
    status: "warning",
  },
];

function App() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "good":
        return "text-black";
      case "warning":
        return "text-gray-600";
      case "poor":
        return "text-gray-800";
      default:
        return "text-black";
    }
  };

  const getInfoIconColor = (status: string) => {
    switch (status) {
      case "good":
        return "text-black border-black";
      case "warning":
        return "text-gray-600 border-gray-600";
      case "poor":
        return "text-gray-800 border-gray-800";
      default:
        return "text-black border-black";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-2">
                <TrendingUp className="w-8 h-8 text-black" />
              </div>
              <h1 className="text-3xl font-bold text-black">
                Overall Optimization
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-6xl font-bold text-black">49%</div>
              <div className="w-6 h-6 rounded-full border-2 border-black flex items-center justify-center">
                <Info className="w-4 h-4 text-black" />
              </div>
            </div>
          </div>

          <div className="mt-6 max-w-3xl">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              See how well you're optimizing energy use in areas you can
              control. These 5 categories offer the biggest impact on your bill:
            </p>

            {/* Progress Meter */}
            <ProgressMeter percentage={49} />
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {optimizationCards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-black">{card.title}</h2>
                <div
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${getInfoIconColor(
                    card.status
                  )}`}
                >
                  <Info className="w-4 h-4" />
                </div>
              </div>

              <div className="mb-6">
                <p className="text-gray-700 text-base leading-relaxed">
                  {card.description}
                </p>
              </div>

              <div className="flex items-center justify-between">
                <div
                  className={`text-5xl font-bold ${getStatusColor(
                    card.status
                  )}`}
                >
                  {card.percentage}%
                </div>
                <ChevronDown className="w-6 h-6 text-gray-400 hover:text-gray-600 cursor-pointer transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
