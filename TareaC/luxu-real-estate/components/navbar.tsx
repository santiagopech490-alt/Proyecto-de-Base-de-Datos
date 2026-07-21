"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Bell, Menu, Building2, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { createClient } from "@/lib/supabase/client";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const navLinks = [
  { label: "Dashboard", href: "/admin/properties" },
  { label: "Buy", href: "/properties" },
  { label: "Rent", href: "#" },
  { label: "Sell", href: "#" },
  { label: "Saved Homes", href: "/favorites" },
  { label: "Users", href: "/users" },
];

export function Navbar() {
  const [user, setUser] = useState<any>(null);
  const pathname = usePathname();
  const supabase = createClient();

  useEffect(() => {
    async function getUser() {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    }
    getUser();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, [supabase]);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-[#19322F] flex items-center justify-center transition-transform group-hover:scale-105">
              <Building2 className="text-white w-5 h-5" />
            </div>
            <span className="text-xl font-semibold tracking-tight text-[#19322F]">
              LuxeEstate
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-sm font-medium px-1 py-1 transition-all ${
                    isActive
                      ? "text-[#006655] border-b-2 border-[#006655]"
                      : "text-[#19322F]/70 hover:text-[#19322F] hover:border-b-2 hover:border-[#19322F]/20"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4 sm:space-x-6">
            <Button variant="ghost" size="icon" className="text-[#19322F] hover:text-[#006655]">
              <Search className="w-5 h-5" />
            </Button>
            <div className="relative">
              <Button variant="ghost" size="icon" className="text-[#19322F] hover:text-[#006655]">
                <Bell className="w-5 h-5" />
              </Button>
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </div>
            
            <Separator orientation="vertical" className="h-8 hidden sm:block" />

            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-2 pl-2 cursor-pointer hover:opacity-80 transition-opacity">
                  <Avatar className="w-9 h-9 ring-2 ring-transparent hover:ring-[#006655] transition-all">
                    {user?.user_metadata?.avatar_url ? (
                      <AvatarImage src={user.user_metadata.avatar_url} />
                    ) : (
                      <AvatarFallback>
                        {user?.email?.[0].toUpperCase() ?? <User className="size-4" />}
                      </AvatarFallback>
                    )}
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem asChild>
                    <Link href="/profile">Profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={async () => {
                    await supabase.auth.signOut();
                    window.location.reload();
                  }}>
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link href="/auth/login">
                <Button variant="ghost">Sign In</Button>
              </Link>
            )}

            {/* Mobile Menu */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger className="inline-flex items-center justify-center rounded-lg p-2 text-slate-700 hover:bg-gray-100">
                  <Menu className="w-6 h-6" />
                </SheetTrigger>
                <SheetContent side="right">
                  <SheetHeader>
                    <SheetTitle>Menu</SheetTitle>
                  </SheetHeader>
                  <div className="mt-8 flex flex-col space-y-4">
                    {navLinks.map((link) => (
                      <Link
                        key={link.label}
                        href={link.href}
                        className={`text-lg font-medium p-2 rounded-md ${
                          pathname === link.href ? "bg-[#006655]/10 text-[#006655]" : "hover:bg-gray-50"
                        }`}
                      >
                        {link.label}
                      </Link>
                    ))}
                    <Separator />
                    <Link href={user ? "/profile" : "/auth/login"} className="flex items-center gap-3 p-2">
                      <Avatar className="w-10 h-10">
                        {user?.user_metadata?.avatar_url && (
                          <AvatarImage src={user.user_metadata.avatar_url} />
                        )}
                        <AvatarFallback>
                          {user?.email?.[0].toUpperCase() ?? <User className="size-5" />}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col">
                        <span className="text-sm font-medium">
                          {user?.email ?? "Guest User"}
                        </span>
                        <span className="text-xs text-gray-500">
                          {user ? "Premium Member" : "Sign in to access features"}
                        </span>
                      </div>
                    </Link>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
