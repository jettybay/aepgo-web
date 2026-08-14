import { Badge } from "./Badge";
import type { Grade } from "@/types";

interface GradeBadgeProps {
  grade: Grade;
}

const gradeConfig = {
  A: { variant: "green" as const, label: "Grade A" },
  B: { variant: "yellow" as const, label: "Grade B" },
  C: { variant: "red" as const, label: "Grade C" },
};

export function GradeBadge({ grade }: GradeBadgeProps) {
  const config = gradeConfig[grade];
  return <Badge variant={config.variant}>{config.label}</Badge>;
}
