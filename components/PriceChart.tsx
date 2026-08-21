import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { day: "Mon", price: 11500 },
  { day: "Tue", price: 12000 },
  { day: "Wed", price: 11800 },
  { day: "Thu", price: 12500 },
  { day: "Fri", price: 13200 },
  { day: "Sat", price: 12800 },
  { day: "Sun", price: 13500 },
];

export function PriceChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
        <XAxis dataKey="day" stroke="#999" style={{ fontSize: "12px" }} />
        <YAxis stroke="#999" style={{ fontSize: "12px" }} />
        <Tooltip
          contentStyle={{
            backgroundColor: "#fff",
            border: "1px solid #e5e7eb",
            borderRadius: "0.5rem",
            boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
          }}
          formatter={(value) => {
            if (typeof value === 'number') {
              return `₦${value.toLocaleString()}`;
            }
            return value;
          }}
          labelStyle={{ color: "#374151" }}
        />
        <Bar dataKey="price" fill="#d89a08" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
