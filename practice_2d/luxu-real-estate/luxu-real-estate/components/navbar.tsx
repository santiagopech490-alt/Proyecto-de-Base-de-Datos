"use client";

import { useEffect, useState, useMemo } from "react";
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

import { useLanguage } from "@/lib/i18n/LanguageContext";
import { Globe } from "lucide-react";

export function Navbar() {
  const [user, setUser] = useState<any>(null);
  const [profile, setProfile] = useState<any>(null);
  const pathname = usePathname();
  const supabase = useMemo(() => createClient(), []);
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { label: t("nav.dashboard"), href: "/admin/properties" },
    { label: t("nav.buy"), href: "/properties" },
    { label: t("nav.rent"), href: "#" },
    { label: t("nav.sell"), href: "#" },
    { label: t("nav.savedHomes"), href: "/favorites" },
    { label: t("nav.users"), href: "/users" },
  ];

  useEffect(() => {
    async function fetchUserData() {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        if (user) {
          setUser(user);
          const { data: profile } = await supabase
            .from('profiles')
            .select('avatar_url, full_name')
            .eq('id', user.id)
            .single();
          setProfile(profile);
          return;
        }
      } catch (err) {
        console.warn("Supabase auth unavailable:", err);
      }

      // Check local demo user session
      const demoStr = typeof window !== 'undefined' ? localStorage.getItem('luxe_demo_user') : null;
      if (demoStr) {
        try {
          const demoObj = JSON.parse(demoStr);
          setUser(demoObj.user);
          setProfile(demoObj.profile);
        } catch {}
      }
    }
    
    fetchUserData();

    try {
      const { data: { subscription } } = supabase.auth.onAuthStateChange(async (_event, session) => {
        if (session?.user) {
          setUser(session.user);
          setTimeout(async () => {
            try {
              const { data: profile } = await supabase
                .from('profiles')
                .select('avatar_url, full_name')
                .eq('id', session.user.id)
                .single();
              setProfile(profile);
            } catch (err) {
              console.warn("Profile fetch error:", err);
            }
          }, 800);
        } else {
          const demoStr = typeof window !== 'undefined' ? localStorage.getItem('luxe_demo_user') : null;
          if (!demoStr) {
            setUser(null);
            setProfile(null);
          }
        }
      });

      return () => subscription?.unsubscribe();
    } catch (err) {
      console.warn("Auth listener subscription error:", err);
    }
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
            {navLinks
              .filter(link => {
                // If not logged in, only show basic links (if any were public)
                // For now, let's say all these links require login
                if (!user) return false;
                return true;
              })
              .map((link) => {
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
          <div className="flex items-center space-x-3 sm:space-x-4">
            <button
              onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-xs font-semibold text-slate-800 transition-all border border-slate-200 cursor-pointer shadow-xs"
              title={language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
            >
              <Globe className="w-3.5 h-3.5 text-[#006655]" />
              <span>{language === 'es' ? '🇪🇸 ES' : '🇺🇸 EN'}</span>
            </button>

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
              <div className="flex items-center gap-3">
                <Link href="/profile" className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
                  <Avatar className="w-9 h-9 ring-2 ring-[#006655]/20 hover:ring-[#006655] transition-all">
                    {(typeof window !== 'undefined' && localStorage.getItem('luxe_user_avatar')) || profile?.avatar_url ? (
                      <AvatarImage 
                        src={(typeof window !== 'undefined' && localStorage.getItem('luxe_user_avatar')) || (profile.avatar_url.startsWith('http') || profile.avatar_url.startsWith('data:') 
                          ? profile.avatar_url 
                          : `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/avatars/${profile.avatar_url}`)} 
                        alt={profile?.full_name || 'User'}
                      />
                    ) : (
                      <AvatarFallback className="bg-[#006655] text-white font-semibold">
                        {profile?.full_name?.[0]?.toUpperCase() ?? user?.email?.[0]?.toUpperCase() ?? <User className="size-4" />}
                      </AvatarFallback>
                    )}
                  </Avatar>
                  <span className="hidden sm:inline-block text-xs font-semibold text-[#19322F]">
                    {(typeof window !== 'undefined' && localStorage.getItem('luxe_demo_profile') && JSON.parse(localStorage.getItem('luxe_demo_profile')!).full_name) || profile?.full_name || user?.email || "Profile"}
                  </span>
                </Link>

                <DropdownMenu>
                  <DropdownMenuTrigger className="inline-flex items-center justify-center h-8 w-8 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors outline-none cursor-pointer">
                    <User className="w-4 h-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-48">
                    <DropdownMenuItem>
                      <Link href="/profile" className="w-full cursor-pointer">{t("nav.profile")}</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem 
                      className="text-rose-600 focus:text-rose-600 cursor-pointer"
                      onClick={async () => {
                        document.cookie = "luxe_auth=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
                        localStorage.removeItem('luxe_demo_user');
                        try { await supabase.auth.signOut(); } catch {}
                        window.location.href = '/auth/login';
                      }}
                    >
                      Sign Out (Cerrar Sesión)
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
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
                    {navLinks
                      .filter(link => {
                        if (!user) return false;
                        return true;
                      })
                      .map((link) => (
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
                        {profile?.avatar_url && (
                          <AvatarImage src={profile.avatar_url} />
                        )}
                        <AvatarFallback>
                          {profile?.full_name?.[0].toUpperCase() ?? user?.email?.[0].toUpperCase() ?? <User className="size-5" />}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col">
                        <span className="text-sm font-medium">
                          {profile?.full_name ?? user?.email ?? "Guest User"}
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
