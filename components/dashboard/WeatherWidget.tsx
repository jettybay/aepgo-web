'use client';

export default function WeatherWidget() {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const today = new Date();
  const todayIndex = today.getDay(); // 0 for Sunday, 1 for Monday, etc.
  const currentDayAbbr = daysOfWeek[todayIndex];

  // Static forecast data (icons, temps) that will be mapped to dynamic days
  const initialForecastData = [
    { icon: '⛅', temp: '32°C', high: '32' }, // Current day's forecast
    { icon: '🌧️', temp: '30°C', high: '30' }, // Next day
    { icon: '☀️', temp: '31°C', high: '31' }, // Day after
    { icon: '⛅', temp: '29°C', high: '29' },
    { icon: '☀️', temp: '32°C', high: '32' },
  ];

  const forecast = initialForecastData.map((item, index) => {
    const dayIndex = (todayIndex + index) % 7; // Calculate day of week for each forecast item
    return { ...item, day: daysOfWeek[dayIndex] };
  });

  return (
    <div>
      <h3 className="font-semibold text-lg mb-4">Weather Forecast</h3>
      <p className="text-sm text-gray-500 mb-6">Ede, Nigeria</p>

      {/* Current Weather */}
      <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-3xl p-6 text-center mb-8">
        <div className="text-7xl mb-3">⛅</div>
        <p className="text-6xl font-light text-gray-800">32°C</p>
        <p className="text-gray-600 mt-1">
          {currentDayAbbr}, Partly Cloudy {/* Display current day of the week */}
        </p>
        <p className="text-sm text-gray-500 mt-4">Humidity: 45% • Wind: 12 km/h</p>
      </div>

      {/* 5-Day Forecast */}
      <div className="grid grid-cols-5 gap-3 text-center">
        {forecast.map((item, index) => (
          <div key={index} className="bg-gray-50 rounded-2xl py-4">
            <p className="text-xs font-medium text-gray-600">{item.day}</p>
            <div className="text-3xl my-3">{item.icon}</div>
            <p className="font-semibold text-sm">{item.temp}</p>
          </div>
        ))}
      </div>
    </div>
  );
}