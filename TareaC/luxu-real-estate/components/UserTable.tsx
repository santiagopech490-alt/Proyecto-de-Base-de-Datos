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
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import { updateUserRole, updateUserStatus } from "@/lib/actions";
import { RoleBadge, StatusBadge } from "./UserBadges";

export function UserTable({ users }: { users: any[] }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>USER DETAILS</TableHead>
          <TableHead>ROLE & STATUS</TableHead>
          <TableHead>PERFORMANCE</TableHead>
          <TableHead>ACTIONS</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.id}>
            <TableCell className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src={user.avatar_url || ""} />
                <AvatarFallback>{user.full_name?.[0]}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold">{user.full_name}</p>
                <p className="text-sm text-muted-foreground">{user.email}</p>
              </div>
            </TableCell>
            <TableCell className="flex items-center gap-2">
              <RoleBadge role={user.role} />
              <StatusBadge status={user.status} />
            </TableCell>
            <TableCell>
              {user.properties_count} Properties
            </TableCell>
            <TableCell>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="h-8 w-8 p-0" asChild>
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => updateUserRole(user.id, 'Administrator')}>Set Admin</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => updateUserRole(user.id, 'Agent')}>Set Agent</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem 
                    className="text-red-600" 
                    onClick={() => updateUserStatus(user.id, 'Inactive')}
                  >
                    Suspend User
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
