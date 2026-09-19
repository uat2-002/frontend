import * as React from "react";
import { cn } from "../../lib/utils";
import { StatusPill, UserStatus } from "./status-pill";

export interface MediaCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle: string;
  status: UserStatus;
  progress?: number;
}

export const MediaCard: React.FC<MediaCardProps> = ({
  title,
  subtitle,
  status,
  progress = 0,
  className,
  ...props
}) => {
  const isWatching = status === "watching";
  const isWatched = status === "watched";
  const isNotWorthIt = status === "not_worth_it";


  const bgStyle = isWatching
    ? "bg-gradient-to-b from-[#1e3a8a] to-[#172554]"
    : isWatched
    ? "bg-gradient-to-b from-[#065f46] to-[#022c22]"
    : "bg-[#18181B]"; 

  return (
    <div className={cn("flex w-[240px] flex-col gap-2.5", className)} {...props}>

      <div
        className={cn(
          "relative h-[135px] w-full overflow-hidden rounded-[12px] transition-opacity",
          bgStyle,
          isNotWorthIt && "opacity-40" 
        )}
      >
   
        {isWatching && (
          <div className="absolute top-3 right-3 flex h-7 w-7 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm">
            <svg className="ml-0.5 h-3 w-3 fill-current" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        )}


        {isWatched && (
          <div className="absolute top-3 right-3 flex h-6 w-6 items-center justify-center text-[#4ADE80]">
            <svg className="h-5 w-5 stroke-current stroke-[2.5]" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
        )}

   
        {isWatching && (
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#27272A]">
            <div
              className="h-full bg-[#EF4444]"
              style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
            />
          </div>
        )}
      </div>

      <div className="flex flex-col gap-0.5">
        <h3 className="text-[15px] font-semibold text-[#FAFAFA]">{title}</h3>
        <p className="text-[12.5px] text-[#71717A]">{subtitle}</p>
      </div>


      <div>
        <StatusPill type="user" status={status} />
      </div>
    </div>
  );
};