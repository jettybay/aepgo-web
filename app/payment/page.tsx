'use client';

import React from 'react';
import Sidebar from '@/components/layout/Sidebar';
import Header from '@/components/layout/Header';

const recentPayments = [
  { date: "15 Apr 2026", amount: "₦128,450.00", status: "Success", method: "Paystack" },
  { date: "15 Mar 2026", amount: "₦345,000.00", status: "Success", method: "Bank Transfer" },
  { date: "15 Feb 2026", amount: "₦210,700.00", status: "Success", method: "USSD" },
];

export default function PaymentsPage() {
  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />

        <main className="flex-1 overflow-auto p-6 lg:p-8 pb-32">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold">Payments</h1>
              <p className="text-gray-600">Manage your Pay-As-You-Go repayments</p>
            </div>

            {/* Outstanding Balance */}
            <div className="bg-gradient-to-br from-purple-600 to-purple-800 text-white rounded-3xl p-8 mb-8 shadow-xl shadow-purple-200">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                  <p className="text-purple-100 font-medium">Total Outstanding Balance</p>
                  <p className="text-4xl md:text-5xl font-bold mt-2">₦3,745,200.50</p>
                  <p className="mt-2">Next payment due: <span className="font-medium">15 May 2026</span></p>
                </div>
                <button className="bg-white text-purple-700 px-10 py-4 rounded-2xl font-semibold hover:bg-purple-50 transition">
                  Make Payment
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Payment Methods */}
              <div className="card p-8">
                <h3 className="text-xl font-semibold mb-6">Make a Payment</h3>
                
                <div className="space-y-4">
                  <div className="p-5 border-2 border-gray-100 rounded-2xl hover:border-purple-300 hover:bg-purple-50/50 transition-all cursor-pointer">
                    💳 Pay with Card (Paystack)
                  </div>
                  <div className="p-5 border-2 border-gray-100 rounded-2xl hover:border-purple-300 hover:bg-purple-50/50 transition-all cursor-pointer">
                    📱 Pay with USSD
                  </div>
                  <div className="p-5 border-2 border-gray-100 rounded-2xl hover:border-purple-300 hover:bg-purple-50/50 transition-all cursor-pointer">
                    💰 Bank Transfer
                  </div>
                </div>

                <div className="mt-8">
                  <label className="block text-sm font-medium text-gray-600 mb-2">Amount to Pay (₦)</label>
                  <input 
                    type="number" 
                    defaultValue="150000" 
                    className="w-full px-5 py-4 text-2xl font-bold border-2 border-gray-100 rounded-2xl focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 transition-all"
                  />
                  <button className="w-full mt-6 purple-btn text-lg py-4">
                    Proceed to Payment
                  </button>
                </div>
              </div>

              {/* Recent Payments */}
              <div className="card p-8">
                <div className="flex justify-between mb-6">
                  <h3 className="text-xl font-semibold">Recent Payments</h3>
                  <button className="text-purple-600 text-sm hover:underline">View all</button>
                </div>

                <div className="space-y-5">
                  {recentPayments.map((payment, i) => (
                    <div key={i} className="flex items-center justify-between py-3 border-b last:border-0">
                      <div>
                        <p className="font-medium">{payment.date}</p>
                        <p className="text-sm text-gray-500">{payment.method}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-lg">{payment.amount}</p>
                        <span className="text-emerald-600 text-xs font-medium">✓ {payment.status}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}