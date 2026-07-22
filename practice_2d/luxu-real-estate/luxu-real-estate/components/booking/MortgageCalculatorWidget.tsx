'use client';

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calculator } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function MortgageCalculatorWidget() {
  const { t } = useLanguage();

  return (
    <Card className="p-4 space-y-4 bg-white">
      <div className="flex items-center gap-2">
        <Calculator className="w-5 h-5 text-emerald-800" />
        <h3 className="font-bold">{t("details.estimatedPayment")}</h3>
      </div>
      <div className="text-sm text-muted-foreground">
        {t("details.startingFrom")} <span className="font-bold text-slate-900">$5,430/mo</span> {t("details.withDown")}
      </div>
      <Button variant="outline" className="w-full cursor-pointer">
        {t("details.calcMortgage")}
      </Button>
    </Card>
  );
}
