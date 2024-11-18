import React from 'react';
import { RadialBarChart, RadialBar } from 'recharts';

const AUCRadialCharts = () => {
  const ageData = [
    {
      name: "Under 18",
      category: "Under 18",
      auc: 0.903,
      fill: "#4361ee"
    },
    {
      name: "18-40",
      category: "18-40",
      auc: 0.986,
      fill: "#4895ef"
    },
    {
      name: "40-60",
      category: "40-60",
      auc: 0.972,
      fill: "#3f37c9"
    },
    {
      name: "60-75",
      category: "60-75",
      auc: 0.932,
      fill: "#560bad"
    },
    {
      name: "75+",
      category: "75+",
      auc: 0.885,
      fill: "#b5189e"
    }
  ];  // Removed the .reverse() to maintain proper order

  const genderData = [
    {
      name: "Male",
      category: "Male",
      auc: 0.986,
      fill: "#4169E1"
    },
    {
      name: "Female",
      category: "Female",
      auc: 0.979,
      fill: "#b5189e"
    }
  ];

  const manufacturerData = [
    {
      name: "GE Healthcare",
      category: "GE Healthcare",
      auc: 0.950,
      fill: "#4895ef"
    },
    {
      name: "Siemens",
      category: "Siemens",
      auc: 0.967,
      fill: "#3f37c9"
    },
    {
      name: "Philips",
      category: "Philips",
      auc: 0.921,
      fill: "#560bad"
    },
    {
      name: "Other Manufact.",
      category: "Other Manufact.",
      auc: 0.934,
      fill: "#b5189e"
    }
  ];

  const machineTypeData = [
    {
      name: "CR",
      category: "CR",
      auc: 0.978,
      fill: "#4169E1"
    },
    {
      name: "DR",
      category: "DR",
      auc: 0.969,
      fill: "#b5189e"
    }
  ];

  const RadialChart = ({ data, title }) => {
    const chartWidth = 280;
    const chartHeight = 280;
    const legendHeight = 160;
    
    return (
      <div className="flex flex-col items-center w-full text-white bg-black">
        <div className="w-full sm:contents" style={{ height: `${chartHeight}px` }}>
          <RadialBarChart
            width={chartWidth}
            height={chartHeight}
            cx={chartWidth / 2}
            cy={chartHeight / 2}
            innerRadius="30%"
            outerRadius="90%"
            barSize={20}
            data={data}
            startAngle={90}
            endAngle={-270}
          >
            <RadialBar
              label={{
                position: 'insideStart',
                fill: '#fff',
                formatter: (value) => value.toFixed(3)
              }}
              background={{ fill: '#333' }}
              dataKey="auc"
              nameKey="name"
            />
          </RadialBarChart>
        </div>
        
        <div className="w-full" style={{ height: `${legendHeight}px` }}>
          <div className="mt-4 mb-2 text-lg font-bold text-center">
            {title}
          </div>
          <div className="px-4">
            {data.map((item, index) => (
              <div key={index} className="flex items-center justify-between py-1">
                <div className="flex items-center">
                  <div
                    className="w-3 h-3 mr-2 rounded-full"
                    style={{ backgroundColor: item.fill }}
                  />
                  <span className="text-sm">{item.name}</span>
                </div>
                <span className="text-sm">{item.auc.toFixed(3)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="grid grid-cols-4 gap-6 p-8 sm:grid-cols-1">
      <div className="w-full aspect-square">
        <RadialChart data={ageData} title="Age Group" />
      </div>
      <div className="w-full aspect-square">
        <RadialChart data={genderData} title="Gender" />
      </div>
      <div className="w-full aspect-square">
        <RadialChart data={manufacturerData} title="Manufacturer" />
      </div>
      <div className="w-full aspect-square">
        <RadialChart data={machineTypeData} title="Machine Type" />
      </div>
    </div>
  );
};

export default AUCRadialCharts;