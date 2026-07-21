import { Card } from "@/components/ui/card";
import { MapPin } from "lucide-react";

export function LocationWidget() {
  return (
    <Card className="p-4 space-y-4">
      <div className="flex items-center gap-2">
        <MapPin className="w-5 h-5 text-emerald-800" />
        <h3 className="font-bold">Location</h3>
      </div>
      <div className="h-40 bg-slate-100 rounded-md flex items-center justify-center text-slate-500 italic">
        Static Map Preview
      </div>
    </Card>
  );
}
