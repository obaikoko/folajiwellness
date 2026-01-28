// order-schema.ts
import { z } from "zod";

export const orderSchema = z.object({
  customer_name: z.string().min(2, "Full name is required"),
  phone: z.string().min(10, "Enter a valid phone number"),
  address: z.string().min(5, "Address is required"),
  city: z.string().min(1, "State is required"),
  package_type: z.string().min(1, "Select a package"),
});

export type OrderFormData = z.infer<typeof orderSchema>;
