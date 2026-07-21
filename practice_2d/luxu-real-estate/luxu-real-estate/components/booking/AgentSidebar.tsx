import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { MessageSquare, Phone, Star, ShieldCheck } from "lucide-react";

export function AgentSidebar() {
  return (
    <Card className="p-8 space-y-8 rounded-3xl shadow-xl shadow-slate-100/50 border-slate-100 overflow-hidden relative">
      <div className="absolute top-0 right-0 p-4">
        <div className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 border border-emerald-100">
          <ShieldCheck className="w-3 h-3" />
          Verified
        </div>
      </div>

      <div className="flex flex-col items-center text-center space-y-4">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-tr from-emerald-500 to-emerald-200 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-500" />
          <Avatar className="w-24 h-24 border-4 border-white relative">
            <AvatarImage src="/agent-avatar.jpg" alt="Agent" className="object-cover" />
            <AvatarFallback className="bg-slate-50 text-slate-400 text-xl font-bold">SJ</AvatarFallback>
          </Avatar>
        </div>
        
        <div className="space-y-1">
          <h3 className="font-bold text-2xl text-slate-900 tracking-tight">Sarah Jenkins</h3>
          <p className="text-sm text-slate-500 font-medium">Luxury Properties Specialist</p>
          <div className="flex items-center justify-center gap-1 pt-1">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />
            ))}
            <span className="text-xs font-bold text-slate-900 ml-1">5.0</span>
            <span className="text-xs font-medium text-slate-400 ml-1">(124 reviews)</span>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-3">
        <Button variant="outline" className="w-full h-12 rounded-xl border-slate-200 hover:bg-slate-50 hover:text-slate-900 transition-all duration-300">
          <MessageSquare className="w-4 h-4 mr-2" /> Message
        </Button>
        <Button variant="outline" className="w-full h-12 rounded-xl border-slate-200 hover:bg-slate-50 hover:text-slate-900 transition-all duration-300">
          <Phone className="w-4 h-4 mr-2" /> Call
        </Button>
      </div>

      <div className="space-y-3 pt-2">
        <Button className="w-full h-14 bg-emerald-800 hover:bg-emerald-900 text-white rounded-xl shadow-lg shadow-emerald-900/10 font-bold text-base transition-all duration-300" size="lg">
          Schedule Visit
        </Button>
        <Button variant="ghost" className="w-full h-12 text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-xl font-semibold transition-all duration-300" size="lg">
          Contact Agent
        </Button>
      </div>
    </Card>
  );
}
