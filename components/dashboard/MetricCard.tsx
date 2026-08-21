interface MetricCardProps {
  title: string;
  value: string;
  subtitle: string;
  trend?: string;
  color?: 'green' | 'default';
  action?: string;
}

export default function MetricCard({ title, value, subtitle, trend, color = 'default', action }: MetricCardProps) {
  const isGreen = color === 'green';

  return (
    <div className={`card p-6 ${isGreen ? 'bg-green-900 text-white' : 'bg-white'}`}>
      <div className="flex justify-between items-start">
        <div>
          <p className={`text-sm ${isGreen ? 'text-amber-100' : 'text-gray-500'}`}>{title}</p>
          <p className="text-4xl font-bold mt-3">{value}</p>
        </div>
        <div className={`text-4xl ${isGreen ? 'opacity-75' : ''}`}>{
          title.includes('Outstanding') ? '💰' :
          title.includes('Equipment') ? '⚙️' :
          title.includes('Paid') ? '📈' : '⚡'
        }</div>
      </div>

      <p className={`mt-6 text-sm ${isGreen ? 'text-green-100' : 'text-gray-600'}`}>
        {subtitle}
      </p>

      {trend && (
        <p className="text-emerald-500 text-sm font-medium mt-1">{trend}</p>
      )}

      {action && (
        <button className="mt-6 w-full bg-white text-green-900 font-semibold py-3.5 rounded-2xl hover:bg-amber-50 transition">
          {action}
        </button>
      )}
    </div>
  );
}