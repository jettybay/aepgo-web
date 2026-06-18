'use client';

import React from 'react';
import Sidebar from '@/components/layout/Sidebar';
import Header from '@/components/layout/Header';

const contracts = [
  { id: "CON-2025-041", type: "Equipment Financing", status: "Active", amount: "€330.00", endDate: "15 Nov 2025" },
  { id: "CON-2025-012", type: "Maize Offtake Agreement", status: "Pending", amount: "€450.00", endDate: "30 Jun 2025" },
  { id: "CON-2024-089", type: "Solar Asset Lease", status: "Completed", amount: "€180.00", endDate: "10 Mar 2025" },
];

export default function ContractsPage() {
  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />

        <main className="flex-1 overflow-auto p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold mb-2">Contracts</h1>
            <p className="text-gray-600 mb-8">All your agreements and financing contracts</p>

            <div className="card p-8">
              <div className="overflow-x-auto">
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