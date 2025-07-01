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
  const [isColorMode, setIsColorMode] = React.useState(true);

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
      {/* Color/Greyscale Toggle - Top Right of Viewport */}
      <button
        onClick={() => setIsColorMode(!isColorMode)}
        className="fixed top-4 right-4 px-4 py-2 bg-white hover:bg-gray-100 rounded-lg text-sm font-medium transition-colors shadow-md border border-gray-200 z-50"
      >
        {isColorMode ? "Greyscale" : "Color"}
      </button>

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

          <div className="mt-6">
            <div className="flex items-center justify-between mb-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                See how well you're optimizing energy use in areas you can
                control. These 5 categories offer the biggest impact on your
                bill:
              </p>
            </div>

            {/* Full-width Progress Meter */}
            <div className="w-full rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-gray-700">
                  Optimization Level
                </span>
              </div>

              {/* Progress Bar with Progressive Darkening */}
              <div className="relative w-full h-6 bg-white rounded-full shadow-inner">
                {/* Progressive darkening line from left to right */}
                <div
                  className="absolute left-0 top-0 h-full rounded-full"
                  style={{
                    width: "100%",
                    background: isColorMode
                      ? "linear-gradient(to right, #DB352F, #2E62E1, #0BA34F)"
                      : "linear-gradient(to right, #6B7280, #374151, #111827)",
                  }}
                ></div>

                {/* 49% Notch Marker */}
                <div
                  className="absolute top-0 w-1 h-full bg-black shadow-lg"
                  style={{ left: "30%" }}
                ></div>
              </div>

              {/* Percentage Label under First Bar */}
              <div
                className="relative mt-3 text-center"
                style={{ marginLeft: "30%", transform: "translateX(-50%)" }}
              >
                <span className="text-2xl font-bold text-gray-700">49%</span>
              </div>

              {/* Section Labels for First Bar */}
              <div className="flex justify-between mt-2 text-xs text-gray-600 mb-[50px]">
                <div className="text-center">
                  <div
                    className="w-2 h-2 rounded-full mx-auto mb-1"
                    style={{ backgroundColor: "#DB352F" }}
                  ></div>
                  <span>Less</span>
                  <div className="text-gray-400">0-60%</div>
                </div>
                <div className="text-center">
                  <div
                    className="w-2 h-2 rounded-full mx-auto mb-1"
                    style={{ backgroundColor: "#2E62E1" }}
                  ></div>
                  <span>Somewhat</span>
                  <div className="text-gray-400">61-80%</div>
                </div>
                <div className="text-center">
                  <div
                    className="w-2 h-2 rounded-full mx-auto mb-1"
                    style={{ backgroundColor: "#0BA34F" }}
                  ></div>
                  <span>Well</span>
                  <div className="text-gray-400">81-100%</div>
                </div>
              </div>

              {/* Second Progress Bar with Definitive Color Separation */}
              <div className="relative w-full h-6 bg-white rounded-full shadow-inner">
                {/* Gradient with less overlap - more defined transitions */}
                <div
                  className="absolute left-0 top-0 h-full rounded-full"
                  style={{
                    width: "100%",
                    background: isColorMode
                      ? "linear-gradient(to right, #DB352F 0%, #DB352F 25%, #2E62E1 35%, #2E62E1 65%, #0BA34F 75%, #0BA34F 100%)"
                      : "linear-gradient(to right, #6B7280 0%, #6B7280 25%, #374151 35%, #374151 65%, #111827 75%, #111827 100%)",
                  }}
                ></div>

                {/* 49% Notch Marker */}
                <div
                  className="absolute top-0 w-1 h-full bg-black shadow-lg"
                  style={{ left: "30%" }}
                ></div>
              </div>

              {/* Percentage Label under Second Bar */}
              <div
                className="relative mt-3 text-center"
                style={{ marginLeft: "30%", transform: "translateX(-50%)" }}
              >
                <span className="text-2xl font-bold text-gray-700">49%</span>
              </div>

              {/* Section Labels for Second Bar */}
              <div className="flex justify-between mt-2 text-xs text-gray-600 mb-[50px]">
                <div className="text-center">
                  <div
                    className="w-2 h-2 rounded-full mx-auto mb-1"
                    style={{ backgroundColor: "#DB352F" }}
                  ></div>
                  <span>Less</span>
                  <div className="text-gray-400">0-60%</div>
                </div>
                <div className="text-center">
                  <div
                    className="w-2 h-2 rounded-full mx-auto mb-1"
                    style={{ backgroundColor: "#2E62E1" }}
                  ></div>
                  <span>Somewhat</span>
                  <div className="text-gray-400">61-80%</div>
                </div>
                <div className="text-center">
                  <div
                    className="w-2 h-2 rounded-full mx-auto mb-1"
                    style={{ backgroundColor: "#0BA34F" }}
                  ></div>
                  <span>Well</span>
                  <div className="text-gray-400">81-100%</div>
                </div>
              </div>

              {/* Third Progress Bar - Circular Segments Approach */}
              <div className="relative w-full h-16 bg-white rounded-lg p-2">
                {/* 49% Notch Marker */}
                <div
                  className="absolute w-1 h-3 bg-black shadow-lg"
                  style={{
                    left: "30%",
                    top: "50%",
                    transform: "translateY(-50%)",
                  }}
                ></div>
                {/* Big circles with connecting small circles */}
                <div className="flex items-center justify-between h-full">
                  {/* Less Section - Big circle */}
                  <div className="relative">
                    <div
                      className="w-12 h-12 rounded-full border-4 border-gray-200 flex items-center justify-center"
                      style={{
                        borderColor: isColorMode ? "#DB352F" : "#6B7280",
                      }}
                    >
                      <div
                        className="w-8 h-8 rounded-full"
                        style={{
                          backgroundColor: isColorMode ? "#DB352F" : "#6B7280",
                        }}
                      ></div>
                    </div>
                  </div>

                  {/* Connecting small circles */}
                  <div className="flex items-center space-x-1 flex-1 justify-center relative">
                    <div
                      className="w-full h-3 rounded-full"
                      style={{
                        background: isColorMode
                          ? "linear-gradient(to right, #DB352F 0%, #DB352F 60%, #2E62E1 70%, #2E62E1 100%)"
                          : "linear-gradient(to right, #6B7280 0%, #6B7280 60%, #374151 70%, #374151 100%)",
                      }}
                    ></div>

                    {/* 49% label positioned at 30% */}
                    <div
                      className="absolute top-full mt-2"
                      style={{
                        marginLeft: "30%",
                        transform: "translateX(-50%)",
                      }}
                    >
                      <div
                        className="w-16 h-16 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: "#FEF2F2" }}
                      >
                        <span
                          className="text-2xl font-bold"
                          style={{ color: "#DB352F" }}
                        >
                          49%
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Somewhat Section - Big circle */}
                  <div className="relative">
                    <div
                      className="w-12 h-12 rounded-full border-4 border-gray-200 flex items-center justify-center"
                      style={{
                        borderColor: isColorMode ? "#2E62E1" : "#374151",
                      }}
                    >
                      <div
                        className="w-8 h-8 rounded-full"
                        style={{
                          backgroundColor: isColorMode ? "#2E62E1" : "#374151",
                        }}
                      ></div>
                    </div>
                  </div>

                  {/* Connecting small circles */}
                  <div className="flex items-center space-x-1 flex-1 justify-center">
                    <div
                      className="w-full h-3 rounded-full"
                      style={{
                        background: isColorMode
                          ? "linear-gradient(to right, #2E62E1 0%, #2E62E1 60%, #0BA34F 70%, #0BA34F 100%)"
                          : "linear-gradient(to right, #374151 0%, #374151 60%, #111827 70%, #111827 100%)",
                      }}
                    ></div>
                  </div>

                  {/* Well Section - Big circle */}
                  <div className="relative">
                    <div
                      className="w-12 h-12 rounded-full border-4 border-gray-200 flex items-center justify-center"
                      style={{
                        borderColor: isColorMode ? "#0BA34F" : "#111827",
                      }}
                    >
                      <div
                        className="w-8 h-8 rounded-full"
                        style={{
                          backgroundColor: isColorMode ? "#0BA34F" : "#111827",
                        }}
                      ></div>
                    </div>
                  </div>
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
