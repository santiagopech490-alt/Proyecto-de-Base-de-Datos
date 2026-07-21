'use client';

import React from 'react';
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
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Submitting profile update for user:", userId, "with values:", values);
    
    const { error } = await supabase
      .from('profiles')
      .update(values)
      .eq('id', userId);

    if (error) {
      console.error("Supabase update error:", error);
      toast.error('Failed to update settings: ' + error.message);
    } else {
      console.log("Profile updated successfully");
      toast.success('Settings updated successfully!');
      router.refresh();
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="full_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
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
              <FormLabel>Location</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="space-y-4">
          <h4 className="font-semibold text-sm">Notifications</h4>
          <FormField
            control={form.control}
            name="email_notifications"
            render={({ field }) => (
              <FormItem className="flex items-center justify-between rounded-lg border p-4">
                <FormLabel>Email Notifications</FormLabel>
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
              <FormItem className="flex items-center justify-between rounded-lg border p-4">
                <FormLabel>Push Notifications</FormLabel>
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
              <FormItem className="flex items-center justify-between rounded-lg border p-4">
                <FormLabel>SMS Notifications</FormLabel>
                <FormControl>
                  <Switch checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" disabled={form.formState.isSubmitting}>
          {form.formState.isSubmitting ? 'Saving...' : 'Save Changes'}
        </Button>
      </form>
    </Form>
  );
};

export default ProfileSettingsForm;
