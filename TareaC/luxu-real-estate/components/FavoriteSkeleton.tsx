import { Skeleton } from "@/components/ui/skeleton";

export default function FavoriteSkeleton() {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-border/10 flex flex-col h-full animate-pulse">
      <div className="h-64 bg-slate-200" />
      <div className="p-5 flex-1 flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <Skeleton className="h-6 w-1/3" />
          <Skeleton className="h-5 w-16" />
        </div>
        <Skeleton className="h-4 w-2/3" />
        <div className="flex justify-between mt-2">
          <Skeleton className="h-4 w-12" />
          <Skeleton className="h-4 w-12" />
          <Skeleton className="h-4 w-12" />
        </div>
        <Skeleton className="h-10 w-full mt-auto" />
      </div>
    </div>
  );
}
