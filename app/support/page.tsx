'use client';

import React from 'react';
import Sidebar from '@/components/layout/Sidebar';
import Header from '@/components/layout/Header';

export default function SupportPage() {
  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />

        <main className="flex-1 overflow-auto p-6 lg:p-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-2">Support</h1>
            <p className="text-gray-600 mb-10">How can we help you today?</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card p-8 text-center hover:shadow-md transition">
                <div className="text-5xl mb-6">📞</div>
                <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                <p className="text-2xl font-bold text-purple-600">0800-AEPGO-NG</p>
                <p className="text-sm text-gray-500 mt-1">Available 8am - 6pm</p>
              </div>

              <div className="card p-8 text-center hover:shadow-md transition">
                <div className="text-5xl mb-6">💬</div>
                <h3 className="text-xl font-semibold mb-2">Live Chat</h3>
                <p className="text-purple-600 font-medium">Chat with our AI + Human support</p>
                <button className="mt-6 purple-btn">Start Chat</button>
              </div>
            </div>

            <div className="card p-8 mt-8">
              <h3 className="font-semibold mb-6">Common Questions</h3>
              <div className="space-y-4 text-sm">
                <div className="p-4 border rounded-2xl">How do I make a payment?</div>
                <div className="p-4 border rounded-2xl">My equipment is not working</div>
                <div className="p-4 border rounded-2xl">How do I add a new farmer to my cooperative?</div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}