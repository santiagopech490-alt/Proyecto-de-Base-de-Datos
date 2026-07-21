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
      <div className="flex justify-between items-center">
        <Input 
          placeholder="Search by name, email..." 
          className="max-w-sm"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <Tabs defaultValue="All" className="w-full" onValueChange={setRole}>
        <TabsList>
          <TabsTrigger value="All">All Users</TabsTrigger>
          <TabsTrigger value="Agent">Agents</TabsTrigger>
          <TabsTrigger value="Broker">Brokers</TabsTrigger>
          <TabsTrigger value="Administrator">Admins</TabsTrigger>
        </TabsList>
        <div className="mt-4">
          <UserTable users={filteredUsers} />
        </div>
      </Tabs>
    </div>
  );
}
