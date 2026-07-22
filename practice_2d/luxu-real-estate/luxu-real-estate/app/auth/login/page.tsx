'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Building2, Chrome, Github, Loader2, Mail, Lock, Sparkles } from 'lucide-react';
import { signInWithGoogle, signInWithGithub } from '@/lib/services/auth';
import { createClient } from '@/lib/supabase/client';
import { toast } from 'sonner';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const [isGithubLoading, setIsGithubLoading] = useState(false);
  const router = useRouter();
  const supabase = useMemo(() => createClient(), []);
  const { t } = useLanguage();

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error('Please enter both email and password');
      return;
    }

    try {
      setIsLoading(true);
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        if (error.message.includes('Email not confirmed')) {
          toast.info('Please confirm your email address first. Check your inbox!');
          return;
        }
        if (error.message.includes('Invalid login credentials')) {
          toast.error('User not registered yet. Click "Sign up" or use "Demo Login".');
          return;
        }
        throw error;
      }
      
      if (data.user) {
        document.cookie = "luxe_auth=true; path=/; max-age=86400";
        toast.success('Logged in successfully!');
        window.location.href = '/';
      }
    } catch (error: any) {
      console.error('Login error:', error);
      toast.error(error.message || 'Failed to sign in');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDemoLogin = async () => {
    try {
      setIsLoading(true);
      const demoEmail = 'demo.admin@gmail.com';
      const demoPassword = 'Password123!';

      const { data, error } = await supabase.auth.signInWithPassword({
        email: demoEmail,
        password: demoPassword,
      });

      document.cookie = "luxe_auth=true; path=/; max-age=86400";

      if (!error && data?.user) {
        localStorage.removeItem('luxe_demo_user');
        toast.success('Logged in as Demo User via Supabase!');
        window.location.href = '/profile';
        return;
      }

      // Fallback: Save demo session in localStorage so demo access works instantly
      const demoUser = {
        user: { id: '00000000-0000-0000-0000-000000000001', email: demoEmail },
        profile: { full_name: 'Demo Admin User', avatar_url: '' }
      };
      localStorage.setItem('luxe_demo_user', JSON.stringify(demoUser));
      toast.success('Logged in as Demo User!');
      window.location.href = '/profile';
    } catch (err: any) {
      console.error('Demo login error:', err);
      toast.error(err.message || 'Demo login failed');
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      setIsGoogleLoading(true);
      await signInWithGoogle();
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : 'Failed to sign in with Google';
      toast.error(message);
      setIsGoogleLoading(false);
    }
  };

  const handleGithubLogin = async () => {
    try {
      setIsGithubLoading(true);
      await signInWithGithub();
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : 'Failed to sign in with GitHub';
      toast.error(message);
      setIsGithubLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_var(--tw-gradient-to)_100%)] from-[#F0F9F6] to-[#F7FCFA] dark:from-[#0d1f1b] dark:to-[#0f231f]">
      <div className="w-full max-w-md animate-in fade-in zoom-in duration-500">
        <div className="flex flex-col items-center mb-8">
          <div className="w-12 h-12 rounded-xl bg-[#19322F] flex items-center justify-center shadow-xl shadow-emerald-950/20 ring-1 ring-white/10 transform transition-transform hover:scale-110 duration-300 mb-3">
            <Building2 className="size-7 text-white" />
          </div>
          <span className="text-2xl font-bold tracking-tight text-[#19322F] dark:text-white">
            LuxeEstate
          </span>
        </div>

        <Card className="border-none shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-[24px] overflow-hidden">
          <CardHeader className="text-center pt-8 pb-4 space-y-1">
            <CardTitle className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              {t("auth.welcomeBack")}
            </CardTitle>
            <CardDescription className="text-slate-500 dark:text-slate-400">
              {t("auth.loginSubtitle")}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 px-8 pb-8">
            <form onSubmit={handleEmailLogin} className="space-y-4">
              <div className="space-y-2">
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-slate-400 pointer-events-none" />
                  <Input
                    type="email"
                    placeholder={t("auth.emailLabel")}
                    className="pl-10 h-12 rounded-xl border-[#E6E8EC] dark:border-slate-800 bg-white/50 dark:bg-slate-950/50 focus:ring-[#0F5A4D]"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isLoading}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-slate-400 pointer-events-none" />
                  <Input
                    type="password"
                    placeholder={t("auth.passwordLabel")}
                    className="pl-10 h-12 rounded-xl border-[#E6E8EC] dark:border-slate-800 bg-white/50 dark:bg-slate-950/50 focus:ring-[#0F5A4D]"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={isLoading}
                    required
                  />
                </div>
              </div>
              <Button
                type="submit"
                className="w-full h-12 rounded-xl bg-[#0F5A4D] hover:bg-[#0a3d34] text-white font-semibold transition-all active:scale-[0.98] disabled:opacity-70 cursor-pointer"
                disabled={isLoading}
              >
                {isLoading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  t("auth.signInBtn")
                )}
              </Button>
            </form>

            <Button
              type="button"
              variant="secondary"
              className="w-full h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 text-[#0F5A4D] dark:text-emerald-300 font-semibold hover:bg-emerald-100 transition-all flex items-center justify-center gap-2 border border-emerald-200/50 dark:border-emerald-800/50 cursor-pointer"
              onClick={handleDemoLogin}
              disabled={isLoading}
            >
              <Sparkles className="size-4 text-emerald-600" />
              {t("auth.demoLoginBtn")}
            </Button>

            <div className="space-y-3 pt-2">
              <Button
                variant="outline"
                className="w-full h-12 rounded-xl border-[#E6E8EC] dark:border-slate-800 bg-white dark:bg-slate-950 hover:bg-slate-50 dark:hover:bg-slate-900 text-slate-700 dark:text-slate-200 font-medium transition-all active:scale-[0.98] disabled:opacity-70 group cursor-pointer"
                onClick={handleGoogleLogin}
                disabled={isGoogleLoading || isGithubLoading || isLoading}
              >
                {isGoogleLoading ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Chrome className="mr-2 h-4 w-4 text-[#4285F4] transition-transform group-hover:scale-110" />
                )}
                {t("auth.googleLogin")}
              </Button>
              <Button
                variant="outline"
                className="w-full h-12 rounded-xl border-[#E6E8EC] dark:border-slate-800 bg-white dark:bg-slate-950 hover:bg-slate-50 dark:hover:bg-slate-900 text-slate-700 dark:text-slate-200 font-medium transition-all active:scale-[0.98] disabled:opacity-70 group cursor-pointer"
                onClick={handleGithubLogin}
                disabled={isGoogleLoading || isGithubLoading || isLoading}
              >
                {isGithubLoading ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Github className="mr-2 h-4 w-4 text-slate-900 dark:text-white transition-transform group-hover:scale-110" />
                )}
                {t("auth.githubLogin")}
              </Button>
            </div>

            <div className="relative py-4">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-slate-100 dark:border-slate-800" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-transparent px-2 text-slate-400 dark:text-slate-500 font-medium tracking-wider">
                  {t("auth.orJoin")}
                </span>
              </div>
            </div>

            <div className="text-center space-y-4">
              <p className="text-sm text-slate-500 dark:text-slate-400">
                {t("auth.noAccount")}{' '}
                <Link
                  href="/auth/signup"
                  className="font-semibold text-[#0F5A4D] hover:text-[#0a3d34] transition-colors"
                >
                  {t("auth.signUpLink")}
                </Link>
              </p>
            </div>
          </CardContent>
          <CardFooter className="bg-slate-50/50 dark:bg-slate-800/20 px-8 py-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-[11px] text-slate-400 dark:text-slate-500 font-medium uppercase tracking-widest border-t border-slate-100 dark:border-slate-800">
            <Link href="/privacy" className="hover:text-slate-600 dark:hover:text-slate-300 transition-colors">
              {t("auth.privacy")}
            </Link>
            <Link href="/terms" className="hover:text-slate-600 dark:hover:text-slate-300 transition-colors">
              {t("auth.terms")}
            </Link>
            <Link href="/help" className="hover:text-slate-600 dark:hover:text-slate-300 transition-colors">
              {t("auth.help")}
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
