"use client";

import { useState, useMemo } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { UserTable } from "./UserTable";

export function UserDirectoryFilter({ users }: { users: any[] }) {
  const [search, setSearch] = useState("");
  const [role, setRole] = useState("All");

  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      const matchesSearch = 
        user.full_name?.toLowerCase().includes(search.toLowerCase()) ||
        user.email?.toLowerCase().includes(search.toLowerCase());
      
      const matchesRole = role === "All" || user.role === role;

      return matchesSearch && matchesRole;
    });
  }, [users, search, role]);

  return (
    <div className="space-y-6">
      <Tabs defaultValue="All" className="w-full" onValueChange={setRole}>
        <TabsList className="bg-transparent border-b border-slate-200 w-full justify-start rounded-none h-auto p-0 gap-8">
          <TabsTrigger 
            value="All" 
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-[#006655] data-[state=active]:bg-transparent data-[state=active]:text-[#006655] px-0 py-3 text-sm font-medium text-slate-500 hover:text-slate-700 transition-all"
          >
            All Users
          </TabsTrigger>
          <TabsTrigger 
            value="Agent" 
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-[#006655] data-[state=active]:bg-transparent data-[state=active]:text-[#006655] px-0 py-3 text-sm font-medium text-slate-500 hover:text-slate-700 transition-all"
          >
            Agents
          </TabsTrigger>
          <TabsTrigger 
            value="Broker" 
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-[#006655] data-[state=active]:bg-transparent data-[state=active]:text-[#006655] px-0 py-3 text-sm font-medium text-slate-500 hover:text-slate-700 transition-all"
          >
            Brokers
          </TabsTrigger>
          <TabsTrigger 
            value="Administrator" 
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-[#006655] data-[state=active]:bg-transparent data-[state=active]:text-[#006655] px-0 py-3 text-sm font-medium text-slate-500 hover:text-slate-700 transition-all"
          >
            Admins
          </TabsTrigger>
        </TabsList>
        <div className="mt-8">
          <UserTable users={filteredUsers} />
        </div>
      </Tabs>
    </div>
  );
}
