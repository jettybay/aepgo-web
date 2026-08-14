"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BarChart3,
  Package,
  ShoppingCart,
  Zap,
  TrendingUp,
  LogOut,
} from "lucide-react";

const menuItems = [
  { icon: BarChart3, label: "Dashboard", href: "/" },
  { icon: TrendingUp, label: "Transactions", href: "/transactions" },
  { icon: Package, label: "Inventory", href: "/inventory" },
  { icon: ShoppingCart, label: "Marketplace", href: "/marketplace" },
  { icon: Zap, label: "Smart Hubs", href: "/hubs" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="hidden lg:flex w-72 bg-gradient-to-b from-purple-700 to-purple-800 text-white flex-col h-screen fixed left-0 top-0">
      {/* Logo */}
      <div className="p-6 flex items-center gap-3 border-b border-purple-600">
        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center flex-shrink-0">
          <Image
            src="/images/AEPGo-logo.png"
            alt="AEPGo Logo"
            width={48}
            height={48}
            className="w-10 h-10 object-contain"
          />
        </div>
        <div>
          <h1 className="text-2xl font-bold tracking-tight">AEPGo</h1>
          <p className="text-purple-200 text-xs -mt-1">Agro-Energy</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          return (
            <Link
              key={item.label}
              href={item.href}
              className={`flex items-center gap-3 px-5 py-3.5 rounded-2xl text-[15px] transition-all ${
                isActive
                  ? "bg-white text-purple-700 font-semibold shadow-lg"
                  : "text-purple-100 hover:bg-purple-600"
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
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-5 text-sm border border-purple-500/20">
          <p className="font-semibold text-white">Smart Hub Network</p>
          <p className="text-purple-200 text-xs mt-2 leading-snug">
            Monitor 4 automated storage hubs with real-time IoT sensors.
          </p>
          <Link
            href="/hubs"
            className="mt-4 w-full bg-white text-purple-700 font-semibold py-3 rounded-2xl hover:bg-purple-50 transition block text-center"
          >
            View Hubs
          </Link>
        </div>
      </div>

      {/* Logout (Bottom) */}
      <div className="p-6 border-t border-purple-600">
        <button className="flex items-center gap-3 w-full px-4 py-3 text-purple-100 hover:text-white hover:bg-purple-600 rounded-xl transition">
          <LogOut size={20} />
          <span className="text-sm font-medium">Logout</span>
        </button>
      </div>
    </div>
  );
}
