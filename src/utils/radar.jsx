import React, { useState, useEffect } from 'react';
import { PolarGrid, Radar, RadarChart, Legend, Tooltip } from "recharts";
import {
    Card,
    CardContent,
} from "../components/ui/card";
import { radarData } from '../constant';

const colors = {
    "Government Hospitals": "#f72485",
    "Small & Medium Private Hospitals": "#4261ee",
    "Diagnostic Centers": "#550cad",
    "Large Private Hospitals": "#4cc9f0"
};

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className="p-4 bg-black border-none rounded shadow-lg">
                <p className="mb-2 font-medium text-white">{payload[0]?.payload?.Pathology}</p>
                {payload.map((entry, index) => (
                    <p key={index} className="text-sm" style={{ color: entry.color }}>
                        {entry.name}: {entry.value.toFixed(3)}
                    </p>
                ))}
            </div>
        );
    }
    return null;
};

const ResponsiveRadarChart = () => {
    const [dimensions, setDimensions] = useState({
        width: 500,
        height: 500,
        radius: 200
    });

    useEffect(() => {
        const updateDimensions = () => {
            const container = document.getElementById('chart-container');
            if (container) {
                const width = container.clientWidth;
                const isMobile = window.innerWidth < 768;
                const chartSize = isMobile ? Math.min(width - 40, 350) : Math.min(width / 2 - 40, 500);
                const radius = chartSize / 2 - 20;

                setDimensions({
                    width: chartSize,
                    height: chartSize,
                    radius: radius
                });
            }
        };

        updateDimensions();
        window.addEventListener('resize', updateDimensions);
        return () => window.removeEventListener('resize', updateDimensions);
    }, []);

    return (
        <Card className="w-full bg-transparent border-none">
            <CardContent className="p-4">
                <div className="flex flex-row items-center justify-center w-full gap-8 md:flex-row sm:flex-col" id="chart-container">
                    {/* Radar chart section */}
                    <div className="flex justify-center">
                        <RadarChart
                            outerRadius={dimensions.radius}
                            width={dimensions.width}
                            height={dimensions.height}
                            data={radarData}
                            className="mx-auto"
                        >
                            <PolarGrid />
                            {Object.keys(colors).map((key) => (
                                <Radar
                                    key={key}
                                    name={key}
                                    dataKey={key}
                                    stroke={colors[key]}
                                    fill={colors[key]}
                                    fillOpacity={0.2}
                                    dot={{
                                        r: 3,
                                        fill: colors[key],
                                        fillOpacity: 1,
                                    }}
                                />
                            ))}
                            <Tooltip content={<CustomTooltip />} />
                        </RadarChart>
                    </div>

                    {/* Legend section */}
                    <div className="flex flex-col max-w-xs gap-4 p-4">
      {Object.entries(colors).map(([key, color]) => (
        <div key={key} className="flex items-center gap-2">
          <div
            className="flex-shrink-0 w-4 h-4 rounded"
            style={{ backgroundColor: color }}
          />
          <span className="text-sm text-white whitespace-normal">{key}</span>
        </div>
      ))}
    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default ResponsiveRadarChart;