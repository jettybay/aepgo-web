import { Badge } from "./Badge";

type StatusType = "Normal" | "Warning" | "Alert" | "Low" | "Fresh" | "Good" | "Fair" | "Poor" | "Confirmed" | "Pending" | "Cancelled" | "Failed" | "Operational" | "Maintenance" | "Offline";

interface StatusBadgeProps {
  status: StatusType;
}

const statusConfig: Record<StatusType, { variant: "green" | "yellow" | "red" | "gray" | "blue"; label: string }> = {
  Normal: { variant: "green", label: "Normal" },
  Warning: { variant: "yellow", label: "Warning" },
  Alert: { variant: "red", label: "Alert" },
  Low: { variant: "yellow", label: "Low" },
  Fresh: { variant: "green", label: "Fresh" },
  Good: { variant: "green", label: "Good" },
  Fair: { variant: "yellow", label: "Fair" },
  Poor: { variant: "red", label: "Poor" },
  Confirmed: { variant: "green", label: "Confirmed" },
  Pending: { variant: "blue", label: "Pending" },
  Cancelled: { variant: "gray", label: "Cancelled" },
  Failed: { variant: "red", label: "Failed" },
  Operational: { variant: "green", label: "Operational" },
  Maintenance: { variant: "yellow", label: "Maintenance" },
  Offline: { variant: "red", label: "Offline" },
};

export function StatusBadge({ status }: StatusBadgeProps) {
  const config = statusConfig[status] || { variant: "gray" as const, label: status };
  return <Badge variant={config.variant}>{config.label}</Badge>;
}
