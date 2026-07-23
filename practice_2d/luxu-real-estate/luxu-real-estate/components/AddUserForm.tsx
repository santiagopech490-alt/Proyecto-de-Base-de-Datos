"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userFormSchema, UserFormValues } from "@/lib/user-form-schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { createUser } from "@/lib/actions/users";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function AddUserForm({ onSuccess }: { onSuccess?: () => void }) {
  const router = useRouter();
  const { t } = useLanguage();

  const form = useForm<UserFormValues>({
    resolver: zodResolver(userFormSchema),
    defaultValues: {
      full_name: "",
      email: "",
      role: "user",
    },
  });

  async function onSubmit(data: UserFormValues) {
    const result = await createUser(data);
    if (result.success) {
      toast.success(t("addUserForm.successMsg"));
      form.reset();
      if (onSuccess) onSuccess();
      router.refresh();
    } else {
      toast.error(result.error || "Failed to create user");
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="full_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("addUserForm.fullName")}</FormLabel>
              <FormControl>
                <Input placeholder={t("addUserForm.fullNamePlaceholder")} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("addUserForm.email")}</FormLabel>
              <FormControl>
                <Input placeholder={t("addUserForm.emailPlaceholder")} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="role"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("addUserForm.role")}</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger className="cursor-pointer">
                    <SelectValue placeholder={t("addUserForm.selectRole")} />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="admin" className="cursor-pointer">{t("addUserForm.adminRole")}</SelectItem>
                  <SelectItem value="agent" className="cursor-pointer">{t("addUserForm.agentRole")}</SelectItem>
                  <SelectItem value="user" className="cursor-pointer">{t("addUserForm.userRole")}</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="bg-[#006655] hover:bg-[#005544] text-white w-full cursor-pointer">
          {t("addUserForm.createUserBtn")}
        </Button>
      </form>
    </Form>
  );
}
