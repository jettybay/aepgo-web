import { Cloud, Droplets, Wind, Sun } from "lucide-react";

export function Weather() {
  // Mock weather data - in a real app, this would come from an API
  const weather = {
    temp: 28,
    condition: "Partly Cloudy",
    humidity: 65,
    windSpeed: 12,
    location: "Kano, Nigeria",
  };

  return (
    <div className="rounded-xl border border-gray-200 bg-gradient-to-br from-blue-50 to-blue-100 p-5">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-medium text-gray-600 mb-1">{weather.location}</p>
          <div className="flex items-center gap-2">
            <span className="text-4xl font-bold text-blue-900">{weather.temp}°</span>
            <Cloud className="w-10 h-10 text-blue-500" />
          </div>
          <p className="text-sm text-gray-700 font-medium mt-1">{weather.condition}</p>
        </div>

        {/* Weather metrics */}
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2 text-gray-700">
            <Droplets size={16} className="text-blue-500" />
            <span>{weather.humidity}% humidity</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <Wind size={16} className="text-blue-500" />
            <span>{weather.windSpeed} km/h wind</span>
          </div>
        </div>
      </div>

      {/* Agricultural note */}
      <div className="mt-4 p-3 bg-white/60 rounded-lg text-xs text-gray-700">
        <p className="font-medium mb-1">☀️ Good for crop storage</p>
        <p>Conditions favorable for maintaining inventory quality.</p>
      </div>
    </div>
  );
}
