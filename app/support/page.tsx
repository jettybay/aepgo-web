'use client';

import React from 'react';
import Sidebar from '@/components/layout/Sidebar';
import Header from '@/components/layout/Header';
import { Phone, MessageSquare, ChevronRight, HelpCircle } from 'lucide-react';

export default function SupportPage() {
  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />

        <main className="flex-1 overflow-auto p-6 lg:p-8 pb-32">
          <div className="max-w-4xl mx-auto">
            <div className="mb-10">
              <h1 className="text-3xl font-bold">Support Center</h1>
              <p className="text-gray-600">We're here to help you power your farm efficiently.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card p-8 text-center hover:shadow-xl hover:shadow-purple-100 transition-all border-2 border-transparent hover:border-purple-100 group">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600 mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Phone size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">Call Support</h3>
                <p className="text-2xl font-bold text-purple-700 mb-2">0800-AEPGO-NG</p>
                <p className="text-sm text-gray-500">Mon - Fri • 8am - 6pm</p>
              </div>

              <div className="card p-8 text-center hover:shadow-xl hover:shadow-purple-100 transition-all border-2 border-transparent hover:border-purple-100 group">
                <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-purple-200">
                  <MessageSquare size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">Live Chat</h3>
                <p className="text-gray-600 mb-6">Instant support from our AI & experts</p>
                <button className="purple-btn w-full py-3.5">Start Conversation</button>
              </div>
            </div>

            <div className="card p-8 mt-8">
              <div className="flex items-center gap-2 mb-8">
                <HelpCircle className="text-purple-600" size={24} />
                <h3 className="text-xl font-bold">Frequently Asked Questions</h3>
              </div>
              <div className="space-y-3">
                {['How do I make a payment?', 'My equipment is not working', 'How do I add a new farmer to my cooperative?'].map((q, i) => (
                  <div key={i} className="flex items-center justify-between p-5 border-2 border-gray-50 rounded-2xl hover:bg-gray-50 cursor-pointer transition-colors group">
                    <span className="font-medium text-gray-700">{q}</span>
                    <ChevronRight size={18} className="text-gray-400 group-hover:text-purple-600 transition-colors" />
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