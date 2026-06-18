'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Home,
  Package,
  CreditCard,
  FileText,
  BarChart3,
  Users,
  Headphones,
  Settings,
} from 'lucide-react';

const menuItems = [
  { icon: Home, label: 'Dashboard', href: '/dashboard' },
  { icon: Package, label: 'Equipment', href: '/equipment' },
  { icon: CreditCard, label: 'Payments', href: '/payment' },
  { icon: FileText, label: 'Advisor', href: '/advisor' },
  { icon: Users, label: 'Farm Activity', href: '/dashboard/activity' },
  { icon: Headphones, label: 'Support', href: '/dashboard/support' },
  { icon: Settings, label: 'Settings', href: '/dashboard/settings' },
  { icon: BarChart3, label: 'Contracts', href: '/dashboard/contracts' },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <>
      {/* Desktop sidebar */}
      <div className="hidden lg:flex w-72 bg-purple-700 text-white flex-col h-full">
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

      {/* Mobile bottom tabs */}
      <div className="lg:hidden fixed inset-x-0 bottom-0 z-50">
        {/* backdrop */}
        <div className="h-16 bg-gradient-to-t from-black/35 via-black/0 to-black/0" />

        <div className="mx-4 mb-3 rounded-3xl bg-white/95 shadow-[0_20px_60px_-15px_rgba(88,27,135,0.35)] border border-purple-100 backdrop-blur">
          <nav className="grid grid-cols-4">
            {menuItems.slice(0, 4).map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`flex flex-col items-center justify-center gap-1 py-3 rounded-3xl transition-all select-none ${
                    isActive
                      ? 'text-purple-700'
                      : 'text-gray-600 hover:text-purple-700'
                  }`}
                >
                  <span
                    className={`p-2 rounded-2xl transition-all ${
                      isActive ? 'bg-purple-50 text-purple-700' : 'bg-transparent'
                    }`}
                  >
                    <Icon size={22} />
                  </span>
                  <span className="text-[11px] font-semibold leading-none">
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* quick extra actions row */}
          <div className="px-3 pb-3 -mt-1">
            <div className="grid grid-cols-4 gap-2">
              {menuItems.slice(4, 8).map((item) => {
                const isActive = pathname === item.href;
                const Icon = item.icon;
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`flex items-center justify-center rounded-2xl px-2 py-2 text-[11px] font-semibold transition-all ${
                      isActive
                        ? 'bg-purple-600 text-white shadow-sm'
                        : 'bg-purple-50 text-purple-700 hover:bg-purple-100'
                    }`}
                  >
                    <Icon size={16} />
                    <span className="ml-1 hidden sm:inline">{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
