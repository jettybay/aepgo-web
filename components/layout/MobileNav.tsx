"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BarChart3,
  Package,
  ShoppingCart,
  Zap,
  TrendingUp,
} from "lucide-react";

const menuItems = [
  { icon: BarChart3, label: "Dashboard", href: "/" },
  { icon: TrendingUp, label: "Transactions", href: "/transactions" },
  { icon: Package, label: "Inventory", href: "/inventory" },
  { icon: ShoppingCart, label: "Marketplace", href: "/marketplace" },
  { icon: Zap, label: "Hubs", href: "/hubs" },
];

export function MobileNav() {
  const pathname = usePathname();

  return (
    <div className="lg:hidden fixed inset-x-0 bottom-0 z-50">
      {/* Backdrop gradient */}
      <div className="h-20 bg-gradient-to-t from-black/40 via-black/0 to-black/0 pointer-events-none" />

      {/* Navigation bar */}
      <div className="mx-4 mb-4 pb-safe rounded-3xl bg-gradient-to-r from-amber-400 to-amber-500 shadow-2xl border border-amber-300">
        <div className="flex items-center justify-around py-3">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`flex flex-col items-center gap-1.5 px-3 py-2 rounded-2xl transition-all ${
                  isActive
                    ? "text-green-950 font-bold"
                    : "text-green-950/70 hover:text-green-950"
                }`}
              >
                <Icon size={24} />
                <span className="text-[10px] font-semibold">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
