'use client';

import { Bell, MapPin, Calendar } from 'lucide-react';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b px-4 sm:px-8 py-3 sm:py-5 flex items-center justify-between gap-2 sm:gap-4">
      {/* Left */}
      <div className="flex items-center gap-2 sm:gap-4 min-w-0 flex-shrink-0">
        {/* User Initials (Desktop) - Replaces logo when Sidebar is visible */}
        <div className="hidden lg:flex w-11 h-11 bg-purple-100 text-purple-700 font-bold items-center justify-center rounded-2xl text-lg">
          AS
        </div>

        {/* Logo (Mobile/Small Devices) */}
        <Image 
          src="/images/aepgo-logo.png" 
          alt="AEPGO Logo" 
          width={44} 
          height={44} 
          className="lg:hidden w-9 h-9 sm:w-11 sm:h-11 rounded-lg sm:rounded-2xl object-contain"
        />
        <div className="min-w-0">
          <h2 className="text-xs sm:text-2xl font-semibold text-gray-800 truncate max-w-[80px] sm:max-w-none">
            Hi, Amina 👋
          </h2>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-1.5 sm:gap-6 min-w-0">
        {/* Location */}
        <div className="flex items-center gap-1 sm:gap-2 bg-gray-100 px-2 sm:px-4 py-1.5 sm:py-2.5 rounded-xl sm:rounded-2xl">
          <MapPin size={14} className="sm:w-[18px] text-purple-600" />
          <select className="bg-transparent text-[10px] sm:text-base font-medium focus:outline-none cursor-pointer max-w-[50px] sm:max-w-none">
            <option>Ede, Nigeria</option>
          </select>
        </div>

        {/* Date */}
        <div className="flex items-center gap-1 sm:gap-2 bg-gray-100 px-2 sm:px-4 py-1.5 sm:py-2.5 rounded-xl sm:rounded-2xl">
          <Calendar size={14} className="sm:w-[18px] text-purple-600" />
          <span className="font-medium text-[10px] sm:text-base whitespace-nowrap">May 5</span>
        </div>

        {/* Notifications */}
        <div className="relative cursor-pointer p-1 rounded-lg sm:rounded-xl hover:bg-gray-100 transition flex-shrink-0">
          <Bell size={18} className="text-gray-600 sm:w-6" />
          <div className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-red-500 text-[8px] sm:text-[10px] font-medium text-white rounded-full flex items-center justify-center">
            4
          </div>
        </div>

        {/* Profile details (desktop) */}
        <div className="hidden sm:flex items-center gap-3 flex-shrink-0">
          <div>
            <p className="font-semibold text-xs sm:text-sm">Amina Shitu</p>
            <p className="hidden md:block text-xs text-gray-500 -mt-0.5">Farm Owner</p>
          </div>
        </div>
      </div>
    </header>
  );
}
