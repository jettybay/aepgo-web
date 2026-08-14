"use client";

import { formatNaira } from "@/lib/utils";
import { buyOrders, sellListings, commodityImages } from "@/lib/data";

export default function MarketplacePage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold text-gray-900">Buyer marketplace</h1>
        <button className="rounded-lg bg-gray-900 px-4 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90">
          Post listing
        </button>
      </div>

      <div>
        <h2 className="mb-3 text-sm font-semibold text-gray-900">Active buy orders</h2>
        <div className="space-y-3">
          {buyOrders.map((o, i) => (
            <div
              key={i}
              className="flex flex-col gap-3 rounded-xl border border-gray-200 bg-white p-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex gap-4 items-start flex-1">
                <img
                  src={commodityImages[o.commodity] || commodityImages.Tomatoes}
                  alt={o.commodity}
                  width={80}
                  height={80}
                  className="h-20 w-20 rounded-lg object-cover flex-shrink-0"
                  loading="lazy"
                />
                <div>
                  <p className="font-medium text-gray-900">
                    {o.commodity} · Grade {o.grade}
                  </p>
                  <p className="text-sm text-gray-500">
                    {o.buyer} · {o.location} · {o.qty} crates
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <p className="text-lg font-semibold tabular-nums text-gray-900">
                  {formatNaira(o.price)}
                  <span className="ml-1 text-xs font-normal text-gray-400">/crate</span>
                </p>
                <button className="rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-700 transition-colors hover:bg-gray-50">
                  Match
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="mb-3 text-sm font-semibold text-gray-900">Available supply</h2>
        <div className="space-y-3">
          {sellListings.map((s, i) => (
            <div
              key={i}
              className="flex flex-col gap-3 rounded-xl border border-gray-200 bg-white p-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex gap-4 items-start flex-1">
                <img
                  src={commodityImages[s.commodity] || commodityImages.Tomatoes}
                  alt={s.commodity}
                  width={80}
                  height={80}
                  className="h-20 w-20 rounded-lg object-cover flex-shrink-0"
                  loading="lazy"
                />
                <div>
                  <p className="font-medium text-gray-900">
                    {s.commodity} · Grade {s.grade}
                  </p>
                  <p className="text-sm text-gray-500">
                    {s.seller} · {s.hub} · {s.qty} crates available
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <p className="text-lg font-semibold tabular-nums text-gray-900">
                  {formatNaira(s.price)}
                  <span className="ml-1 text-xs font-normal text-gray-400">/crate</span>
                </p>
                <button className="rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-700 transition-colors hover:bg-gray-50">
                  Contact
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
