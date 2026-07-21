'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Building2, Chrome, Github, Loader2, Mail, Lock } from 'lucide-react';
import { signInWithGoogle, signInWithGithub } from '@/lib/services/auth';
import { createClient } from '@/lib/supabase/client';
import { toast } from 'sonner';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const [isGithubLoading, setIsGithubLoading] = useState(false);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    async function checkUser() {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        router.push('/properties');
      } else {
        setIsCheckingAuth(false);
      }
    }
    checkUser();
  }, [router, supabase]);

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
          toast.error('Incorrect email or password. Please try again.');
          return;
        }
        throw error;
      }
      
      if (data.user) {
        toast.success('Logged in successfully!');
        router.push('/properties');
      }
    } catch (error: any) {
      console.error('Login error:', error);
      toast.error(error.message || 'Failed to sign in');
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

  if (isCheckingAuth) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F0F9F6] dark:bg-[#0d1f1b]">
        <Loader2 className="size-10 text-[#0F5A4D] animate-spin" />
      </div>
    );
  }

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
              Welcome back
            </CardTitle>
            <CardDescription className="text-slate-500 dark:text-slate-400">
              Login to your LuxeEstate account
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 px-8 pb-8">
            <form onSubmit={handleEmailLogin} className="space-y-4">
              <div className="space-y-2">
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
                  <Input
                    type="email"
                    placeholder="Email address"
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
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
                  <Input
                    type="password"
                    placeholder="Password"
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
                className="w-full h-12 rounded-xl bg-[#0F5A4D] hover:bg-[#0a3d34] text-white font-semibold transition-all active:scale-[0.98] disabled:opacity-70"
                disabled={isLoading}
              >
                {isLoading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  'Sign In'
                )}
              </Button>
            </form>

            <div className="space-y-3 pt-2">
              <Button
                variant="outline"
                className="w-full h-12 rounded-xl border-[#E6E8EC] dark:border-slate-800 bg-white dark:bg-slate-950 hover:bg-slate-50 dark:hover:bg-slate-900 text-slate-700 dark:text-slate-200 font-medium transition-all active:scale-[0.98] disabled:opacity-70 group"
                onClick={handleGoogleLogin}
                disabled={isGoogleLoading || isGithubLoading || isLoading}
              >
                {isGoogleLoading ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Chrome className="mr-2 h-4 w-4 text-[#4285F4] transition-transform group-hover:scale-110" />
                )}
                Continue with Google
              </Button>
              <Button
                variant="outline"
                className="w-full h-12 rounded-xl border-[#E6E8EC] dark:border-slate-800 bg-white dark:bg-slate-950 hover:bg-slate-50 dark:hover:bg-slate-900 text-slate-700 dark:text-slate-200 font-medium transition-all active:scale-[0.98] disabled:opacity-70 group"
                onClick={handleGithubLogin}
                disabled={isGoogleLoading || isGithubLoading || isLoading}
              >
                {isGithubLoading ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Github className="mr-2 h-4 w-4 text-slate-900 dark:text-white transition-transform group-hover:scale-110" />
                )}
                Continue with GitHub
              </Button>
            </div>

            <div className="relative py-4">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-slate-100 dark:border-slate-800" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-transparent px-2 text-slate-400 dark:text-slate-500 font-medium tracking-wider">
                  Or join our community
                </span>
              </div>
            </div>

            <div className="text-center space-y-4">
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Don't have an account?{' '}
                <Link
                  href="/auth/signup"
                  className="font-semibold text-[#0F5A4D] hover:text-[#0a3d34] transition-colors"
                >
                  Sign up
                </Link>
              </p>
              
              <div className="pt-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-full border-[#E6E8EC] dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 text-xs font-medium"
                  onClick={handleGoogleLogin}
                  disabled={isGoogleLoading || isGithubLoading}
                >
                  <Chrome className="mr-2 h-3 w-3 text-[#4285F4]" />
                  Sign up with Gmail
                </Button>
              </div>
            </div>
          </CardContent>
          <CardFooter className="bg-slate-50/50 dark:bg-slate-800/20 px-8 py-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-[11px] text-slate-400 dark:text-slate-500 font-medium uppercase tracking-widest border-t border-slate-100 dark:border-slate-800">
            <Link href="/privacy" className="hover:text-slate-600 dark:hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-600 dark:hover:text-slate-300 transition-colors">
              Terms of Service
            </Link>
            <Link href="/help" className="hover:text-slate-600 dark:hover:text-slate-300 transition-colors">
              Help Center
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
