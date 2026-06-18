'use client';

import React from 'react';
import Sidebar from '@/components/layout/Sidebar';
import Header from '@/components/layout/Header';

export default function SettingsPage() {
  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />

        <main className="flex-1 overflow-auto p-6 lg:p-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">Settings</h1>

            <div className="card p-8 space-y-10">
              <div>
                <h3 className="font-semibold mb-4">Profile Information</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm text-gray-600">Full Name</label>
                    <input defaultValue="Amina Yusuf" className="w-full mt-2 px-5 py-3 border rounded-2xl" />
                  </div>
                  <div>
                    <label className="text-sm text-gray-600">Phone Number</label>
                    <input defaultValue="+234 803 123 4567" className="w-full mt-2 px-5 py-3 border rounded-2xl" />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-4">Farm Details</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm text-gray-600">Farm Location</label>
                    <input defaultValue="Kaduna, Nigeria" className="w-full mt-2 px-5 py-3 border rounded-2xl" />
                  </div>
                  <div>
                    <label className="text-sm text-gray-600">Main Crops</label>
                    <input defaultValue="Maize, Beans, Millet" className="w-full mt-2 px-5 py-3 border rounded-2xl" />
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t">
                <button className="purple-btn w-full py-4">Save Changes</button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}