import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calculator } from "lucide-react";

export function MortgageCalculatorWidget() {
  return (
    <Card className="p-4 space-y-4">
      <div className="flex items-center gap-2">
        <Calculator className="w-5 h-5 text-emerald-800" />
        <h3 className="font-bold">Estimated Payment</h3>
      </div>
      <div className="text-sm text-muted-foreground">
        Starting from <span className="font-bold text-slate-900">$5,430/mo</span> with 20% down
      </div>
      <Button variant="outline" className="w-full">
        Calculate Mortgage
      </Button>
    </Card>
  );
}
