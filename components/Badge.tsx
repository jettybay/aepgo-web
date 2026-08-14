import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "green" | "yellow" | "red" | "gray" | "blue";
  className?: string;
}

const variants = {
  green: "bg-emerald-50 text-emerald-700 border border-emerald-200",
  yellow: "bg-yellow-50 text-yellow-700 border border-yellow-200",
  red: "bg-red-50 text-red-700 border border-red-200",
  gray: "bg-gray-100 text-gray-700 border border-gray-200",
  blue: "bg-blue-50 text-blue-700 border border-blue-200",
};

export function Badge({ children, variant = "gray", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
