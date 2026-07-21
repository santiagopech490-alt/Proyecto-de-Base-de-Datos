import Link from "next/link";
import { Lock, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export function LoginRequired({ title = "Authentication Required" }: { title?: string }) {
  return (
    <div className="min-h-[60vh] flex items-center justify-center p-4">
      <Card className="max-w-md w-full border-none shadow-2xl bg-white/80 backdrop-blur-xl rounded-[32px] overflow-hidden text-center p-8">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-2xl bg-[#F0F9F6] flex items-center justify-center text-[#0F5A4D]">
            <Lock className="size-8" />
          </div>
        </div>
        
        <CardHeader className="p-0 mb-6">
          <CardTitle className="text-2xl font-bold text-[#19322F]">
            {title}
          </CardTitle>
          <CardDescription className="text-slate-500 text-base mt-2">
            You need to be logged in to access this section and its exclusive features.
          </CardDescription>
        </CardHeader>

        <CardContent className="p-0 space-y-4">
          <Link href="/auth/login" className="block w-full">
            <Button className="w-full h-12 rounded-xl bg-[#0F5A4D] hover:bg-[#0a3d34] text-white font-semibold transition-all shadow-lg shadow-emerald-900/10">
              Sign In to Your Account
            </Button>
          </Link>
          
          <div className="flex items-center justify-center gap-2 pt-4 opacity-40">
            <Building2 className="size-4" />
            <span className="text-[10px] font-bold uppercase tracking-widest">LuxeEstate Premium</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
