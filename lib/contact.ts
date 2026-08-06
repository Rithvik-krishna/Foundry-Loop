import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(120),
  email: z.string().trim().email("Please enter a valid email address.").max(254),
  company: z.string().trim().max(160).optional().or(z.literal("")),
  subject: z.string().trim().min(3, "Please add a short subject.").max(180),
  message: z.string().trim().min(10, "Please tell us a little more.").max(5000),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
