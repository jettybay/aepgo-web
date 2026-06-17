'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Home, Package, CreditCard, FileText, BarChart3, 
  Users, Headphones, Settings 
} from 'lucide-react';

const menuItems = [
  { icon: Home, label: 'Dashboard', href: '/dashboard' },
  { icon: Package, label: 'Equipment', href: '/dashboard/equipment' },
  { icon: CreditCard, label: 'Payments', href: '/dashboard/payments' },
  { icon: FileText, label: 'Contracts', href: '/dashboard/contracts' },
  { icon: BarChart3, label: 'Usage & Monitoring', href: '/dashboard/monitoring' },
  { icon: Users, label: 'Farm Activity', href: '/dashboard/activity' },
  { icon: Headphones, label: 'Support', href: '/dashboard/support' },
  { icon: Settings, label: 'Settings', href: '/dashboard/settings' },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-72 bg-purple-700 text-white flex flex-col h-full">
      {/* Logo */}
      <div className="p-6 flex items-center gap-3 border-b border-purple-600">
        <div className="w-11 h-11 bg-white rounded-2xl flex items-center justify-center text-3xl">
          ☀️
        </div>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">AEPGo</h1>
          <p className="text-purple-200 text-sm -mt-1">AgroEnergy Pay-as-you-Go</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-1">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          return (
            <Link
              key={item.label}
              href={item.href}
              className={`flex items-center gap-3 px-5 py-3.5 rounded-2xl text-[15px] transition-all ${
                isActive 
                ? 'bg-white text-purple-700 font-semibold shadow-sm' 
                : 'hover:bg-purple-600 text-purple-100'
              }`}
            >
              <Icon size={22} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Bottom Promo */}
      <div className="p-6 border-t border-purple-600 mt-auto">
        <div className="bg-purple-600/30 rounded-3xl p-5 text-sm">
          <p className="font-medium">Need Equipment?</p>
          <p className="text-purple-200 text-xs mt-1 leading-snug">
            Browse our range of solar productive-use equipment.
          </p>
          <button className="mt-4 w-full bg-white text-purple-700 font-semibold py-3 rounded-2xl hover:bg-purple-50 transition">
            Browse Equipment
          </button>
        </div>
      </div>
    </div>
  );
}