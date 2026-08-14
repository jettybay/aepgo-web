"use client";

import { useState } from "react";
import { GradeBadge } from "@/components/GradeBadge";
import { Toast } from "@/components/Toast";
import { formatNaira } from "@/lib/utils";
import { initialTransactions, traders, commodities, hubNames } from "@/lib/data";
import type { Transaction } from "@/types";

let txCounter = 1001;

export default function TransactionsPage() {
  const [transactions, setTransactions] = useState<Transaction[]>(initialTransactions);
  const [toast, setToast] = useState({ message: "", visible: false });

  const [form, setForm] = useState({
    trader: traders[0],
    commodity: commodities[0],
    qty: 10,
    price: 12500,
    grade: "A" as "A" | "B" | "C",
    hub: hubNames[0],
  });

  function showToast(message: string) {
    setToast({ message, visible: true });
  }

  function recordTx() {
    const now = new Date();
    const time = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
    const newTx: Transaction = {
      id: txCounter++,
      time,
      trader: form.trader,
      commodity: form.commodity,
      qty: Number(form.qty),
      price: Number(form.price),
      grade: form.grade,
      hub: form.hub,
      status: "Confirmed",
    };
    setTransactions((prev) => [...prev, newTx]);
    showToast(`Transaction #${newTx.id} recorded`);
  }

  return (
    <div className="space-y-6">
      <h1 className="text-xl font-semibold text-gray-900">Record transaction</h1>

      <div className="rounded-xl border border-gray-200 bg-white p-5">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-gray-500">Trader name</label>
            <select
              className="rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-900 outline-none focus:ring-2 focus:ring-gray-900/10"
              value={form.trader}
              onChange={(e) => setForm({ ...form, trader: e.target.value })}
            >
              {traders.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-gray-500">Commodity</label>
            <select
              className="rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-900 outline-none focus:ring-2 focus:ring-gray-900/10"
              value={form.commodity}
              onChange={(e) => setForm({ ...form, commodity: e.target.value })}
            >
              {commodities.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-gray-500">Quantity (crates)</label>
            <input
              type="number"
              min={1}
              className="rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-900 outline-none focus:ring-2 focus:ring-gray-900/10"
              value={form.qty}
              onChange={(e) => setForm({ ...form, qty: Number(e.target.value) })}
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-gray-500">Price per crate (₦)</label>
            <input
              type="number"
              min={1}
              className="rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-900 outline-none focus:ring-2 focus:ring-gray-900/10"
              value={form.price}
              onChange={(e) => setForm({ ...form, price: Number(e.target.value) })}
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-gray-500">Quality grade</label>
            <select
              className="rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-900 outline-none focus:ring-2 focus:ring-gray-900/10"
              value={form.grade}
              onChange={(e) => setForm({ ...form, grade: e.target.value as "A" | "B" | "C" })}
            >
              <option value="A">Grade A — Premium</option>
              <option value="B">Grade B — Standard</option>
              <option value="C">Grade C — Fair</option>
            </select>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-gray-500">Hub location</label>
            <select
              className="rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-900 outline-none focus:ring-2 focus:ring-gray-900/10"
              value={form.hub}
              onChange={(e) => setForm({ ...form, hub: e.target.value })}
            >
              {hubNames.map((h) => (
                <option key={h}>{h}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-5 flex gap-3">
          <button
            onClick={recordTx}
            className="rounded-lg bg-gray-900 px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            Save transaction
          </button>
          <button
            onClick={() => setForm({ trader: traders[0], commodity: commodities[0], qty: 10, price: 12500, grade: "A", hub: hubNames[0] })}
            className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
          >
            Clear
          </button>
        </div>
      </div>

      <div>
        <h2 className="mb-3 text-sm font-semibold text-gray-900">Transaction history</h2>
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 text-left text-xs font-medium text-gray-500">
                <th className="px-4 py-3">ID</th>
                <th className="px-4 py-3">Time</th>
                <th className="px-4 py-3">Trader</th>
                <th className="px-4 py-3">Commodity</th>
                <th className="px-4 py-3">Qty</th>
                <th className="px-4 py-3">Total</th>
                <th className="px-4 py-3">Grade</th>
                <th className="px-4 py-3">Hub</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[...transactions].reverse().map((tx) => (
                <tr key={tx.id} className="hover:bg-gray-50/50">
                  <td className="px-4 py-3 font-mono text-xs text-gray-500">#{tx.id}</td>
                  <td className="px-4 py-3 text-gray-500">{tx.time}</td>
                  <td className="px-4 py-3 font-medium text-gray-900">{tx.trader}</td>
                  <td className="px-4 py-3 text-gray-700">{tx.commodity}</td>
                  <td className="px-4 py-3 tabular-nums text-gray-700">{tx.qty}</td>
                  <td className="px-4 py-3 tabular-nums font-medium text-gray-900">{formatNaira(tx.qty * tx.price)}</td>
                  <td className="px-4 py-3"><GradeBadge grade={tx.grade} /></td>
                  <td className="px-4 py-3 text-gray-500">{tx.hub}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Toast message={toast.message} visible={toast.visible} onClose={() => setToast({ ...toast, visible: false })} />
    </div>
  );
}
