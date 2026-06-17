'use client';

import { Bell, MapPin, Calendar } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white border-b px-8 py-5 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <h2 className="text-2xl font-semibold text-gray-800">Welcome back, Amina! 👋</h2>
      </div>

      <div className="flex items-center gap-6">
        {/* Location */}
        <div className="flex items-center gap-2 bg-gray-100 px-4 py-2.5 rounded-2xl">
          <MapPin size={18} />
          <select className="bg-transparent font-medium focus:outline-none cursor-pointer">
            <option>Kaduna, Nigeria</option>
          </select>
        </div>

        {/* Date */}
        <div className="flex items-center gap-2 bg-gray-100 px-4 py-2.5 rounded-2xl">
          <Calendar size={18} />
          <span className="font-medium">May 5, 2025</span>
        </div>

        {/* Notifications */}
        <div className="relative cursor-pointer">
          <Bell size={24} className="text-gray-600" />
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-[10px] font-medium text-white rounded-full flex items-center justify-center">
            4
          </div>
        </div>

        {/* Profile */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-purple-600 rounded-2xl flex items-center justify-center text-white font-bold">
            AY
          </div>
          <div>
            <p className="font-semibold text-sm">Amina Yusuf</p>
            <p className="text-xs text-gray-500 -mt-0.5">Farm Owner</p>
          </div>
        </div>
      </div>
    </header>
  );
}