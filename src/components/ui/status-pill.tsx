import * as React from "react";
import { cn } from "@/lib/utils";

export type UserStatus = "watching" | "plan_to_watch" | "watched" | "not_worth_it";
export type SeriesStatus = "ongoing" | "ended";

export interface StatusPillProps extends React.HTMLAttributes<HTMLSpanElement> {
  type?: "user" | "series";
  status: UserStatus | SeriesStatus;
}

export const StatusPill: React.FC<StatusPillProps> = ({
  type = "user",
  status,
  className,
  ...props
}) => {
  const styles: Record<string, string> = {

    watching: "bg-[#EF4444]/15 text-[#EF4444]",
    plan_to_watch: "bg-[#18181B] text-[#71717A]",
    watched: "bg-[#4ADE80]/15 text-[#4ADE80]",
    not_worth_it: "bg-[#18181B] text-[#71717A]",
    
    ongoing: "bg-[#4ADE80]/15 text-[#4ADE80]",
    ended: "bg-[#18181B] text-[#71717A]",
  };

  const labels: Record<string, string> = {
    watching: "Watching",
    plan_to_watch: "Plan to Watch",
    watched: "Watched",
    not_worth_it: "Not Worth It",
    ongoing: "Ongoing",
    ended: "Ended",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-[12.5px] font-medium transition-colors",
        styles[status] || "bg-[#18181B] text-[#71717A]",
        className
      )}
      {...props}
    >
      {labels[status] || status}
    </span>
  );
};