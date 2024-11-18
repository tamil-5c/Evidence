import React from 'react';
import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis, Tooltip } from 'recharts';
import { Card, CardContent, CardHeader } from '../components/ui/card';
import { chartData } from '../constant';

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-3 bg-black border-none rounded-lg shadow-lg">
        <p className="mb-1 text-sm font-medium text-white">{payload[0].payload.name}</p>
        <p className="text-sm text-white">
          Value: <span className="font-medium">{payload[0].value.toFixed(2)}</span>
        </p>
      </div>
    );
  }
  return null;
};

const PathologyChart = () => {
  return (
    <Card className="w-full bg-transparent border-none">
      <CardHeader />
      <CardContent>
        <div className="w-full overflow-x-auto">
          <BarChart
            data={chartData}
            layout="vertical"
            width={window.innerWidth > 768 ? 800 : 360} // Adjust width dynamically
            height={window.innerWidth > 768 ? 1900 : chartData.length * 60} // Adjust height for mobile
            margin={{
              top: 20,
              right: window.innerWidth > 768 ? 80 : 20, // Adjust right margin
              left: window.innerWidth > 768 ? 220 : 60, // Adjust left margin
              bottom: 20,
            }}
          >
            <CartesianGrid 
              horizontal={false}
              vertical={false}
              stroke="#eee"
            />
            <XAxis
              type="number"
              domain={[0.9, 1]}
              tickCount={5}
              tick={{ fontSize: window.innerWidth > 768 ? 12 : 10 }}
            />
            <YAxis
              dataKey="name"
              type="category"
              tick={{ fontSize: window.innerWidth > 768 ? 12 : 10, fill: '#ffffff' }}
              width={window.innerWidth > 768 ? 200 : 100}
              interval={0}
            />
            <Tooltip 
              content={<CustomTooltip />}
              cursor={{ fill: 'rgba(0, 0, 0, 0.05)' }}
            />
            <Bar
              dataKey="value"
              fill="#1E90FF"
              radius={[0, 4, 4, 0]}
              barSize={window.innerWidth > 768 ? 16 : 12} // Adjust bar size for mobile
            >
              <LabelList
                dataKey="value"
                position="right"
                formatter={(value) => value.toFixed(2)}
                style={{ 
                  fill: '#ffffff', 
                  fontSize: window.innerWidth > 768 ? '12px' : '10px',
                  fontFamily: 'system-ui'
                }}
              />
            </Bar>
          </BarChart>
        </div>
      </CardContent>
    </Card>
  );
};

export default PathologyChart;
