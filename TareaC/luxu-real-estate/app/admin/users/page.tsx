import { fetchUserProfiles } from "@/lib/user-service";
import { UserDirectoryFilter } from "@/components/UserDirectoryFilter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Plus } from "lucide-react";
import Link from "next/link";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { AddUserForm } from "@/components/AddUserForm";

export default async function UserDirectoryPage() {
  const users = await fetchUserProfiles();

  return (
    <main className="p-8">
      <div className="mb-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" asChild>
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back Home
            </Link>
          </Button>
          <div>
            <h1 className="text-2xl font-bold">User Directory</h1>
            <p className="text-muted-foreground">Manage team members, roles, and system permissions.</p>
          </div>
        </div>
        
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="default" asChild>
              <span>
                <Plus className="mr-2 h-4 w-4" />
                Add User
              </span>
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Add New User</SheetTitle>
            </SheetHeader>
            <div className="mt-6">
              <AddUserForm />
            </div>
          </SheetContent>
        </Sheet>
      </div>
      <UserDirectoryFilter users={users} />
    </main>
  );
}
