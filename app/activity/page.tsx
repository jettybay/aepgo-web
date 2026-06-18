'use client';

import React from 'react';
import Sidebar from '@/components/layout/Sidebar';
import Header from '@/components/layout/Header';

const activities = [
  { time: "Today", action: "Solar Irrigation Pump ran for 4.2 hours", impact: "+18.5 kWh", status: "success" },
  { time: "Yesterday", action: "Maize field harvested - 1.2 tons", impact: "Revenue: €85", status: "success" },
  { time: "2 days ago", action: "Crop Dryer used for 6 hours", impact: "Dried 450kg", status: "success" },
  { time: "May 3", action: "Payment of €40.00 received", impact: "Balance updated", status: "success" },
];

export default function FarmActivity() {
  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />

        <main className="flex-1 overflow-auto p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold mb-2">Farm Activity</h1>
            <p className="text-gray-600 mb-8">Track everything happening on your farm</p>

            <div className="card p-8">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-xl font-semibold">Recent Activity</h3>
                <button className="text-purple-600 hover:underline">View Full History</button>
              </div>

              <div className="space-y-6">
                {activities.map((activity, i) => (
                  <div key={i} className="flex gap-6 items-start pb-6 border-b last:border-0">
                    <div className="w-20 text-sm text-gray-500 font-medium">{activity.time}</div>
                    <div className="flex-1">
                      <p className="font-medium">{activity.action}</p>
                      <p className="text-emerald-600 text-sm mt-1">{activity.impact}</p>
                    </div>
                    <div className="text-emerald-500">✓</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}