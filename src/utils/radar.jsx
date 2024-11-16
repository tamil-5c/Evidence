import React from 'react';
import { PolarGrid, Radar, RadarChart, Legend, Tooltip } from "recharts";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "../components/ui/card";
import { radarData } from '../constant';

const colors = {
    "Government Hospitals": "#f72485",
    "Small & Medium Private Hospitals": "#4261ee",
    "Diagnostic Centers": "#550cad",
    "Large Private Hospitals": "#4cc9f0"
};

const CustomTooltip = ({ active, payload, label }) => {
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

export default function PathologyRadarChart() {
    return (
        <Card className='bg-transparent border-none'>
            <CardHeader className="items-center">
                {/* <CardTitle>Pathology Performance by Hospital Type</CardTitle>
        <CardDescription>
          Comparing detection rates across different healthcare facilities
        </CardDescription> */}
            </CardHeader>
            <CardContent className="pb-4">
                <div className="grid items-center max-w-full grid-cols-2 mx-auto">
                    {/* Radar chart section */}
                    <div className=" max-h-[400px]">
                        <RadarChart
                            outerRadius={150}
                            width={500}
                            height={500}
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
                            {/* <Legend /> */}
                        </RadarChart>
                    </div>

                    {/* Legend section */}
                    <div className="flex flex-col justify-between pl-4">
                        {Object.keys(colors).map((key) => (
                            <div key={key} className="flex items-center gap-2">
                                <div
                                    className="w-4 h-4"
                                    style={{ backgroundColor: colors[key] }}
                                />
                                <span className="text-sm text-white">{key}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </CardContent>
            {/* <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 leading-none text-muted-foreground">
          Pathology Detection Rates (0-1 scale)
        </div>
      </CardFooter> */}
        </Card>
    );
}
