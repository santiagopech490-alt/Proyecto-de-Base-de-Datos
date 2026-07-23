"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger, 
  DropdownMenuSeparator 
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { updateUserRole, updateUserStatus } from "@/lib/actions";
import { RoleBadge, StatusBadge } from "./UserBadges";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function UserTable({ users }: { users: any[] }) {
  const { t } = useLanguage();

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="bg-slate-50/50 hover:bg-slate-50/50 border-b border-slate-100">
            <TableHead className="font-bold text-[11px] tracking-wider text-slate-500 py-4">{t("userDirectory.userDetails")}</TableHead>
            <TableHead className="font-bold text-[11px] tracking-wider text-slate-500">{t("userDirectory.roleStatus")}</TableHead>
            <TableHead className="font-bold text-[11px] tracking-wider text-slate-500">{t("userDirectory.performance")}</TableHead>
            <TableHead className="font-bold text-[11px] tracking-wider text-slate-500 text-right">{t("userDirectory.actions")}</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id} className="border-b border-slate-50 hover:bg-slate-50/80 transition-colors">
              <TableCell className="py-5">
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12 border-2 border-white shadow-sm">
                    <AvatarImage src={user.avatar_url || ""} />
                    <AvatarFallback className="bg-slate-100 text-[#0F5A4D] font-bold">
                      {user.full_name?.[0]}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-[#19322F]">{user.full_name}</p>
                    <p className="text-sm text-[#5C706D]">{user.email}</p>
                    <p className="text-[10px] text-slate-400 mt-0.5">ID: #USR-{user.id.slice(0, 4)}</p>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex flex-col gap-1.5 items-start">
                  <RoleBadge role={user.role} />
                  <StatusBadge status={user.status} />
                </div>
              </TableCell>
              <TableCell>
                <div className="flex gap-8">
                  <div>
                    <p className="text-[10px] text-slate-400 uppercase tracking-wider mb-0.5">{t("userDirectory.properties")}</p>
                    <p className="font-semibold text-[#19322F]">{user.properties_count || 0}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 uppercase tracking-wider mb-0.5">{t("userDirectory.salesYtd")}</p>
                    <p className="font-semibold text-[#19322F]">${(user.sales_ytd || 0).toLocaleString()}</p>
                  </div>
                </div>
              </TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <span className="inline-flex items-center justify-center rounded-xl px-4 h-10 gap-2 text-[#19322F] border border-slate-200 bg-white hover:bg-slate-50 transition-colors cursor-pointer">
                      {t("userDirectory.changeRole")} <ChevronDown className="h-3 w-3" />
                    </span>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="rounded-xl p-2 w-48 shadow-xl">
                    <DropdownMenuItem onClick={() => updateUserRole(user.id, 'Administrator')}>Administrator</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => updateUserRole(user.id, 'Broker')}>Broker</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => updateUserRole(user.id, 'Agent')}>Agent</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => updateUserRole(user.id, 'Viewer')}>Viewer</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem 
                      className="text-red-600 focus:bg-red-50 focus:text-red-700 cursor-pointer" 
                      onClick={() => updateUserStatus(user.id, 'Inactive')}
                    >
                      {t("userDirectory.suspendUser")}
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
