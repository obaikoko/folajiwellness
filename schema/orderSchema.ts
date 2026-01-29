import { z } from "zod";

export const orderSchema = z.object({
  customer_name: z.string().min(2, "Full name must be at least 2 characters"),

  phone: z
    .string()
    .regex(
      /^(?:\+234|0)[789][01]\d{8}$/,
      "Enter a valid Nigerian phone number",
    ),

  address: z.string().min(5, "Address must be at least 5 characters"),

  city: z.string().min(1, "Please select a state"),

  package_type: z.string().min(1, "Please select a package"),
});

export type OrderFormData = z.infer<typeof orderSchema>;
