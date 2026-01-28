// submit-order.ts
import { OrderFormData } from "../schema/orderSchema";

export async function submitOrder(data: OrderFormData) {
  const res = await fetch(
    "https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...data,
        created_at: new Date().toISOString(),
      }),
    },
  );

  if (!res.ok) {
    throw new Error("Failed to submit order");
  }
}
