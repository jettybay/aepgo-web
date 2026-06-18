'use client';

import React, { useState } from 'react';
import Sidebar from '@/components/layout/Sidebar';
import Header from '@/components/layout/Header';
import EquipmentCard from '@/components/dashboard/EquipmentCard';

const equipmentList = [
  {
    id: 1,
    name: "Solar Irrigation Pump",
    sn: "AEPGO-IRP-0012",
    type: "Irrigation",
    dailyUsage: "5.6 kWh",
    status: 87,
    location: "Ede, Nigeria",
    lastMaintenance: "12 Apr 2025",
    health: "Excellent"
  },
  {
    id: 2,
    name: "Solar Milling Machine",
    sn: "AEPGO-SMM-0007",
    type: "Processing",
    dailyUsage: "3.2 kWh",
    status: 74,
    location: "Ede, Nigeria",
    lastMaintenance: "28 Apr 2025",
    health: "Good"
  },
  {
    id: 3,
    name: "Solar Crop Dryer",
    sn: "AEPGO-SCD-0003",
    type: "Drying",
    dailyUsage: "2.1 kWh",
    status: 68,
    location: "Ede, Nigeria",
    lastMaintenance: "05 May 2025",
    health: "Fair"
  },
];

export default function EquipmentPage() {
  const [selectedEquipment, setSelectedEquipment] = useState(equipmentList[0]);

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />

        <main className="flex-1 overflow-auto p-6 lg:p-8 pb-32">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h1 className="text-3xl font-bold">My Equipment</h1>
                <p className="text-gray-600">Manage and monitor all your solar assets</p>
              </div>
              <button className="purple-btn flex items-center gap-2">
                + Add New Equipment
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Equipment List */}
              <div className="lg:col-span-5">
                <div className="card p-6">
                  <div className="mb-6">
                    <input
                      type="text"
                      placeholder="Search equipment..."
                      className="w-full px-5 py-3 bg-gray-100 rounded-2xl focus:outline-none"
                    />
                  </div>

                  <div className="space-y-4 max-h-[calc(100vh-280px)] overflow-auto pr-2">
                    {equipmentList.map((eq) => (
                      <div
                        key={eq.id}
                        onClick={() => setSelectedEquipment(eq)}
                        className={`p-4 rounded-2xl cursor-pointer transition-all ${
                          selectedEquipment.id === eq.id 
                            ? 'bg-purple-50 border border-purple-200' 
                            : 'hover:bg-gray-50'
                        }`}
                      >
                        <EquipmentCard 
                          name={eq.name} 
                          sn={eq.sn} 
                          usage={eq.dailyUsage} 
                          status={eq.status} 
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Equipment Details */}
              <div className="lg:col-span-7 card p-8">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h2 className="text-2xl font-bold">{selectedEquipment.name}</h2>
                    <p className="text-gray-500">Serial: {selectedEquipment.sn}</p>
                  </div>
                  <div className="px-5 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
                    {selectedEquipment.health}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="bg-gray-50 rounded-2xl p-6">
                    <p className="text-gray-500 text-sm">Daily Usage</p>
                    <p className="text-4xl font-bold mt-2">{selectedEquipment.dailyUsage}</p>
                  </div>
                  <div className="bg-gray-50 rounded-2xl p-6">
                    <p className="text-gray-500 text-sm">Operational Status</p>
                    <p className="text-4xl font-bold mt-2 text-emerald-600">{selectedEquipment.status}%</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <p className="text-gray-500 mb-2">Location</p>
                    <p className="font-medium">{selectedEquipment.location}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-2">Last Maintenance</p>
                    <p className="font-medium">{selectedEquipment.lastMaintenance}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-2">Type</p>
                    <p className="font-medium">{selectedEquipment.type}</p>
                  </div>
                </div>

                <div className="mt-10 flex gap-4">
                  <button className="flex-1 py-4 bg-purple-600 text-white font-semibold rounded-2xl hover:bg-purple-700">
                    View Performance History
                  </button>
                  <button className="flex-1 py-4 border border-gray-300 font-semibold rounded-2xl hover:bg-gray-50">
                    Request Maintenance
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}