import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function RoleBadge({ role }: { role: string | null }) {
  const styles = {
    Administrator: "bg-slate-900 text-white hover:bg-slate-800",
    Broker: "bg-emerald-100 text-emerald-800 hover:bg-emerald-200",
    Agent: "bg-slate-100 text-slate-600 hover:bg-slate-200",
    Viewer: "bg-gray-100 text-gray-600",
  };

  return (
    <Badge className={cn("rounded-full", styles[role as keyof typeof styles] || "bg-gray-100")}>
      {role}
    </Badge>
  );
}

export function StatusBadge({ status }: { status: string | null }) {
  const styles = {
    Active: "bg-emerald-100 text-emerald-800",
    Away: "bg-amber-100 text-amber-800",
    Inactive: "bg-slate-100 text-slate-600",
  };

  return (
    <Badge variant="outline" className={cn("border-none", styles[status as keyof typeof styles] || "bg-gray-100")}>
      <span className={cn("mr-1.5 h-2 w-2 rounded-full", status === 'Active' ? 'bg-emerald-500' : status === 'Away' ? 'bg-amber-500' : 'bg-slate-500')} />
      {status}
    </Badge>
  );
}
