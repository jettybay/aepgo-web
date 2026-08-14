interface KpiCardProps {
  label: string;
  value: number;
  unit?: string;
  delta?: string;
  deltaType?: "up" | "down";
}

export function KpiCard({ label, value, unit, delta, deltaType }: KpiCardProps) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4">
      <p className="text-xs font-medium text-gray-500">{label}</p>
      <div className="mt-2 flex items-baseline gap-2">
        <p className="text-2xl font-bold text-gray-900">{value}</p>
        {unit && <p className="text-sm text-gray-500">{unit}</p>}
      </div>
      {delta && (
        <p className={`mt-2 text-xs font-medium ${deltaType === "up" ? "text-emerald-600" : "text-red-600"}`}>
          {delta}
        </p>
      )}
    </div>
  );
}
