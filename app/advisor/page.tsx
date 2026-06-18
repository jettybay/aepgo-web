'use client';

import React, { useState } from 'react';
import Sidebar from '@/components/layout/Sidebar';
import Header from '@/components/layout/Header';

const recommendations = [
  {
    category: "Crop Recommendation",
    title: "Plant Maize Now",
    confidence: "High",
    reason: "Current weather in Ede is ideal (32°C, moderate rainfall expected). Soil moisture is optimal.",
    action: "View Planting Guide",
    icon: "🌽"
  },
  {
    category: "Pest Alert",
    title: "Fall Armyworm Risk - Medium",
    confidence: "Medium",
    reason: "Recent humidity increase raises risk. Monitor your maize fields closely.",
    action: "Learn Organic Control",
    icon: "🐛"
  },
  {
    category: "Energy Optimization",
    title: "Reduce Irrigation Pump Usage",
    confidence: "High",
    reason: "Your pump ran 5.6 kWh yesterday. Schedule irrigation for early morning to save 18% energy.",
    action: "Adjust Schedule",
    icon: "⚡"
  },
  {
    category: "Market Insight",
    title: "Maize Price Rising",
    confidence: "High",
    reason: "Current market price in Ede is ₦185,000 per ton (up 12% this week).",
    action: "View Market Prices",
    icon: "📈"
  },
];

export default function AIAdvisor() {
  const [selectedRec, setSelectedRec] = useState(recommendations[0]);
  const [loading, setLoading] = useState(false);

  const refreshRecommendations = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      // In real version, this would call AI API
      alert("New recommendations generated based on latest weather & sensor data!");
    }, 1200);
  };

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />

        <main className="flex-1 overflow-auto p-6 lg:p-8 pb-32">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-end mb-8">
              <div>
                <h1 className="text-3xl font-bold">AI Farm Advisor</h1>
                <p className="text-gray-600">Personalized insights powered by AEPGo AI</p>
              </div>
              <button 
                onClick={refreshRecommendations}
                disabled={loading}
                className="purple-btn flex items-center gap-2"
              >
                {loading ? "Thinking..." : "🔄 Refresh Recommendations"}
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Recommendations List */}
              <div className="lg:col-span-5">
                <div className="card p-6">
<h3 className="font-semibold text-lg mb-5">Today&apos;s Recommendations</h3>
                  
                  <div className="space-y-3 max-h-[calc(100vh-260px)] overflow-auto">
                    {recommendations.map((rec, index) => (
                      <div
                        key={index}
                        onClick={() => setSelectedRec(rec)}
                        className={`p-5 rounded-2xl cursor-pointer transition-all border ${
                          selectedRec === rec 
                            ? 'border-purple-500 bg-purple-50' 
                            : 'hover:border-gray-200'
                        }`}
                      >
                        <div className="flex items-start gap-4">
                          <div className="text-4xl">{rec.icon}</div>
                          <div className="flex-1">
                            <div className="flex justify-between">
                              <p className="font-medium">{rec.title}</p>
                              <span className={`text-xs px-3 py-1 rounded-full ${
                                rec.confidence === 'High' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
                              }`}>
                                {rec.confidence}
                              </span>
                            </div>
                            <p className="text-sm text-gray-500 line-clamp-2 mt-1">{rec.reason}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Selected Recommendation Detail */}
              <div className="lg:col-span-7 card p-8">
                <div className="mb-6">
                  <span className="text-purple-600 font-medium">{selectedRec.category}</span>
                  <h2 className="text-2xl font-bold mt-2">{selectedRec.title}</h2>
                </div>

                <div className="bg-gray-50 rounded-2xl p-6 mb-8">
                  <p className="text-gray-700 leading-relaxed">{selectedRec.reason}</p>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3">Recommended Action</h4>
                    <button className="purple-btn w-full py-4 text-lg">
                      {selectedRec.action}
                    </button>
                  </div>

                  <div className="border-t pt-6">
                    <h4 className="font-semibold mb-3">Why this matters</h4>
                    <p className="text-gray-600">
                      This recommendation is based on your farm data, current weather in Ede, 
                      your equipment performance, and local market trends.
                    </p>
                  </div>
                </div>

                <div className="mt-10 text-xs text-gray-400">
                  Last updated: Just now • AI Model: AEPGo-v1
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}