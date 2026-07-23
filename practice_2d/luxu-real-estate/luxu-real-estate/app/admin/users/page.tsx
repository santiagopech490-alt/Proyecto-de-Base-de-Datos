'use client';
import * as React from 'react';
import { fetchUserProfiles } from "@/lib/user-service";
import { UserDirectoryFilter } from "@/components/UserDirectoryFilter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { AddUserForm } from "@/components/AddUserForm";
import { createClient } from "@/lib/supabase/client";
import { LoginRequired } from "@/components/LoginRequired";
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function UserDirectoryPage() {
  const { t } = useLanguage();
  const [user, setUser] = React.useState<any>(null);
  const [checkingAuth, setCheckingAuth] = React.useState(true);
  const [users, setUsers] = React.useState<any[]>([]);
  const [isAddUserOpen, setIsAddUserOpen] = React.useState(false);
  const supabase = createClient();

  React.useEffect(() => {
    async function loadData() {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
      setCheckingAuth(false);
      
      const profiles = await fetchUserProfiles();
      setUsers(profiles);
    }
    loadData();
  }, [supabase]);

  if (checkingAuth) return <div className="p-8">Loading...</div>;

  return (
    <main className="min-h-screen bg-[#F8FAFB] p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-[#19322F]">{t("userDirectory.title")}</h1>
            <p className="text-[#5C706D] mt-1">{t("userDirectory.subtitle")}</p>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#5C706D]" />
              <Input 
                placeholder={t("userDirectory.searchPlaceholder")} 
                className="pl-10 w-full md:w-80 h-11 bg-white border-none shadow-sm rounded-xl focus-visible:ring-emerald-600"
              />
            </div>
            <Sheet open={isAddUserOpen} onOpenChange={setIsAddUserOpen}>
              <SheetTrigger asChild>
                <div className="h-11 bg-[#0F5A4D] hover:bg-[#0a3d34] text-white rounded-xl px-6 gap-2 flex items-center justify-center font-medium transition-colors cursor-pointer">
                  <Plus className="h-4 w-4 mr-2" />
                  {t("userDirectory.addUser")}
                </div>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>{t("userDirectory.addNewUserTitle")}</SheetTitle>
                </SheetHeader>
                <div className="mt-6">
                  <AddUserForm onSuccess={() => setIsAddUserOpen(false)} />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        <UserDirectoryFilter users={users} />
      </div>
    </main>
  );
}
