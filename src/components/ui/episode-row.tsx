import * as React from "react";
import { cn } from "@/lib/utils";

export interface EpisodeRowProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onToggle"> {
  episodeNumber: string | number;
  title: string;
  isWatched?: boolean;
  onToggle?: (watched: boolean) => void;
}

export const EpisodeRow: React.FC<EpisodeRowProps> = ({
  episodeNumber,
  title,
  isWatched = false,
  onToggle,
  className,
  ...props
}) => {
  const formattedEp = typeof episodeNumber === "number" ? `Ep. ${episodeNumber}` : episodeNumber;

  return (
    <div
      onClick={() => onToggle?.(!isWatched)}
      className={cn(

        "flex w-full max-w-[480px] cursor-pointer items-center gap-4 rounded-[12px] bg-[#18181B] p-3.5 border border-[#27272A] transition-colors hover:border-[#71717A]",
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "flex h-5 w-5 shrink-0 items-center justify-center rounded-[6px] transition-colors",
          isWatched
            ? "bg-[#EF4444] text-white"
            : "border border-[#27272A] bg-transparent"
        )}
      >
        {isWatched && (
          <svg className="h-3.5 w-3.5 stroke-current stroke-[3]" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        )}
      </div>

      <span className="min-w-[45px] text-[13px] font-medium text-[#71717A]">
        {formattedEp}
      </span>

      <span
        className={cn(
          "text-[14px] font-semibold truncate",
          isWatched ? "text-[#71717A]" : "text-[#FAFAFA]"
        )}
      >
        {title}
      </span>
    </div>
  );
};