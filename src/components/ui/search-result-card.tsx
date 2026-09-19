import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "./button";

export interface SearchResultCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle: string;
  isAdded?: boolean;
  onAdd?: () => void;
}

export const SearchResultCard: React.FC<SearchResultCardProps> = ({
  title,
  subtitle,
  isAdded = false,
  onAdd,
  className,
  ...props
}) => {
  return (
    <div className={cn("flex w-[240px] flex-col gap-2.5", className)} {...props}>
      <div
        className={cn(
          "h-[135px] w-full rounded-[12px] transition-all",
          isAdded
            ? "bg-gradient-to-b from-[#1e3a8a] to-[#172554]"
            : "bg-gradient-to-b from-[#065f46] to-[#022c22]"
        )}
      />


      <div className="flex flex-col gap-0.5">
        <h3 className="text-[15px] font-semibold text-[#FAFAFA]">{title}</h3>
        <p className="text-[12.5px] text-[#71717A]">{subtitle}</p>
      </div>

   
      <div>
        {isAdded ? (
          <Button variant="secondary" disabled className="w-full">
            <span className="mr-1">✓</span> Added
          </Button>
        ) : (
          <Button variant="primary" onClick={onAdd} className="w-full">
            <span className="mr-1">+</span> Add
          </Button>
        )}
      </div>
    </div>
  );
};