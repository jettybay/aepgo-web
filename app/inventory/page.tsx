"use client";

import { GradeBadge } from "@/components/GradeBadge";
import { StatusBadge } from "@/components/StatusBadge";
import { KpiCard } from "@/components/KpiCard";
import { ImageCarousel } from "@/components/ImageCarousel";
import { initialInventory } from "@/lib/data";
import { inventoryGallery } from "@/lib/gallery";

export default function InventoryPage() {
  const gradeA = initialInventory.filter((i) => i.grade === "A").reduce((s, i) => s + i.qty, 0);
  const gradeB = initialInventory.filter((i) => i.grade === "B").reduce((s, i) => s + i.qty, 0);
  const gradeC = initialInventory.filter((i) => i.grade === "C").reduce((s, i) => s + i.qty, 0);

  return (
    <div className="space-y-6">
      <h1 className="text-xl font-semibold text-gray-900">Inventory</h1>

      <ImageCarousel slides={inventoryGallery} intervalMs={3000} className="mx-auto max-w-3xl" />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <KpiCard label="Grade A" value={gradeA} unit="crates" />
        <KpiCard label="Grade B" value={gradeB} unit="crates" />
        <KpiCard label="Grade C" value={gradeC} unit="crates" />
      </div>

      <div>
        <h2 className="mb-3 text-sm font-semibold text-gray-900">Stock by hub</h2>
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 text-left text-xs font-medium text-gray-500">
                <th className="px-4 py-3">Hub</th>
                <th className="px-4 py-3">Commodity</th>
                <th className="px-4 py-3">Crates</th>
                <th className="px-4 py-3">Grade</th>
                <th className="px-4 py-3">Days in storage</th>
                <th className="px-4 py-3">Condition</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {initialInventory.map((item, idx) => (
                <tr key={idx} className="hover:bg-gray-50/50">
                  <td className="px-4 py-3 text-gray-700">{item.hub}</td>
                  <td className="px-4 py-3 font-medium text-gray-900">{item.commodity}</td>
                  <td className="px-4 py-3 tabular-nums text-gray-700">{item.qty}</td>
                  <td className="px-4 py-3"><GradeBadge grade={item.grade} /></td>
                  <td className="px-4 py-3 text-gray-500">{item.days} day{item.days > 1 ? "s" : ""}</td>
                  <td className="px-4 py-3"><StatusBadge status={item.condition} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

