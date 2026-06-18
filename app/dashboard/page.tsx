'use client';

import React from 'react';
import Link from 'next/link';

import Sidebar from '@/components/layout/Sidebar';
import Header from '@/components/layout/Header';
import MetricCard from '@/components/dashboard/MetricCard';
import EquipmentCard from '@/components/dashboard/EquipmentCard';
import UsageChart from '@/components/dashboard/UsageChart';
import RepaymentChart from '@/components/dashboard/RepaymentChart';
import WeatherWidget from '@/components/dashboard/WeatherWidget';

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />

        <main className="flex-1 overflow-auto p-6 lg:p-8 pb-32">
          <div className="max-w-7xl mx-auto">

            {/* Metrics Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
              <MetricCard 
                title="Total Outstanding" 
                value="₦2,560,700.00" 
                subtitle="Next due 15 May 2026"
                color="purple"
                action="Make Payment"
              />
              <MetricCard 
                title="Active Equipment" 
                value="3" 
                subtitle="100% Operational"
                trend="+0"
              />
              <MetricCard 
                title="Total Paid" 
                value="₦890,200.00" 
                subtitle="+18.5% vs last year"
                trend="+18.5"
              />
              <MetricCard 
                title="Energy Generated" 
                value="256.4 kWh" 
                subtitle="+22.4% vs last month"
                trend="+22.4"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* My Equipment */}
              <div className="lg:col-span-7 card p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-semibold">My Equipment</h3>
                  <Link href="/equipment" className="text-purple-600 hover:underline">
                    View all
                  </Link>
                </div>
                
                <div className="space-y-5">
                  <EquipmentCard 
                    name="Solar Irrigation Pump"
                    sn="AEPGO-IRP-0012"
                    usage="5.6 kWh/day"
                    status={87}
                  />
                  <EquipmentCard 
                    name="Solar Milling Machine"
                    sn="AEPGO-SMM-0007"
                    usage="3.2 kWh/day"
                    status={74}
                  />
                  <EquipmentCard 
                    name="Solar Crop Dryer"
                    sn="AEPGO-SCD-0003"
                    usage="2.1 kWh/day"
                    status={68}
                  />
                </div>
              </div>

              {/* Repayment Overview*/}
              <div className="lg:col-span-5 card p-6">
                <RepaymentChart />
              </div>
              

              {/* Usage Overview */}
              <div className="lg:col-span-7 card p-6">
                <UsageChart />
              </div>
              

              {/* Weather */}
               <div className="lg:col-span-5 card p-6">
                <WeatherWidget />
             </div>
            
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;