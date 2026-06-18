'use client';

import React from 'react';
import Sidebar from '@/components/layout/Sidebar';
import Header from '@/components/layout/Header';

const contracts = [
  { id: "CON-2026-041", type: "Equipment Financing", status: "Active", amount: "₦2,450,000.00", endDate: "15 Jan 2026" },
  { id: "CON-2026-012", type: "Maize Offtake Agreement", status: "Pending", amount: "₦1,120,800.00", endDate: "10 Feb 2026" },
  { id: "CON-2024-089", type: "Solar Asset Lease", status: "Completed", amount: "₦740,500.00", endDate: "23 Mar 2026" },
];

export default function ContractsPage() {
  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <Header />

        <main className="flex-1 overflow-auto p-4 md:p-8 pb-32">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold mb-2">Contracts</h1>
            <p className="text-gray-600 mb-8">All your agreements and financing contracts</p>
            
            <div className="bg-transparent md:bg-white md:card md:p-8">
              {/* Mobile View: Card List */}
              <div className="md:hidden space-y-4">
                {contracts.map((contract) => (
                  <div key={contract.id} className="p-5 border border-gray-100 rounded-2xl bg-white shadow-sm hover:border-purple-200 transition-all active:scale-[0.98]">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <p className="text-[10px] font-bold text-purple-500 uppercase tracking-widest mb-1">{contract.id}</p>
                        <h4 className="font-bold text-gray-900 leading-tight">{contract.type}</h4>
                      </div>
                      <span className={`px-3 py-1.5 rounded-full text-xs font-bold ${
                        contract.status === 'Active' ? 'bg-emerald-100 text-emerald-700' :
                        contract.status === 'Pending' ? 'bg-amber-100 text-amber-700' : 'bg-gray-100 text-gray-600'
                      }`}>
                        {contract.status}
                      </span>
                    </div>
                    
                    <div className="flex justify-between items-end border-t border-gray-50 pt-4 mt-4">
                      <div>
                        <p className="text-[10px] text-gray-400 font-semibold uppercase mb-0.5">Amount</p>
                        <p className="font-bold text-lg text-gray-900">{contract.amount}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[10px] text-gray-400 font-semibold uppercase mb-0.5">End Date</p>
                        <p className="text-sm font-bold text-gray-700">{contract.endDate}</p>
                      </div>
                    </div>
                    <button className="w-full mt-5 py-3.5 text-sm font-bold text-purple-700 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors">
                      View Details
                    </button>
                  </div>
                ))}
              </div>

              {/* Desktop View: Table */}
              <div className="hidden md:block overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-4 font-medium">Contract ID</th>
                      <th className="text-left py-4 font-medium">Type</th>
                      <th className="text-left py-4 font-medium">Amount</th>
                      <th className="text-left py-4 font-medium">End Date</th>
                      <th className="text-left py-4 font-medium">Status</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {contracts.map((contract) => (
                      <tr key={contract.id} className="border-b last:border-0 hover:bg-gray-50">
                        <td className="py-5 font-medium">{contract.id}</td>
                        <td className="py-5 text-gray-700">{contract.type}</td>
                        <td className="py-5 font-semibold">{contract.amount}</td>
                        <td className="py-5 text-gray-600">{contract.endDate}</td>
                        <td className="py-5">
                          <span className={`px-4 py-1.5 rounded-full text-sm font-medium ${
                            contract.status === 'Active' ? 'bg-emerald-100 text-emerald-700' :
                            contract.status === 'Pending' ? 'bg-amber-100 text-amber-700' : 'bg-gray-100 text-gray-600'
                          }`}>
                            {contract.status}
                          </span>
                        </td>
                        <td>
                          <button className="text-purple-600 hover:underline">View</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}