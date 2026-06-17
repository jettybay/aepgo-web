'use client';

import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const usageData = [
  { date: 'May 1', kwh: 8 },
  { date: 'May 8', kwh: 22 },
  { date: 'May 15', kwh: 18 },
  { date: 'May 22', kwh: 40 },
  { date: 'May 29', kwh: 35 },
];

export default function UsageChart() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold">Usage Overview (This Month)</h3>
        <select className="bg-gray-100 px-5 py-2.5 rounded-2xl text-sm focus:outline-none">
          <option>This Month</option>
        </select>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={usageData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
          <XAxis dataKey="date" stroke="#9ca3af" />
          <YAxis stroke="#9ca3af" />
          <Tooltip />
          <Line 
            type="natural" 
            dataKey="kwh" 
            stroke="#7c3aed" 
            strokeWidth={4} 
            dot={{ fill: '#7c3aed', r: 6, strokeWidth: 2, stroke: '#fff' }} 
          />
        </LineChart>
      </ResponsiveContainer>

      <div className="mt-6 flex justify-between items-end">
        <div>
          <p className="text-4xl font-bold text-gray-900">256.4 kWh</p>
          <p className="text-emerald-600 font-medium">+22.4% vs last month</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-500">Average Daily Usage</p>
          <p className="text-2xl font-semibold">8.3 kWh</p>
        </div>
      </div>
    </div>
  );
}