import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Check, Loader2, ChevronDown } from 'lucide-react';
import { fetchUserSeriesStatus, updateUserStatus, type UserStatus } from '@/api/series';
import { Badge } from '@/components/ui/badge';
import { showToast } from '@/lib/toast';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

type StatusSelectorProps = {
  seriesId: number;
};

const badgeConfig = {
  plan_to_watch: { label: 'Plan to Watch', variant: 'secondary' as const },
  watching: { label: 'Watching', variant: 'destructive' as const },
  watched: { label: 'Watched', variant: 'default' as const },
  not_worth_it: { label: 'Not Worth It', variant: 'secondary' as const },
};

export const StatusSelector = ({ seriesId }: StatusSelectorProps) => {
  const queryClient = useQueryClient();

  const { data: currentStatus = 'none', isLoading } = useQuery({
    queryKey: ['user-series-status', seriesId],
    queryFn: () => fetchUserSeriesStatus(seriesId),
  });

  const updateMutation = useMutation({
    mutationFn: (newStatus: UserStatus) => updateUserStatus(seriesId, newStatus),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['user-series-status', seriesId] });
      const statusLabel = badgeConfig[variables as keyof typeof badgeConfig].label;
      showToast(`Status changed to ${statusLabel}`, 'success');
    },
    onError: () => {
      showToast('Failed to update status', 'error');
    },
  });

  if (isLoading || currentStatus === 'none') {
    return null;
  }

  const currentBadge = badgeConfig[currentStatus as keyof typeof badgeConfig];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="inline-block cursor-pointer hover:brightness-110 active:scale-95 transition-all outline-none">
          <Badge
            variant={currentBadge.variant}
            className="text-xs rounded-md px-3 py-1 flex items-center gap-1.5 transition-all duration-200"
            aria-label={`Status: ${currentBadge.label}`}
          >
            {currentBadge.label}

            {updateMutation.isPending ? (
              <Loader2 className="w-3 h-3 opacity-70 animate-spin" />
            ) : (
              <ChevronDown className="w-3 h-3 opacity-70" />
            )}
          </Badge>
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent side="top" align="start" className="w-40">
        {(Object.keys(badgeConfig) as Array<keyof typeof badgeConfig>).map(statusKey => {
          const isSelected = currentStatus === statusKey;

          return (
            <DropdownMenuItem
              key={statusKey}
              onClick={() => updateMutation.mutate(statusKey)}
              className="flex items-center justify-between text-xs cursor-pointer"
            >
              <span>{badgeConfig[statusKey].label}</span>
              {isSelected && <Check className="w-3 h-3" />}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
