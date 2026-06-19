'use client';

import React, { useMemo, useState } from 'react';
import Image from 'next/image';
import Sidebar from '@/components/layout/Sidebar';
import Header from '@/components/layout/Header';
import { CheckCircle2, CreditCard, MapPin, PlayCircle, Sparkles, Store } from 'lucide-react';

type PlanKey = 'weekly' | 'monthly' | 'custom';

type Equipment = {
  id: string;
  name: string;
  category: string;
  price: number; // base price
  depositHint: string;
  imageSrc: string;
  highlights: string[];
  specs: { label: string; value: string }[];
};

type PurchaseModalState = {
  open: boolean;
  equipmentId: string | null;
  plan: PlanKey;
};

function formatNGN(amount: number) {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    maximumFractionDigits: 0,
  }).format(amount);
}

const plans: Record<PlanKey, { label: string; monthsLabel: string; multiplier: number; note: string }> = {
  weekly: {
    label: 'Weekly Pay-as-you-go',
    monthsLabel: '3–6 months',
    multiplier: 1.15,
    note: 'Spread cost with weekly installments. Suitable for faster onboarding.',
  },
  monthly: {
    label: 'Monthly Pay-as-you-go',
    monthsLabel: '6–12 months',
    multiplier: 1.08,
    note: 'Steady monthly payments with flexible re-scheduling.',
  },
  custom: {
    label: 'Custom Purchase Plan',
    monthsLabel: 'Based on your farm cycle',
    multiplier: 1.0,
    note: 'Work with our team to match your season and cashflow.',
  },
};

export default function InventoryPage() {
  const equipments: Equipment[] = useMemo(
    () => [
      {
        id: 'solar-irrigation-pump',
        name: 'Solar Irrigation Pump',
        category: 'Irrigation',
        price: 650000,
        depositHint: 'Deposit from 15%',
        imageSrc: '/images/Solar Irrigation Pump.png',
        highlights: ['Efficient water delivery', 'Low running cost', 'Built for daily field use'],
        specs: [
          { label: 'Typical coverage', value: '1–2 plots' },
          { label: 'Power source', value: 'Solar PV' },
          { label: 'Water control', value: 'Timed pumping' },
          { label: 'Installation', value: 'Site assessment + mounting' },
        ],
      },
      {
        id: 'solar-flour-mill',
        name: 'Solar Flour Mill Machine',
        category: 'Processing',
        price: 980000,
        depositHint: 'Deposit from 20%',
        imageSrc: '/images/Solar-flour-mill-machine-1000x1000.jpg',
        highlights: ['Consistent milling output', 'Quiet operation', 'Optimized for small businesses'],
        specs: [
          { label: 'Output focus', value: 'Grains & flour' },
          { label: 'Power source', value: 'Solar PV' },
          { label: 'Operation', value: 'Daytime milling' },
          { label: 'Setup', value: 'Delivery + commissioning' },
        ],
      },
      {
        id: 'solar-crop-dryer',
        name: 'Solar Crop Dryer (Tunnel Dryer)',
        category: 'Drying',
        price: 1250000,
        depositHint: 'Deposit from 25%',
        imageSrc:
          '/images/Solar Crop Dryer Grain-Fruit-Vegetable-Fish-Meat-Greenhouse-Dehydrator-Tunnel-Solar-Dryer.webp',
        highlights: ['Faster drying cycles', 'Improved product quality', 'Works across seasons'],
        specs: [
          { label: 'Drying type', value: 'Tunnel greenhouse' },
          { label: 'Suitable products', value: 'Crops, fish, meat' },
          { label: 'Control', value: 'Ventilation-based airflow' },
          { label: 'Turnkey', value: 'Training + guide provided' },
        ],
      },
    ],
    []
  );

  const [query, setQuery] = useState('');
  const [modal, setModal] = useState<PurchaseModalState>({ open: false, equipmentId: null, plan: 'monthly' });

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return equipments;
    return equipments.filter((e) => {
      return (
        e.name.toLowerCase().includes(q) ||
        e.category.toLowerCase().includes(q) ||
        String(e.price).includes(q)
      );
    });
  }, [equipments, query]);

  const selected = useMemo(() => equipments.find((e) => e.id === modal.equipmentId) ?? null, [equipments, modal]);

  const computedPrice = useMemo(() => {
    if (!selected) return null;
    const mult = plans[modal.plan].multiplier;
    const value = Math.round(selected.price * mult);
    return value;
  }, [modal.plan, selected]);

  function openModal(equipmentId: string) {
    setModal({ open: true, equipmentId, plan: 'monthly' });
  }

  function closeModal() {
    setModal((s) => ({ ...s, open: false }));
  }

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />

        <main className="flex-1 overflow-auto p-6 lg:p-8 pb-32">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-8">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 text-purple-700 rounded-full text-sm font-semibold">
                  <Sparkles size={16} /> Inventory & Purchase
                </div>
                <h1 className="text-3xl font-bold mt-3">Solar Equipment Catalog</h1>
                <p className="text-gray-600 mt-2">Select an option, choose a payment plan, and purchase in minutes.</p>
              </div>
            </div>

            <div className="card p-6 mb-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="relative flex-1">
                  <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    type="text"
                    placeholder="Search equipment (e.g. pump, dryer, milling)..."
                    className="w-full px-5 py-3 bg-gray-100 rounded-2xl focus:outline-none"
                  />
                </div>
                <div className="flex items-center gap-3">
                  <div className="hidden sm:flex items-center gap-2 text-sm text-gray-600 bg-gray-50 rounded-2xl px-4 py-2 border border-gray-100">
                    <Store size={16} /> Verified solar equipment
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 rounded-2xl px-4 py-2 border border-gray-100">
                    <MapPin size={16} /> Edo, Nigeria (demo)
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {filtered.map((eq) => (
                <div key={eq.id} className="card p-6 relative overflow-hidden">
                  <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-purple-600/10 blur-sm" />

                  <div className="relative">
                    <div className="rounded-3xl bg-gradient-to-br from-purple-50 to-white border border-purple-100 p-4">
                      <div className="aspect-[16/10] relative rounded-2xl overflow-hidden bg-white">
                        <Image src={eq.imageSrc} alt={eq.name} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 33vw" />
                      </div>
                    </div>

                    <div className="mt-5">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h2 className="text-xl font-bold leading-tight">{eq.name}</h2>
                          <p className="text-gray-500 mt-1">{eq.category}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-xs text-gray-500">Starting price</div>
                          <div className="text-2xl font-bold text-purple-700">{formatNGN(eq.price)}</div>
                        </div>
                      </div>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {eq.highlights.slice(0, 3).map((h) => (
                          <span key={h} className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-gray-50 border border-gray-100 text-sm text-gray-700">
                            <CheckCircle2 size={16} className="text-emerald-500" /> {h}
                          </span>
                        ))}
                      </div>

                      <div className="mt-5">
                        <label className="text-sm font-semibold text-gray-700">Select buying option</label>
                        <div className="mt-2">
                          <select
                            className="w-full px-4 py-3 bg-gray-100 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-200"
                            value={modal.open && modal.equipmentId === eq.id ? modal.plan : 'monthly'}
                            onChange={(e) => {
                              const plan = e.target.value as PlanKey;
                              setModal({ open: false, equipmentId: eq.id, plan });
                            }}
                          >
                            {Object.entries(plans).map(([key, p]) => (
                              <option key={key} value={key}>
                                {p.label}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="mt-5">
                        <button
                          onClick={() => openModal(eq.id)}
                          className="w-full py-4 bg-purple-600 text-white font-semibold rounded-2xl hover:bg-purple-700 transition flex items-center justify-center gap-2"
                        >
                          <CreditCard size={18} /> Buy / Reserve
                        </button>
                        <p className="text-xs text-gray-500 mt-2">{eq.depositHint} • Installation steps inside modal</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>

      {modal.open && selected && (
        <div className="fixed inset-0 z-[60]">
          <div className="absolute inset-0 bg-black/40" onClick={closeModal} />

          <div className="absolute inset-0 flex items-center justify-center p-4">
            <div className="relative w-full max-w-2xl card p-6 bg-white rounded-[28px] shadow-2xl">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold">Purchase: {selected.name}</h3>
                  <p className="text-gray-500 mt-1">Choose plan → Confirm → Continue to payment</p>
                </div>
                <button
                  onClick={closeModal}
                  className="px-3 py-2 rounded-2xl hover:bg-gray-100 border border-gray-200 text-gray-600 font-semibold"
                  aria-label="Close"
                >
                  Close
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="rounded-3xl bg-gradient-to-br from-purple-50 to-white border border-purple-100 p-4">
                  <div className="aspect-[16/10] relative rounded-2xl overflow-hidden bg-white">
                    <Image src={selected.imageSrc} alt={selected.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                  </div>

                  <div className="mt-4">
                    <div className="text-xs text-gray-500">Estimated total</div>
                    <div className="text-3xl font-bold text-purple-700">{computedPrice ? formatNGN(computedPrice) : '-'}</div>
                    <div className="text-xs text-gray-500 mt-1">Plan multiplier applied to base price (demo).</div>
                  </div>
                </div>

                <div>
                  <div className="rounded-3xl bg-gray-50 border border-gray-100 p-4">
                    <label className="text-sm font-semibold text-gray-700">Payment plan</label>
                    <select
                      className="mt-2 w-full px-4 py-3 bg-white rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-200"
                      value={modal.plan}
                      onChange={(e) => setModal((s) => ({ ...s, plan: e.target.value as PlanKey }))}
                    >
                      {Object.entries(plans).map(([key, p]) => (
                        <option key={key} value={key}>
                          {p.label}
                        </option>
                      ))}
                    </select>

                    <div className="mt-3 text-sm text-gray-600">{plans[modal.plan].note}</div>

                    <div className="mt-4 flex items-center gap-2">
                      <div className="w-10 h-10 rounded-2xl bg-purple-600/10 flex items-center justify-center text-purple-700">
                        <PlayCircle size={20} />
                      </div>
                      <div>
                        <div className="font-semibold">Purchase steps</div>
                        <ol className="text-sm text-gray-600 list-decimal ml-5">
                          <li className="mt-1">Confirm plan and estimated total</li>
                          <li className="mt-1">Proceed to payment</li>
                          <li className="mt-1">Get delivery/installation scheduling</li>
                        </ol>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 rounded-3xl border border-gray-100 p-4">
                    <div className="font-semibold">What you get</div>
                    <ul className="mt-2 space-y-2 text-sm text-gray-600">
                      {selected.specs.slice(0, 4).map((s) => (
                        <li key={s.label} className="flex items-start justify-between gap-4">
                          <span className="text-gray-500">{s.label}</span>
                          <span className="font-medium text-gray-800">{s.value}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => {
                    // demo behavior
                    alert('Demo: Continue to payment. In production, this would redirect to /payment with order details.');
                  }}
                  className="flex-1 py-4 bg-purple-600 text-white font-semibold rounded-2xl hover:bg-purple-700 transition"
                >
                  Continue to payment
                </button>
                <button
                  onClick={() => {
                    setModal((s) => ({ ...s, plan: 'custom' }));
                  }}
                  className="sm:w-56 py-4 border border-gray-300 font-semibold rounded-2xl hover:bg-gray-50 transition"
                >
                  Request custom plan
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}