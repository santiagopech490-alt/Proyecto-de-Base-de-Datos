'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Building2, Chrome, Github, Loader2, Mail, Lock, User } from 'lucide-react';
import { signInWithGoogle, signInWithGithub } from '@/lib/services/auth';
import { createClient } from '@/lib/supabase/client';
import { toast } from 'sonner';

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const [isGithubLoading, setIsGithubLoading] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password || !fullName) {
      toast.error('Please fill in all fields');
      return;
    }

    try {
      setIsLoading(true);
      console.log('Starting signup for:', email);
      
      // 1. Sign up the user in Supabase Auth
      const { data, error: signupError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
          },
          emailRedirectTo: `${window.location.origin}/auth/callback`,
        },
      });

      if (signupError) {
        if (signupError.message.includes('User already registered')) {
          toast.error('This email is already registered. Please log in instead.');
          router.push('/auth/login');
          return;
        }
        throw signupError;
      }

      if (data.user) {
        console.log('User created in Auth successfully');
        
        // If email confirmation is required, data.session will be null
        if (!data.session) {
          toast.info('Success! Please check your email to confirm your account.');
        } else {
          toast.success('Account created successfully!');
        }

        router.push('/auth/login');
      }
    } catch (error: any) {
      console.error('Detailed error:', error);
      toast.error(error.message || 'Failed to create account');
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
              Create an account
            </CardTitle>
            <CardDescription className="text-slate-500 dark:text-slate-400">
              Join LuxeEstate today
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 px-8 pb-8">
            <form onSubmit={handleSignup} className="space-y-4">
              <div className="space-y-2">
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
                  <Input
                    type="text"
                    placeholder="Full Name"
                    className="pl-10 h-12 rounded-xl border-[#E6E8EC] dark:border-slate-800 bg-white/50 dark:bg-slate-950/50 focus:ring-[#0F5A4D]"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    disabled={isLoading}
                    required
                  />
                </div>
              </div>
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
                    placeholder="Create a password"
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
                  'Create Account'
                )}
              </Button>
            </form>

            <div className="relative py-4">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-slate-100 dark:border-slate-800" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-transparent px-2 text-slate-400 dark:text-slate-500 font-medium tracking-wider">
                  Or use social login
                </span>
              </div>
            </div>

            <div className="space-y-3">
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
                Register with Google
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
                Register with GitHub
              </Button>
            </div>

            <div className="text-center pt-4">
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Already have an account?{' '}
                <Link
                  href="/auth/login"
                  className="font-semibold text-[#0F5A4D] hover:text-[#0a3d34] transition-colors"
                >
                  Log in
                </Link>
              </p>
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
