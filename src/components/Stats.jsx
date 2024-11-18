import React, { useState } from 'react';
import Bar from '../utils/bar';
import Radar from '../utils/radar';
import Subgroup from '../utils/subgroup';

const Stats = () => {
  const [activeStatsSection, setActiveStatsSection] = useState('Performance State(AUC)');

  const statsSections = [
    'Performance State(AUC)',
    'Benchmarking',
    'Subgroup Analysis'
  ];

  const renderStatsContent = () => {
    switch (activeStatsSection) {
      case 'Performance State(AUC)':
        return (
          <div className="overflow-y-auto max-h-[30rem]">
            <Bar />
          </div>
        );
      case 'Benchmarking':
        return (
          <div className="overflow-y-auto max-h-[30rem]">
            <Radar />
          </div>
        );
      case 'Subgroup Analysis':
        return (
          <div className="overflow-y-auto max-h-[30rem]">
            <Subgroup />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="text-white">
      {/* Stats Section Header with Buttons */}
      <div className="sticky top-0 z-10 flex items-center justify-center p-4 mb-6 bg-black sm:contents sm:w-full">
        {/* <h2 className="text-2xl font-bold">Statistics</h2> */}
        <div className="flex gap-12 sm:gap-2 sm:flex-col sm:pl-4 sm:pr-12 "> {/* Increased gap from 8 to 12 for more spacing */}
          {statsSections.map((section) => (
            <button
              key={section}
              onClick={() => setActiveStatsSection(section)}
              className={`relative inline-flex items-center justify-center px-10 py-2 text-sm font-medium transition-all duration-200 rounded-md sm:px-5 group ${activeStatsSection === section
                ? 'bg-gradient-to-r from-[#FF6B6B] via-[#9381FF] to-[#4DA8FF] text-transparent bg-clip-text font-semibold'
                : 'bg-[#18181c] text-gray-300 hover:bg-gray-700'
                }`}
            >
              {/* Background Gradient Layer */}
              {activeStatsSection === section && (
                <span className="absolute inset-0 w-full h-full rounded-md opacity-50 bg-gradient-to-r from-[#FF6B6B] via-[#9381FF] to-[#4DA8FF]" />
              )}

              {/* Border Layer */}
              <span className="absolute inset-[1px] rounded-[5px] bg-gray-900" />

              {/* Button Label */}
              <span className="relative z-10">
                <span className={`font-semibold ${activeStatsSection === section ? 'bg-gradient-to-r from-[#FF6B6B] via-[#9381FF] to-[#4DA8FF] text-transparent bg-clip-text' : ''}`}>
                  {section}
                </span>
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Stats Content */}
      <div className="p-6 pr-0 sm:p-0">
        {/* <h3 className="mb-4 text-xl font-semibold">{activeStatsSection}</h3> */}
        {renderStatsContent()}
      </div>
    </div>
  );
};

export default Stats;