"use client";

import { useEffect, useState, useMemo } from "react";
import Link from "next/link";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { Search, Bell, Menu, Building2, User, Check, Calendar, Sparkles, Home } from "lucide-react";
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
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuHeader, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import { Globe } from "lucide-react";
import { FiltersModal } from "@/components/search/FiltersModal";

export function Navbar() {
  const [user, setUser] = useState<any>(null);
  const [profile, setProfile] = useState<any>(null);
  const [hasUnreadNotifications, setHasUnreadNotifications] = useState(true);
  const [notificationsList, setNotificationsList] = useState<any[]>([
    {
      id: '1',
      title: '¡Visita Confirmada!',
      desc: 'Tu cita para recorrer la propiedad ha sido agendada con éxito.',
      time: 'Hace 10 min',
      icon: Calendar,
      unread: true,
    },
    {
      id: '2',
      title: 'Nueva Propiedad Disponible',
      desc: 'Se ha publicado una nueva mansión exclusiva en Beverly Hills.',
      time: 'Hace 1 hora',
      icon: Home,
      unread: true,
    },
    {
      id: '3',
      title: 'Bienvenido a LuxeEstate',
      desc: 'Explora el catálogo exclusivo y guarda tus propiedades favoritas.',
      time: 'Hace 1 día',
      icon: Sparkles,
      unread: false,
    }
  ]);

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const supabase = useMemo(() => createClient(), []);
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { label: t("nav.dashboard"), href: "/admin/properties" },
    { label: t("nav.buy"), href: "/properties" },
    { label: t("nav.rent"), href: "/properties?type=rent" },
    { label: t("nav.sell"), href: "/admin/properties/add" },
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
      const { data: authListener } = supabase.auth.onAuthStateChange(
        async (event, session) => {
          if (session?.user) {
            setUser(session.user);
            const { data: profile } = await supabase
              .from('profiles')
              .select('avatar_url, full_name')
              .eq('id', session.user.id)
              .single();
            setProfile(profile);
          } else {
            const demoStr = localStorage.getItem('luxe_demo_user');
            if (demoStr) {
              try {
                const demoObj = JSON.parse(demoStr);
                setUser(demoObj.user);
                setProfile(demoObj.profile);
              } catch {}
            } else {
              setUser(null);
              setProfile(null);
            }
          }
        }
      );

      return () => {
        authListener.subscription.unsubscribe();
      };
    } catch {}
  }, [supabase]);

  const handleSignOut = async () => {
    try {
      await supabase.auth.signOut();
    } catch {}
    localStorage.removeItem('luxe_demo_user');
    setUser(null);
    setProfile(null);
    window.location.href = '/';
  };

  const handleSearchClick = () => {
    router.push('/properties');
  };

  const markAllNotificationsAsRead = () => {
    setHasUnreadNotifications(false);
    setNotificationsList(prev => prev.map(n => ({ ...n, unread: false })));
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#19322F]/5 bg-white/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 rounded-xl bg-[#006655] flex items-center justify-center text-white shadow-lg shadow-[#006655]/20 group-hover:scale-105 transition-transform">
            <Building2 className="w-6 h-6" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-xl tracking-tight text-[#19322F]">LuxeEstate</span>
            <span className="text-[10px] tracking-widest text-[#5C706D] font-medium uppercase -mt-1">Properties</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks
            .filter(link => {
              if (link.href === '/admin/properties' || link.href === '/favorites' || link.href === '/users') {
                return true;
              }
              return true;
            })
            .map((link) => {
              const currentType = searchParams?.get('type');
              const isRentLink = link.href.includes('type=rent');
              const isRentActive = isRentLink && currentType === 'rent';
              const isRegularActive = !isRentLink && pathname === link.href && !currentType;
              const isActive = isRentLink ? isRentActive : isRegularActive;

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
        </nav>

        {/* Right Section / Actions */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          <button
            onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-xs font-semibold text-slate-800 transition-all border border-slate-200 cursor-pointer shadow-xs"
            title={language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
          >
            <Globe className="w-3.5 h-3.5 text-[#006655]" />
            <span>{language === 'es' ? '🇪🇸 ES' : '🇺🇸 EN'}</span>
          </button>

          {/* 🔍 Interactive Search Icon */}
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={handleSearchClick}
            className="text-[#19322F] hover:text-[#006655] cursor-pointer"
            title="Buscar Propiedades"
          >
            <Search className="w-5 h-5" />
          </Button>

          {/* 🔔 Interactive Notifications Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="relative">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="text-[#19322F] hover:text-[#006655] cursor-pointer"
                  title="Notificaciones"
                >
                  <Bell className="w-5 h-5" />
                </Button>
                {hasUnreadNotifications && (
                  <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white animate-pulse"></span>
                )}
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80 rounded-2xl p-3 shadow-2xl bg-white border border-slate-100">
              <div className="flex items-center justify-between px-2 py-1 mb-2">
                <span className="font-bold text-sm text-[#19322F]">Notificaciones</span>
                {hasUnreadNotifications && (
                  <button 
                    onClick={markAllNotificationsAsRead}
                    className="text-[11px] text-[#006655] font-semibold hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <Check className="w-3 h-3" /> Marcar leídas
                  </button>
                )}
              </div>
              <DropdownMenuSeparator />
              <div className="space-y-2 py-1 max-h-72 overflow-y-auto">
                {notificationsList.map((item) => (
                  <div 
                    key={item.id} 
                    className={`p-3 rounded-xl transition-colors flex gap-3 items-start ${
                      item.unread ? 'bg-emerald-50/60 border border-emerald-100' : 'hover:bg-slate-50'
                    }`}
                  >
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 text-[#006655] flex items-center justify-center shrink-0 mt-0.5">
                      <item.icon className="w-4 h-4" />
                    </div>
                    <div className="flex-1 text-left">
                      <p className="text-xs font-bold text-[#19322F]">{item.title}</p>
                      <p className="text-[11px] text-[#5C706D] mt-0.5 leading-snug">{item.desc}</p>
                      <span className="text-[10px] text-slate-400 mt-1 block">{item.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Separator orientation="vertical" className="h-8 hidden sm:block" />

          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
                  <Avatar className="w-9 h-9 ring-2 ring-[#006655]/20 hover:ring-[#006655] transition-all">
                    {(typeof window !== 'undefined' && localStorage.getItem('luxe_user_avatar')) || profile?.avatar_url ? (
                      <AvatarImage 
                        src={localStorage.getItem('luxe_user_avatar') || profile?.avatar_url} 
                        alt="User" 
                      />
                    ) : (
                      <AvatarFallback className="bg-[#006655] text-white font-medium">
                        {profile?.full_name ? profile.full_name[0] : user.email ? user.email[0].toUpperCase() : 'U'}
                      </AvatarFallback>
                    )}
                  </Avatar>
                  <span className="hidden lg:inline text-xs font-semibold text-[#19322F]">
                    {profile?.full_name || 'Mi Cuenta'}
                  </span>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48 rounded-xl shadow-xl p-2 bg-white">
                <DropdownMenuItem asChild>
                  <Link href="/profile" className="cursor-pointer font-medium">{t("nav.profile")}</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/admin/properties" className="cursor-pointer font-medium">{t("nav.dashboard")}</Link>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleSignOut} className="text-red-600 focus:bg-red-50 cursor-pointer font-medium">
                  {t("nav.signOut")}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex items-center gap-2">
              <Link href="/auth/login">
                <Button variant="ghost" className="text-xs font-semibold text-[#19322F] hover:text-[#006655] cursor-pointer">
                  {t("nav.signIn")}
                </Button>
              </Link>
              <Link href="/auth/login">
                <Button className="bg-[#006655] hover:bg-[#005544] text-white text-xs font-semibold px-4 py-2 rounded-xl transition-all shadow-md shadow-[#006655]/20 cursor-pointer">
                  Acceso Demo
                </Button>
              </Link>
            </div>
          )}

          {/* Mobile Menu Button */}
          <Sheet>
            <SheetTrigger render={
              <Button variant="ghost" size="icon" className="md:hidden text-[#19322F] cursor-pointer">
                <Menu className="w-6 h-6" />
              </Button>
            } />
            <SheetContent side="right" className="w-72 bg-white">
              <SheetHeader className="text-left border-b pb-4">
                <SheetTitle className="flex items-center space-x-2">
                  <Building2 className="w-6 h-6 text-[#006655]" />
                  <span className="font-bold text-lg text-[#19322F]">LuxeEstate</span>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col space-y-4 pt-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-base font-medium text-[#19322F] hover:text-[#006655] transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
