"use client";

import { Thermometer, Droplets, Sun, MapPin, Wifi, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/Badge";
import { StatusBadge } from "@/components/StatusBadge";
import { hubs } from "@/lib/data";
import type { SensorReading } from "@/types";

function buildSensors(): SensorReading[] {
  const sensors: SensorReading[] = [];
  hubs.forEach((h) => {
    sensors.push({
      hub: h.name,
      sensor: "Temperature probe",
      reading: `${h.temp}°C`,
      status: h.temp < 10 ? "Normal" : "Warning",
      time: "2 min ago",
    });
    sensors.push({
      hub: h.name,
      sensor: "Humidity sensor",
      reading: `${h.humidity}%`,
      status: h.humidity < 80 ? "Normal" : "Alert",
      time: "2 min ago",
    });
    sensors.push({
      hub: h.name,
      sensor: "Solar charge controller",
      reading: `${h.solar}%`,
      status: h.solar > 50 ? "Normal" : "Low",
      time: "5 min ago",
    });
  });
  return sensors;
}

export default function HubsPage() {
  const sensors = buildSensors();

  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-amber-700">
          <Wifi size={16} /> Connected IoT
        </div>
        <h1 className="mt-2 text-2xl font-semibold text-green-950">My Smart Hub</h1>
        <p className="mt-1 text-sm text-gray-500">One connected smart hub for your operation in Kano, Nigeria.</p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {hubs.map((h) => {
          const pct = Math.round((h.used / h.capacity) * 100);
          return (
            <div key={h.name} className="rounded-2xl border border-amber-300 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-green-950">{h.name}</h3>
                  <p className="mt-1 flex items-center gap-1.5 text-sm text-gray-500"><MapPin size={14} className="text-amber-600" />{h.location}</p>
                </div>
                <Badge variant="green">{h.status}</Badge>
              </div>

              <div className="mt-4 flex gap-6 text-sm text-gray-600">
                <span className="flex items-center gap-1.5">
                  <Thermometer size={14} className="text-gray-400" />
                  {h.temp}°C
                </span>
                <span className="flex items-center gap-1.5">
                  <Droplets size={14} className="text-gray-400" />
                  {h.humidity}%
                </span>
                <span className="flex items-center gap-1.5">
                  <Sun size={14} className="text-gray-400" />
                  {h.solar}%
                </span>
              </div>

              <div className="mt-4">
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Capacity</span>
                  <span>
                    {h.used}/{h.capacity} crates
                  </span>
                </div>
                <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-gray-100">
                  <div
                    className="h-full rounded-full bg-amber-500 transition-all"
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div>
        <div className="mb-3 flex items-center justify-between gap-3">
          <div>
            <h2 className="text-sm font-semibold text-green-950">Live sensor readings</h2>
            <p className="mt-1 text-xs text-gray-500">Monitoring Kano Hub in real time</p>
          </div>
          <ShieldCheck size={20} className="text-amber-600" />
        </div>
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 text-left text-xs font-medium text-gray-500">
                <th className="px-4 py-3">Hub</th>
                <th className="px-4 py-3">Sensor</th>
                <th className="px-4 py-3">Reading</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Last update</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {sensors.map((s, idx) => (
                <tr key={idx} className="hover:bg-gray-50/50">
                  <td className="px-4 py-3 text-gray-700">{s.hub}</td>
                  <td className="px-4 py-3 text-gray-700">{s.sensor}</td>
                  <td className="px-4 py-3 font-medium text-gray-900">{s.reading}</td>
                  <td className="px-4 py-3"><StatusBadge status={s.status} /></td>
                  <td className="px-4 py-3 text-gray-500">{s.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
