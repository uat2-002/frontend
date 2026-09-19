import * as React from "react";
import { cn } from "../../lib/utils";

export interface SeasonProgressBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  seasonTitle: string;
  watchedEpisodes: number;
  totalEpisodes: number;
}

export const SeasonProgressBlock: React.FC<SeasonProgressBlockProps> = ({
  seasonTitle,
  watchedEpisodes,
  totalEpisodes,
  className,
  ...props
}) => {
  const percentage = Math.round((watchedEpisodes / Math.max(totalEpisodes, 1)) * 100);

  return (
    <div
      className={cn(
        "flex w-full max-w-[480px] items-center justify-between rounded-[12px] bg-[#18181B] border border-[#27272A] p-4",
        className
      )}
      {...props}
    >
      <div className="flex flex-col gap-0.5">
        <h4 className="text-[15px] font-semibold text-[#FAFAFA]">
          {seasonTitle}
        </h4>
        <p className="text-[12.5px] text-[#71717A]">
          {watchedEpisodes} of {totalEpisodes} episodes watched
        </p>
      </div>

      <div className="flex items-center gap-3">
        <div className="h-1.5 w-28 overflow-hidden rounded-full bg-[#27272A]">
          <div
            className="h-full bg-[#EF4444] transition-all duration-300"
            style={{ width: `${Math.min(100, Math.max(0, percentage))}%` }}
          />
        </div>
        <span className="w-9 text-right text-[13px] font-medium text-[#FAFAFA]">
          {percentage}%
        </span>
      </div>
    </div>
  );
};


export default SeasonProgressBlock;