import { z } from "zod";

export const userFormSchema = z.object({
  full_name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  role: z.enum(["admin", "agent", "user"], {
    errorMap: () => ({ message: "Please select a valid role." }),
  }),
});

export type UserFormValues = z.infer<typeof userFormSchema>;
