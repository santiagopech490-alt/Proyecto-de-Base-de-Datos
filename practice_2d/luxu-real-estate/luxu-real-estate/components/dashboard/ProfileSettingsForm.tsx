'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { toast } from 'sonner';
import { createClient } from '@/lib/supabase/client';
import { useLanguage } from '@/lib/i18n/LanguageContext';

const supabase = createClient();

const formSchema = z.object({
  full_name: z.string().min(2),
  location: z.string().optional(),
  email_notifications: z.boolean(),
  push_notifications: z.boolean(),
  sms_notifications: z.boolean(),
});

interface ProfileSettingsFormProps {
  userId: string;
  defaultValues: z.infer<typeof formSchema>;
}

const ProfileSettingsForm: React.FC<ProfileSettingsFormProps> = ({ userId, defaultValues }) => {
  const router = useRouter();
  const { t } = useLanguage();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  useEffect(() => {
    const saved = localStorage.getItem('luxe_demo_profile');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed.full_name) form.setValue('full_name', parsed.full_name);
        if (parsed.location) form.setValue('location', parsed.location);
      } catch {}
    }
  }, [form]);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      // 1. Update local storage so name and location change immediately across the app
      const existingDemo = localStorage.getItem('luxe_demo_user');
      if (existingDemo) {
        try {
          const parsed = JSON.parse(existingDemo);
          parsed.profile = { ...parsed.profile, full_name: values.full_name, location: values.location };
          localStorage.setItem('luxe_demo_user', JSON.stringify(parsed));
        } catch {}
      }

      const localProfile = { full_name: values.full_name, location: values.location };
      localStorage.setItem('luxe_demo_profile', JSON.stringify(localProfile));

      // 2. Attempt Supabase DB update in background
      try {
        await supabase
          .from('profiles')
          .update(values)
          .eq('id', userId);
      } catch (dbErr) {
        console.warn("DB profile update skipped or warning:", dbErr);
      }

      toast.success(t("profile.saveChanges") + ' ✓');
      window.location.reload();
    } catch (err: any) {
      toast.error('Error updating profile');
      console.error(err);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 max-w-xl">
        <FormField
          control={form.control}
          name="full_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("profile.fullName")}</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("profile.location")}</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="space-y-4 pt-2">
          <h4 className="font-semibold text-sm text-slate-800">{t("profile.notifications")}</h4>
          <FormField
            control={form.control}
            name="email_notifications"
            render={({ field }) => (
              <FormItem className="flex items-center justify-between rounded-xl border p-4 bg-white shadow-2xs">
                <FormLabel className="cursor-pointer">{t("profile.emailNotifications")}</FormLabel>
                <FormControl>
                  <Switch checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="push_notifications"
            render={({ field }) => (
              <FormItem className="flex items-center justify-between rounded-xl border p-4 bg-[#FFFFFF] shadow-2xs">
                <FormLabel className="cursor-pointer">{t("profile.pushNotifications")}</FormLabel>
                <FormControl>
                  <Switch checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="sms_notifications"
            render={({ field }) => (
              <FormItem className="flex items-center justify-between rounded-xl border p-4 bg-white shadow-2xs">
                <FormLabel className="cursor-pointer">{t("profile.smsNotifications")}</FormLabel>
                <FormControl>
                  <Switch checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" className="bg-[#006655] hover:bg-[#005544] text-white font-medium rounded-xl px-6 py-2 cursor-pointer" disabled={form.formState.isSubmitting}>
          {form.formState.isSubmitting ? '...' : t("profile.saveChanges")}
        </Button>
      </form>
    </Form>
  );
};

export default ProfileSettingsForm;
