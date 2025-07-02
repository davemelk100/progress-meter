import React from "react";
import { TrendingUp, BookOpen, ChevronDown } from "lucide-react";

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
  const [selectedCard, setSelectedCard] =
    React.useState<OptimizationCard | null>(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

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

  const openModal = (card: OptimizationCard) => {
    setSelectedCard(card);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCard(null);
  };

  return (
    <div className="min-h-screen p-6">
      {/* Modal */}
      {isModalOpen && selectedCard && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-2xl mx-4 max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-black">
                {selectedCard.title}
              </h2>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
              >
                ×
              </button>
            </div>
            <div className="mb-6">
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                {selectedCard.description}
              </p>
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-2">
                  Why you have this score:
                </h3>
                <p className="text-gray-600">
                  {selectedCard.status === "good" &&
                    "Your energy usage patterns show excellent optimization in this area. You're consistently making efficient choices that minimize waste and maximize savings."}
                  {selectedCard.status === "warning" &&
                    "There's room for improvement in this area. While you're doing some things right, small adjustments could significantly boost your optimization score."}
                  {selectedCard.status === "poor" &&
                    "This area needs attention. Your current usage patterns indicate opportunities for substantial improvements that could lead to significant energy savings."}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div
                className={`text-4xl font-bold ${getStatusColor(
                  selectedCard.status
                )}`}
              >
                {selectedCard.percentage}%
              </div>
              <button
                onClick={closeModal}
                className="px-6 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg text-gray-700 font-medium transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Color/Greyscale Toggle - Top Right of Viewport */}
      <button
        onClick={() => setIsColorMode(!isColorMode)}
        className="fixed top-4 right-4 px-4 py-2 bg-white hover:bg-gray-100 rounded-lg text-sm font-medium transition-colors shadow-md border border-gray-200 z-50"
      >
        {isColorMode ? "Greyscale" : "Color"}
      </button>

      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="bg-white rounded-lg p-8 mb-6">
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
              <div className="text-6xl font-bold text-black">&lt;60%</div>
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-md">
                <BookOpen className="w-5 h-5 text-black" />
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
                <span className="text-2xl font-bold text-gray-700">
                  &lt;60%
                </span>
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
                <span className="text-2xl font-bold text-gray-700">
                  &lt;60%
                </span>
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
                      className="w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center"
                      style={{
                        borderColor: isColorMode ? "#DB352F" : "#6B7280",
                      }}
                    >
                      <div
                        className="w-8 h-8 rounded-full border"
                        style={{
                          backgroundColor: isColorMode ? "#FEF2F2" : "#6B7280",
                          borderWidth: "0.5px",
                          borderColor: isColorMode ? "#DB352F" : "#6B7280",
                        }}
                      ></div>
                    </div>
                  </div>

                  {/* Connecting small circles */}
                  <div className="flex items-center space-x-1 flex-1 justify-center relative">
                    <div className="w-full h-3 flex">
                      <div
                        className="h-full"
                        style={{
                          width: "60%",
                          backgroundColor: isColorMode ? "#DB352F" : "#6B7280",
                        }}
                      ></div>
                      <div
                        className="h-full"
                        style={{
                          width: "40%",
                          backgroundColor: isColorMode ? "#2E62E1" : "#374151",
                        }}
                      ></div>
                    </div>

                    {/* 49% label positioned at 30% */}
                    <div
                      className="absolute"
                      style={{
                        marginLeft: "30%",
                        top: "50%",
                        transform: "translateX(-50%) translateY(-50%)",
                      }}
                    >
                      <div
                        className="w-24 h-24 rounded-full bg-white flex items-center justify-center border-2 border-dashed shadow-md"
                        style={{
                          backgroundColor: "#FEF2F2",
                          borderWidth: "1px",
                          borderColor: "#DB352F",
                        }}
                      >
                        <span
                          className="text-3xl font-semibold"
                          style={{ color: "#DB352F" }}
                        ></span>
                      </div>
                    </div>
                  </div>

                  {/* Somewhat Section - Big circle */}
                  <div className="relative">
                    <div
                      className="w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center"
                      style={{
                        borderColor: isColorMode ? "#2E62E1" : "#374151",
                      }}
                    >
                      <div
                        className="w-8 h-8 rounded-full border"
                        style={{
                          backgroundColor: isColorMode ? "#F0F6FF" : "#374151",
                          borderWidth: "0.5px",
                          borderColor: isColorMode ? "#2E62E1" : "#374151",
                        }}
                      ></div>
                    </div>
                  </div>

                  {/* Connecting small circles */}
                  <div className="flex items-center space-x-1 flex-1 justify-center">
                    <div className="w-full h-3 flex">
                      <div
                        className="h-full"
                        style={{
                          width: "33.33%",
                          backgroundColor: isColorMode ? "#2E62E1" : "#374151",
                        }}
                      ></div>
                      <div
                        className="h-full"
                        style={{
                          width: "66.67%",
                          backgroundColor: isColorMode ? "#0BA34F" : "#111827",
                        }}
                      ></div>
                    </div>
                  </div>

                  {/* Well Section - Big circle */}
                  <div className="relative">
                    <div
                      className="w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center"
                      style={{
                        borderColor: isColorMode ? "#0BA34F" : "#111827",
                      }}
                    >
                      <div
                        className="w-8 h-8 rounded-full border"
                        style={{
                          backgroundColor: isColorMode ? "#F0FDF4" : "#111827",
                          borderWidth: "0.5px",
                          borderColor: isColorMode ? "#0BA34F" : "#111827",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section Labels for Circle Meter */}
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

              {/* Fourth Progress Bar - Rectangle Segments Approach */}
              <div className="relative w-full h-20 bg-white rounded-lg p-2">
                {/* 49% Notch Marker */}
                <div
                  className="absolute w-1 h-4 bg-black shadow-lg"
                  style={{
                    left: "30%",
                    top: "50%",
                    transform: "translateY(-50%)",
                  }}
                ></div>
                {/* Big rectangles with connecting bars */}
                <div className="flex items-center justify-between h-full">
                  {/* Less Section - Big rectangle */}
                  <div className="relative">
                    <div
                      className="w-28 h-12 rounded flex flex-col items-center justify-center"
                      style={{
                        backgroundColor: isColorMode ? "#fdf3f2" : "white",
                      }}
                    >
                      <span className="text-sm font-medium text-gray-700">
                        Less
                      </span>
                      <span className="text-sm text-gray-400">0-60%</span>
                    </div>
                  </div>

                  {/* Connecting bars */}
                  <div className="flex items-center space-x-1 flex-1 justify-center relative">
                    <div className="w-full h-4 flex">
                      <div
                        className="h-full"
                        style={{
                          width: "60%",
                          backgroundColor: isColorMode ? "#DB352F" : "#6B7280",
                        }}
                      ></div>
                      <div
                        className="h-full"
                        style={{
                          width: "40%",
                          backgroundColor: isColorMode ? "#2E62E1" : "#374151",
                        }}
                      ></div>
                    </div>

                    {/* 49% label positioned at 30% */}
                    <div
                      className="absolute"
                      style={{
                        marginLeft: "30%",
                        top: "50%",
                        transform: "translateX(-50%) translateY(-50%)",
                      }}
                    >
                      <div className="w-20 h-12 rounded flex items-center justify-center">
                        <div
                          className="w-full h-full rounded flex items-center justify-center"
                          style={{
                            backgroundColor: "rgba(255, 255, 255, 1)",
                            padding: "0 10px",
                          }}
                        >
                          <span
                            className="text-3xl font-bold"
                            style={{ color: "#dd342d" }}
                          >
                            &lt;60%
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Somewhat Section - Big rectangle */}
                  <div className="relative">
                    <div
                      className="w-28 h-12 rounded flex flex-col items-center justify-center"
                      style={{
                        backgroundColor: isColorMode ? "#f0f7ff" : "white",
                      }}
                    >
                      <span className="text-sm font-medium text-gray-700">
                        Somewhat
                      </span>
                      <span className="text-sm text-gray-400">61-80%</span>
                    </div>
                  </div>

                  {/* Connecting bars */}
                  <div className="flex items-center space-x-1 flex-1 justify-center">
                    <div className="w-full h-4 flex">
                      <div
                        className="h-full"
                        style={{
                          width: "33.33%",
                          backgroundColor: isColorMode ? "#2E62E1" : "#374151",
                        }}
                      ></div>
                      <div
                        className="h-full"
                        style={{
                          width: "66.67%",
                          backgroundColor: isColorMode ? "#0BA34F" : "#111827",
                        }}
                      ></div>
                    </div>
                  </div>

                  {/* Well Section - Big rectangle */}
                  <div className="relative">
                    <div
                      className="w-28 h-12 rounded flex flex-col items-center justify-center"
                      style={{
                        backgroundColor: isColorMode ? "#f1fcf4" : "white",
                      }}
                    >
                      <span className="text-sm font-medium text-gray-700">
                        Well
                      </span>
                      <span className="text-sm text-gray-400">81-100%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Fifth Progress Meter - Card Style with Scale */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mt-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Energy Optimization Score
                  </h3>
                </div>

                {/* Scale Bar */}
                <div className="relative mb-4">
                  <div
                    className="w-full h-8 bg-gray-100 rounded-full overflow-hidden flex"
                    style={{ borderRadius: "9999px" }}
                  >
                    {/* Poor Segment */}
                    <div
                      className="h-full"
                      style={{
                        width: "33.33%",
                        backgroundColor: isColorMode ? "#DB352F" : "#6B7280",
                      }}
                    ></div>
                    {/* Fair Segment */}
                    <div
                      className="h-full"
                      style={{
                        width: "33.33%",
                        backgroundColor: isColorMode ? "#2E62E1" : "#374151",
                        borderLeft: "2px solid rgba(0, 0, 0, 0.3)",
                        borderRight: "2px solid rgba(0, 0, 0, 0.3)",
                      }}
                    ></div>
                    {/* Good Segment */}
                    <div
                      className="h-full"
                      style={{
                        width: "33.33%",
                        backgroundColor: isColorMode ? "#0BA34F" : "#111827",
                        borderTopRightRadius: "9999px",
                        borderBottomRightRadius: "9999px",
                        borderLeft: "2px solid rgba(0, 0, 0, 0.3)",
                      }}
                    ></div>
                  </div>

                  {/* Progress Fill Overlay */}
                  <div
                    className="absolute top-0 left-0 h-8 bg-gradient-to-r from-red-300 to-red-600 transition-all duration-500"
                    style={{ width: "33.33%", borderRadius: "9999px" }}
                  ></div>

                  {/* Unfilled portion overlay */}
                  <div
                    className="absolute top-0 h-8 bg-gray-200 transition-all duration-500"
                    style={{
                      left: "33.33%",
                      right: "0",
                      borderTopRightRadius: "9999px",
                      borderBottomRightRadius: "9999px",
                    }}
                  ></div>

                  {/* White Notch in center of red section */}
                  <div
                    className="absolute w-1 bg-white"
                    style={{
                      left: "calc(16.67% + 40px)",
                      top: "0",
                      bottom: "0",
                    }}
                  ></div>

                  {/* &lt;60% label below notch */}
                  <div
                    className="absolute text-2xl font-bold"
                    style={{
                      left: "calc(16.67% + 40px)",
                      top: "100%",
                      transform: "translateX(-50%)",
                      marginTop: "-30px",
                      color: "#DB352F",
                    }}
                  >
                    &lt;60%
                  </div>

                  {/* Level Indicators */}
                  <div className="flex justify-between mt-1">
                    <div className="text-center">
                      <div
                        className="w-3 h-3 rounded-full mx-auto mb-1"
                        style={{
                          backgroundColor: isColorMode ? "#DB352F" : "#6B7280",
                        }}
                      ></div>
                      <span className="text-xs text-gray-500">Less</span>
                      <div className="text-xs text-gray-400 mt-1">0-60%</div>
                    </div>
                    <div className="text-center">
                      <div
                        className="w-3 h-3 rounded-full mx-auto mb-1"
                        style={{
                          backgroundColor: isColorMode ? "#2E62E1" : "#374151",
                        }}
                      ></div>
                      <span className="text-xs text-gray-500">Somewhat</span>
                      <div className="text-xs text-gray-400 mt-1">61-80%</div>
                    </div>
                    <div className="text-center">
                      <div
                        className="w-3 h-3 rounded-full mx-auto mb-1"
                        style={{
                          backgroundColor: isColorMode ? "#0BA34F" : "#111827",
                        }}
                      ></div>
                      <span className="text-xs text-gray-500">Well</span>
                      <div className="text-xs text-gray-400 mt-1">81-100%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tenth Progress Meter - Based on Provided Image */}
        <div className="mt-[50px] mb-[50px]">
          <div className="relative w-full flex flex-col items-center">
            {/* Meter Bar */}
            <div
              className="relative w-full max-w-4xl flex items-center justify-between"
              style={{ height: 60 }}
            >
              {/* Segments */}
              <div className="flex w-full h-full">
                {/* Less Optimized */}
                <div className="flex-1 h-full relative z-0">
                  <div
                    className="absolute inset-0 rounded-l-full rounded-r-none border-2 border-dashed"
                    style={{ borderColor: "#DB352F", borderRight: "none" }}
                  ></div>
                  {/* Fill up to 49% */}
                  <div
                    className="absolute"
                    style={{
                      left: 5,
                      top: 5,
                      height: "calc(100% - 10px)",
                      width: "calc(49% - 5px)",
                      background:
                        "linear-gradient(270deg, #DB352F 0%, #F7B2A3 100%)",
                      borderTopLeftRadius: "9999px",
                      borderBottomLeftRadius: "9999px",
                      borderTopRightRadius: 0,
                      borderBottomRightRadius: 0,
                      zIndex: 1,
                    }}
                  ></div>
                </div>
                {/* Somewhat Optimized */}
                <div className="flex-1 h-full relative z-0">
                  {/* Dashed border only, no blue gradient fill */}
                  <div
                    className="absolute inset-0 border-t-2 border-b-2 border-dashed"
                    style={{
                      borderColor: "#2E62E1",
                      borderLeft: "none",
                      borderRadius: 0,
                      zIndex: 2,
                    }}
                  ></div>
                </div>
                {/* Well Optimized */}
                <div className="flex-1 h-full relative z-0">
                  <div
                    className="absolute inset-0 rounded-r-full rounded-l-none border-2 border-dashed"
                    style={{ borderColor: "#0BA34F", borderLeft: "none" }}
                  ></div>
                </div>
              </div>
              {/* 49% Circle Overlay */}
              <div
                className="absolute z-10"
                style={{
                  left: "16.67%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <div
                  className="w-24 h-24 rounded-full bg-white flex items-center justify-center border-2 border-dashed shadow-md"
                  style={{ borderColor: "#DB352F" }}
                >
                  <span
                    className="text-3xl font-semibold"
                    style={{ color: "#DB352F" }}
                  >
                    &lt;60%
                  </span>
                </div>
              </div>
            </div>
            {/* Labels and Ranges */}
            <div className="flex w-full max-w-4xl justify-between mt-8">
              <div className="flex-1 text-center">
                <div
                  className="font-medium text-gray-800"
                  style={{ color: "#DB352F" }}
                >
                  Less
                  <br />
                  Optimized
                </div>
                <div className="text-gray-500 mt-1">0-60%</div>
              </div>
              <div className="flex-1 text-center">
                <div
                  className="font-medium text-gray-800"
                  style={{ color: "#2E62E1" }}
                >
                  Somewhat
                  <br />
                  Optimized
                </div>
                <div className="text-gray-500 mt-1">61-80%</div>
              </div>
              <div className="flex-1 text-center">
                <div
                  className="font-medium text-gray-800"
                  style={{ color: "#0BA34F" }}
                >
                  Well
                  <br />
                  Optimized
                </div>
                <div className="text-gray-500 mt-1">81-1000%</div>
              </div>
            </div>
          </div>
        </div>

        {/* Eleventh Progress Meter - Blue Section Highlight */}
        <div className="mt-[50px] mb-[50px]">
          <div className="relative w-full flex flex-col items-center">
            {/* Meter Bar */}
            <div
              className="relative w-full max-w-4xl flex items-center justify-between"
              style={{ height: 60 }}
            >
              {/* Segments */}
              <div className="flex w-full h-full">
                {/* Less Optimized */}
                <div className="flex-1 h-full relative z-0">
                  <div
                    className="absolute inset-0 rounded-l-full rounded-r-none border-2 border-dashed"
                    style={{ borderColor: "#DB352F", borderRight: "none" }}
                  ></div>
                  {/* Fill up to end of red section */}
                  <div
                    className="absolute"
                    style={{
                      left: 5,
                      top: 5,
                      height: "calc(100% - 10px)",
                      width: "100%",
                      background: "#DB352F",
                      borderTopLeftRadius: "9999px",
                      borderBottomLeftRadius: "9999px",
                      borderTopRightRadius: 0,
                      borderBottomRightRadius: 0,
                      zIndex: 1,
                    }}
                  ></div>
                </div>
                {/* Somewhat Optimized */}
                <div className="flex-1 h-full relative z-0">
                  {/* Blue gradient fill (75% width, left-aligned) */}
                  <div
                    className="absolute"
                    style={{
                      left: 0,
                      top: 5,
                      height: "calc(100% - 10px)",
                      width: "75%",
                      background:
                        "linear-gradient(90deg, #D6E0FB 0%, #2E62E1 100%)",
                      borderRadius: 0,
                      zIndex: 1,
                    }}
                  ></div>
                  {/* Dashed border above gradient */}
                  <div
                    className="absolute inset-0 border-t-2 border-b-2 border-dashed"
                    style={{
                      borderColor: "#2E62E1",
                      borderLeft: "none",
                      borderRadius: 0,
                      zIndex: 2,
                    }}
                  ></div>
                </div>
                {/* Well Optimized */}
                <div className="flex-1 h-full relative z-0">
                  <div
                    className="absolute inset-0 rounded-r-full rounded-l-none border-2 border-dashed"
                    style={{ borderColor: "#0BA34F", borderLeft: "none" }}
                  ></div>
                </div>
              </div>
              {/* &lt;80% Circle Overlay in Blue Section */}
              <div
                className="absolute z-10"
                style={{
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <div
                  className="w-24 h-24 rounded-full bg-white flex items-center justify-center border-2 border-dashed shadow-md"
                  style={{ borderColor: "#2E62E1" }}
                >
                  <span
                    className="text-2xl font-semibold"
                    style={{ color: "#2E62E1" }}
                  >
                    &lt;80%
                  </span>
                </div>
              </div>
            </div>
            {/* Labels and Ranges */}
            <div className="flex w-full max-w-4xl justify-between mt-8">
              <div className="flex-1 text-center">
                <div
                  className="font-medium text-gray-800"
                  style={{ color: "#DB352F" }}
                >
                  Less
                  <br />
                  Optimized
                </div>
                <div className="text-gray-500 mt-1">0-60%</div>
              </div>
              <div className="flex-1 text-center">
                <div
                  className="font-medium text-gray-800"
                  style={{ color: "#2E62E1" }}
                >
                  Somewhat
                  <br />
                  Optimized
                </div>
                <div className="text-gray-500 mt-1">61-80%</div>
              </div>
              <div className="flex-1 text-center">
                <div
                  className="font-medium text-gray-800"
                  style={{ color: "#0BA34F" }}
                >
                  Well
                  <br />
                  Optimized
                </div>
                <div className="text-gray-500 mt-1">81-100%</div>
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
                <h2 className="text-xl font-medium text-black">{card.title}</h2>
                <button
                  onClick={() => openModal(card)}
                  className={`w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-md hover:shadow-lg transition-shadow cursor-pointer ${getInfoIconColor(
                    card.status
                  )}`}
                >
                  <BookOpen className="w-5 h-5" />
                </button>
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
