'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Building2, Search, Bell, Shield, UserCheck, Check, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { createClient } from '@/lib/supabase/client';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [user, setUser] = useState<any>(null);
  const [profile, setProfile] = useState<any>(null);
  const [userRole, setUserRole] = useState<'Admin' | 'Cliente'>('Admin');
  const [notifications, setNotifications] = useState([
    {
      id: '1',
      title: 'Nueva Cita Solicitada',
      desc: 'El cliente María García solicitó una visita para Villa in Aspen #1',
      time: 'Hace 10 min',
      unread: true,
      icon: Building2
    },
    {
      id: '2',
      title: 'Propiedad Favorita Actualizada',
      desc: 'El precio de The Glass Pavilion bajó un 5%',
      time: 'Hace 1 hora',
      unread: true,
      icon: Bell
    }
  ]);
  const supabase = createClient();
  const { t, language, setLanguage } = useLanguage();

  // Handle role switching
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedRole = localStorage.getItem('luxe_active_role') as 'Admin' | 'Cliente';
      if (savedRole) {
        setUserRole(savedRole);
      }
    }
  }, []);

  const toggleUserRole = (newRole: 'Admin' | 'Cliente') => {
    setUserRole(newRole);
    if (typeof window !== 'undefined') {
      localStorage.setItem('luxe_active_role', newRole);
      window.dispatchEvent(new Event('luxe_role_changed'));
    }
  };

  useEffect(() => {
    async function fetchUserData() {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        if (user) {
          setUser(user);
          const { data: profile } = await supabase
            .from('profiles')
            .select('avatar_url, full_name, role')
            .eq('id', user.id)
            .single();
          setProfile(profile);
          return;
        }
      } catch (err) {
        console.warn("Auth check in Navbar:", err);
      }

      // Check local demo session
      const demoStr = localStorage.getItem('luxe_demo_user');
      const demoAuthCookie = typeof document !== 'undefined' && document.cookie.includes('luxe_auth=true');

      if (demoStr || demoAuthCookie) {
        try {
          const demoObj = demoStr ? JSON.parse(demoStr) : null;
          setUser(demoObj?.user || { id: 'demo-user', email: 'demo.admin@gmail.com' });
          setProfile(demoObj?.profile || { full_name: 'Administrador Luxe', role: 'Admin' });
        } catch {
          setUser({ id: 'demo-user', email: 'demo.admin@gmail.com' });
          setProfile({ full_name: 'Administrador Luxe', role: 'Admin' });
        }
      } else {
        setUser(null);
        setProfile(null);
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
              .select('avatar_url, full_name, role')
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
    setNotifications(prev => prev.map(n => ({ ...n, unread: false })));
  };

  const hasUnreadNotifications = notifications.some(n => n.unread);

  // Dynamic Navigation Links based on User Role (RBAC)
  const navLinks = [
    { href: '/properties', label: t("nav.buy"), roles: ['Cliente'] },
    { href: '/properties?type=rent', label: t("nav.rent"), roles: ['Cliente'] },
    { href: '/favorites', label: language === 'es' ? 'Favoritos' : 'Favorites', roles: ['Cliente'] },
    { href: '/admin/properties', label: language === 'es' ? 'Panel Control' : 'Dashboard', roles: ['Admin'] },
    { href: '/admin/properties/add', label: language === 'es' ? 'Vender' : 'Sell', roles: ['Admin'] },
    { href: '/admin/users', label: language === 'es' ? 'Usuarios' : 'Users', roles: ['Admin'] },
  ];

  const visibleLinks = navLinks.filter(link => link.roles.includes(userRole));

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
          {visibleLinks.map((link) => {
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
            <DropdownMenuTrigger render={
              <div className="relative cursor-pointer flex items-center justify-center p-2 rounded-lg hover:bg-slate-100 transition-colors">
                <Bell className="w-5 h-5 text-[#19322F] hover:text-[#006655]" />
                {hasUnreadNotifications && (
                  <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white animate-pulse"></span>
                )}
              </div>
            } />
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
              <div className="space-y-2">
                {notifications.map((item) => (
                  <div 
                    key={item.id}
                    className={`p-2.5 rounded-xl transition-colors flex items-start gap-3 cursor-pointer ${
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
              <DropdownMenuTrigger render={
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
                  <div className="hidden lg:flex flex-col text-left">
                    <span className="text-xs font-semibold text-[#19322F] leading-tight">
                      {profile?.full_name || 'Mi Cuenta'}
                    </span>
                    <span className="text-[10px] font-bold text-[#006655]">
                      {userRole === 'Admin' ? '👑 Admin' : '👤 Cliente'}
                    </span>
                  </div>
                </div>
              } />
              <DropdownMenuContent align="end" className="w-56 rounded-2xl shadow-xl p-2 bg-white border border-slate-100">
                <div className="px-3 py-2 border-b border-slate-100 mb-1">
                  <p className="text-xs font-bold text-[#19322F]">{profile?.full_name || 'Usuario Luxe'}</p>
                  <p className="text-[11px] text-slate-400 truncate">{user?.email || 'demo.admin@gmail.com'}</p>
                </div>

                {/* Role Switcher */}
                <div className="p-1.5 bg-slate-50 rounded-xl my-1 border border-slate-200/60">
                  <p className="text-[10px] font-bold text-[#5C706D] uppercase tracking-wider px-2 py-0.5 mb-1">Modo de Vista</p>
                  <div className="grid grid-cols-2 gap-1">
                    <button
                      onClick={() => toggleUserRole('Admin')}
                      className={`text-xs font-bold py-1 px-2 rounded-lg flex items-center justify-center gap-1 transition-all cursor-pointer ${
                        userRole === 'Admin' ? 'bg-[#006655] text-white shadow-xs' : 'text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      <Shield className="w-3 h-3" /> Admin
                    </button>
                    <button
                      onClick={() => toggleUserRole('Cliente')}
                      className={`text-xs font-bold py-1 px-2 rounded-lg flex items-center justify-center gap-1 transition-all cursor-pointer ${
                        userRole === 'Cliente' ? 'bg-[#006655] text-white shadow-xs' : 'text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      <UserCheck className="w-3 h-3" /> Cliente
                    </button>
                  </div>
                </div>

                <DropdownMenuSeparator />

                <DropdownMenuItem 
                  onClick={() => router.push('/profile')} 
                  className="cursor-pointer font-medium p-2 hover:bg-slate-100 rounded-lg text-xs"
                >
                  {t("nav.profile")}
                </DropdownMenuItem>
                
                {userRole === 'Admin' && (
                  <>
                    <DropdownMenuItem 
                      onClick={() => router.push('/admin/properties')} 
                      className="cursor-pointer font-medium p-2 hover:bg-slate-100 rounded-lg text-xs text-[#006655]"
                    >
                      {t("nav.dashboard")}
                    </DropdownMenuItem>
                    <DropdownMenuItem 
                      onClick={() => router.push('/admin/database')} 
                      className="cursor-pointer font-medium p-2 hover:bg-slate-100 rounded-lg text-xs text-blue-700"
                    >
                      🗄️ Diagnóstico BD (Objetos)
                    </DropdownMenuItem>
                  </>
                )}

                <DropdownMenuItem 
                  onClick={handleSignOut} 
                  className="text-red-600 focus:bg-red-50 cursor-pointer font-medium p-2 hover:bg-red-50 rounded-lg text-xs"
                >
                  {t("nav.signOut")}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex items-center space-x-2 sm:space-x-3">
              <Link href="/auth/login">
                <Button variant="ghost" size="sm" className="text-[#19322F] font-medium hover:text-[#006655] cursor-pointer text-xs sm:text-sm">
                  {t("nav.signIn")}
                </Button>
              </Link>
              <Link href="/auth/register">
                <Button size="sm" className="bg-[#006655] hover:bg-[#005544] text-white font-medium shadow-md shadow-[#006655]/20 cursor-pointer text-xs sm:text-sm">
                  {t("nav.register")}
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
