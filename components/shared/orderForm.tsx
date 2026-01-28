import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { orderSchema, OrderFormData } from "../../schema/orderSchema";
import { submitOrder } from "../../app/submitOrder";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader2, CheckCircle } from "lucide-react";
import { useState } from "react";

export default function OrderForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const form = useForm<OrderFormData>({
    resolver: zodResolver(orderSchema),
  });

  const onSubmit = async (data: OrderFormData) => {
    try {
      setLoading(true);
      await submitOrder(data);
      router.push("/thank-you");
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <Label>Full Name</Label>
        <Input {...form.register("customer_name")} />
        <p className="text-xs text-red-500">
          {form.formState.errors.customer_name?.message}
        </p>
      </div>

      <div>
        <Label>Phone</Label>
        <Input {...form.register("phone")} />
        <p className="text-xs text-red-500">
          {form.formState.errors.phone?.message}
        </p>
      </div>

      <div>
        <Label>Address</Label>
        <Input {...form.register("address")} />
        <p className="text-xs text-red-500">
          {form.formState.errors.address?.message}
        </p>
      </div>

      <div>
        <Label>State</Label>
        <Select onValueChange={(v) => form.setValue("city", v)}>
          <SelectTrigger>
            <SelectValue placeholder="Select your state" />
          </SelectTrigger>
          <SelectContent>
            {/* {nigerianStates.map((state) => (
              <SelectItem key={state} value={state}>
                {state}
              </SelectItem>
            ))} */}
          </SelectContent>
        </Select>
        <p className="text-xs text-red-500">
          {form.formState.errors.city?.message}
        </p>
      </div>

      <Button type="submit" disabled={loading}>
        {loading ? (
          <Loader2 className="animate-spin mr-2" />
        ) : (
          <CheckCircle className="mr-2" />
        )}
        Place Order
      </Button>
    </form>
  );
}
