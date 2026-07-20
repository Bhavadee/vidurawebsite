import { z } from "zod";

export const inquirySchema = z.object({
  fullName: z.string().min(2, "Enter your full name."),
  phone: z.string().regex(/^[0-9+\-\s()]{8,20}$/, "Enter a valid phone number."),
  email: z.string().email("Enter a valid email address.").optional().or(z.literal("")),
  course: z.string().min(1, "Select a course."),
  message: z.string().max(500, "Message must be 500 characters or fewer.").optional(),
});

export type InquiryFormValues = z.infer<typeof inquirySchema>;
