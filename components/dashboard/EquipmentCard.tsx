interface EquipmentCardProps {
  name: string;
  sn: string;
  usage: string;
  status: number;
}

export default function EquipmentCard({ name, sn, usage, status }: EquipmentCardProps) {
  return (
    <div className="flex items-center justify-between py-4 border-b last:border-none">
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl flex items-center justify-center text-3xl">
          {name.includes('Pump') ? '🚜' : name.includes('Milling') ? '🌾' : '🌬️'}
        </div>
        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-sm text-gray-500">SN: {sn}</p>
        </div>
      </div>

      <div className="text-right">
        <p className="text-sm text-gray-500">Daily Usage</p>
        <p className="font-semibold">{usage}</p>
      </div>

      <div>
        <div className="bg-emerald-100 text-emerald-700 text-xs font-medium px-4 py-1.5 rounded-full">
          {status}% Active
        </div>
      </div>
    </div>
  );
}