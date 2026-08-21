"use client";

import Link from "next/link";
import { Plus } from "lucide-react";
import { KpiCard } from "@/components/KpiCard";
import { PriceChart } from "@/components/PriceChart";
import { GradeBadge } from "@/components/GradeBadge";
import { StatusBadge } from "@/components/StatusBadge";
import { Weather } from "@/components/Weather";
import { initialTransactions } from "@/lib/data";

export default function DashboardPage() {
  const recent = [...initialTransactions].reverse().slice(0, 5);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-xl font-semibold text-gray-900">AEPGo Dashboard</h1>
          <p className="text-sm text-gray-500">LAKAJI Corridor · Kano → Lagos</p>
        </div>
        <Link
          href="/transactions"
          className="gold-btn inline-flex items-center gap-2"
        >
          <Plus size={16} />
          Record trade
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <KpiCard label="Today's volume" value={142} unit="crates" delta="↑ 18% vs yesterday" deltaType="up" />
        <KpiCard label="Active traders" value={12} delta="↑ 2 new this week" deltaType="up" />
        <KpiCard label="Hub utilization" value={67} unit="%" delta="↓ 3% from peak" deltaType="down" />
        <KpiCard label="Loss rate (7d)" value={4.2} unit="%" delta="↓ from 48% market avg" deltaType="up" />
      </div>

      <div className="rounded-xl border border-amber-200 bg-white p-5 shadow-sm">
        <h2 className="text-sm font-semibold text-gray-900">Price trend — Tomatoes (₦/basket)</h2>
        <div className="mt-4">
          <PriceChart />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-sm font-semibold text-gray-900">Recent transactions</h2>
            <Link href="/transactions" className="text-sm font-medium text-gray-600 hover:text-gray-900">View all</Link>
          </div>
          <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
            <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 text-left text-xs font-medium text-gray-500">
                <th className="px-4 py-3">Time</th>
                <th className="px-4 py-3">Trader</th>
                <th className="px-4 py-3">Commodity</th>
                <th className="px-4 py-3">Qty</th>
                <th className="px-4 py-3">Grade</th>
                <th className="px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {recent.map((tx) => (
                <tr key={tx.id} className="hover:bg-gray-50/50">
                  <td className="px-4 py-3 text-gray-500">{tx.time}</td>
                  <td className="px-4 py-3 font-medium text-gray-900">{tx.trader.split(" — ")[0]}</td>
                  <td className="px-4 py-3 text-gray-700">{tx.commodity}</td>
                  <td className="px-4 py-3 tabular-nums text-gray-700">{tx.qty}</td>
                  <td className="px-4 py-3"><GradeBadge grade={tx.grade} /></td>
                  <td className="px-4 py-3"><StatusBadge status={tx.status} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-gray-900 mb-3">Weather & Conditions</h2>
          <Weather />
        </div>
        </div>
      </div>
    </div>
  );
}

