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
  { icon: Zap, label: "My Smart Hub", href: "/hubs" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="hidden lg:flex w-72 bg-gradient-to-b from-amber-400 via-amber-500 to-amber-600 text-green-950 flex-col h-screen fixed left-0 top-0">
      {/* Logo */}
      <div className="p-6 flex items-center gap-3 border-b border-amber-300/80">
        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center flex-shrink-0">
          <Image
            src="/images/aepgo-logo.png"
            alt="AEPGo Logo"
            width={48}
            height={48}
            className="w-10 h-10 object-contain"
          />
        </div>
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-green-950">AEPGo</h1>
          <p className="text-green-900/75 text-xs -mt-1">Agro-Energy Pay-as-you-Go</p>
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
                  ? "bg-green-950 text-white font-semibold shadow-lg"
                  : "text-green-950 hover:bg-amber-300"
              }`}
            >
              <Icon size={22} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Bottom Promo */}
      <div className="p-6 border-t border-amber-300/80 mt-auto">
        <div className="bg-white/35 backdrop-blur-sm rounded-3xl p-5 text-sm border border-white/50">
          <p className="font-semibold text-green-950">Smart Hub Network</p>
            <p className="text-green-900/75 text-xs mt-2 leading-snug">
            Monitor your automated storage hub with real-time IoT sensors.
          </p>
          <Link
            href="/hubs"
            className="mt-4 w-full bg-green-950 text-white font-semibold py-3 rounded-2xl hover:bg-green-900 transition block text-center"
          >
            Open Smart Hub
          </Link>
        </div>
      </div>

      {/* Logout (Bottom) */}
      <div className="p-6 border-t border-amber-300/80">
        <button className="flex items-center gap-3 w-full px-4 py-3 text-green-950/80 hover:text-green-950 hover:bg-amber-300 rounded-xl transition">
          <LogOut size={20} />
          <span className="text-sm font-medium">Logout</span>
        </button>
      </div>
    </div>
  );
}
