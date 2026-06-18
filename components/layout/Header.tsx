'use client';

import { Bell, MapPin, Calendar } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b px-6 sm:px-8 py-4 sm:py-5 flex items-center justify-between">
      {/* Left */}
      <div className="flex items-center gap-3 sm:gap-4 min-w-0">
        <div className="w-10 h-10 sm:w-11 sm:h-11 bg-purple-600 rounded-2xl flex items-center justify-center text-white font-bold flex-shrink-0">
          AY
        </div>
        <div className="min-w-0">
          <h2 className="text-lg sm:text-2xl font-semibold text-gray-800 truncate">
            Welcome back, Amina 👋
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 -mt-0.5 hidden sm:block">
            Power your farm, grow your future.
          </p>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-3 sm:gap-6">
        {/* Location */}
        <div className="hidden md:flex items-center gap-2 bg-gray-100 px-4 py-2.5 rounded-2xl">
          <MapPin size={18} />
          <select className="bg-transparent font-medium focus:outline-none cursor-pointer">
            <option>Kaduna, Nigeria</option>
          </select>
        </div>

        {/* Date */}
        <div className="hidden lg:flex items-center gap-2 bg-gray-100 px-4 py-2.5 rounded-2xl">
          <Calendar size={18} />
          <span className="font-medium">May 5, 2025</span>
        </div>

        {/* Notifications */}
        <div className="relative cursor-pointer p-1 rounded-xl hover:bg-gray-100 transition">
          <Bell size={24} className="text-gray-600" />
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-[10px] font-medium text-white rounded-full flex items-center justify-center">
            4
          </div>
        </div>

        {/* Profile details (desktop) */}
        <div className="hidden md:flex items-center gap-3">
          <div>
            <p className="font-semibold text-sm">Amina Yusuf</p>
            <p className="text-xs text-gray-500 -mt-0.5">Farm Owner</p>
          </div>
        </div>
      </div>
    </header>
  );
}
