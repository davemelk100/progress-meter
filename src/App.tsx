import React from "react";
import { TrendingUp, Info, ChevronDown } from "lucide-react";

interface OptimizationCard {
  title: string;
  description: string;
  percentage: number;
  status: "good" | "warning" | "poor";
}

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
  const percentage = 49; // Current optimization percentage

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

            {/* Full-width Progress Meter */}
            <div className="w-full bg-gray-100 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-gray-700">
                  Optimization Level
                </span>
                <span className="text-sm font-semibold text-red-600">Less</span>
              </div>

              {/* Progress Bar with Three Sections */}
              <div className="relative w-full h-6 bg-white rounded-full shadow-inner overflow-hidden">
                {/* Section 1: Less (0-60%) */}
                <div className="absolute left-0 top-0 w-1/3 h-full bg-red-500"></div>

                {/* Section 2: Somewhat (61-80%) */}
                <div className="absolute left-1/3 top-0 w-1/3 h-full bg-yellow-500"></div>

                {/* Section 3: Well (81-100%) */}
                <div className="absolute left-2/3 top-0 w-1/3 h-full bg-green-500"></div>

                {/* Current Position Indicator */}
                <div
                  className="absolute top-0 w-1 h-full bg-black shadow-lg transition-all duration-1000 ease-out"
                  style={{ left: `${Math.min(percentage, 100)}%` }}
                ></div>
              </div>

              {/* Section Labels */}
              <div className="flex justify-between mt-2 text-xs text-gray-600">
                <div className="text-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full mx-auto mb-1"></div>
                  <span>Less</span>
                  <div className="text-gray-400">0-60%</div>
                </div>
                <div className="text-center">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mx-auto mb-1"></div>
                  <span>Somewhat</span>
                  <div className="text-gray-400">61-80%</div>
                </div>
                <div className="text-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mx-auto mb-1"></div>
                  <span>Well</span>
                  <div className="text-gray-400">81-100%</div>
                </div>
              </div>
            </div>
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
