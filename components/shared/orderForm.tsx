import { useState } from "react";
import { motion } from "framer-motion";
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
import { Loader2, Gift, CheckCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { orderSchema } from "@/schema/orderSchema";

const nigerianStates = [
  "Abia",
  "Adamawa",
  "Akwa Ibom",
  "Anambra",
  "Bauchi",
  "Bayelsa",
  "Benue",
  "Borno",
  "Cross River",
  "Delta",
  "Ebonyi",
  "Edo",
  "Ekiti",
  "Enugu",
  "FCT Abuja",
  "Gombe",
  "Imo",
  "Jigawa",
  "Kaduna",
  "Kano",
  "Katsina",
  "Kebbi",
  "Kogi",
  "Kwara",
  "Lagos",
  "Nasarawa",
  "Niger",
  "Ogun",
  "Ondo",
  "Osun",
  "Oyo",
  "Plateau",
  "Rivers",
  "Sokoto",
  "Taraba",
  "Yobe",
  "Zamfara",
];

const packages = [
  { value: "1_pack_20500", label: "1 Pack - ₦20,500", savings: null },
  {
    value: "2_packs_37000",
    label: "2 Packs - ₦37,000",
    savings: "Save ₦4,000",
  },
  {
    value: "3_packs_54000",
    label: "3 Packs - ₦54,000",
    savings: "Save ₦7,500",
  },
  {
    value: "4_packs_68000",
    label: "4 Packs - ₦68,000",
    savings: "Save ₦14,000",
  },
];

export default function OrderForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    customer_name: "",
    address: "",
    phone: "",
    city: "",
    package_type: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setError(null);
  };
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  setError(null);

  // ✅ Zod validation
  const parsed = orderSchema.safeParse(formData);
  console.log(parsed);

  if (!parsed.success) {
    const firstError = parsed.error.issues[0]?.message || "Invalid input";

    setError(firstError);
    setIsSubmitting(false);
    return;
  }

  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbwhy6pCsGOiSa-6DcctH_4J50ZGv4mVxHuSvp_WBdsGS2JXt2p4SywLzhZNgozD_688/exec",
      {
        method: "POST",
        redirect: "follow",
        headers: {
          "Content-Type": "text/plain;charset=UTF-8",
        },
        body: JSON.stringify(parsed.data), // 👈 validated data only
      },
    );

    if (!response.ok) {
      const text = await response.text().catch(() => "No response body");
      throw new Error(`Server error: ${response.status} - ${text}`);
    }

    const result = await response.json();

    if (result.status === "success") {
      router.push("/thank-you");
    } else {
      setError(result.message || "Submission failed.");
    }
  } catch (err: any) {
    console.error("Fetch error:", err);
    setError(
      err.message?.includes("401")
        ? "401 Unauthorized – Check web app deployment"
        : "Failed to submit. Try again.",
    );
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <section
      id="order-form"
      className="py-20 bg-gradient-to-b from-emerald-800 to-emerald-900 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-lime-400 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-400 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-lime-500 text-emerald-900 rounded-full text-sm font-bold mb-4">
            LIMITED TIME OFFER
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Order Your Stroke Expeller Tea Today
          </h2>
          <p className="text-emerald-200 text-lg max-w-2xl mx-auto">
            Take the first step towards better health. Fill out the form below
            and we'll deliver straight to your doorstep.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            {/* Package Selection Header */}
            <div className="bg-gradient-to-r from-lime-500 to-emerald-500 p-6 text-center">
              <Gift className="w-10 h-10 text-white mx-auto mb-3" />
              <h3 className="text-xl font-bold text-white">
                Special Bulk Discounts Available!
              </h3>
              <p className="text-emerald-100">Order more packs and save big</p>
            </div>

            <form onSubmit={handleSubmit} className="p-8 space-y-6">
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                  {error}
                </div>
              )}

              {/* Name */}
              <div className="space-y-2">
                <Label
                  htmlFor="name"
                  className="text-emerald-900 font-semibold"
                >
                  Full Name *
                </Label>
                <Input
                  id="name"
                  placeholder="Enter your full name"
                  value={formData.customer_name}
                  onChange={(e) =>
                    handleChange("customer_name", e.target.value)
                  }
                  required
                  className="h-12 border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
                />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <Label
                  htmlFor="phone"
                  className="text-emerald-900 font-semibold"
                >
                  Phone Number *
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="e.g. 08012345678"
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  required
                  className="h-12 border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
                />
              </div>

              {/* Address */}
              <div className="space-y-2">
                <Label
                  htmlFor="address"
                  className="text-emerald-900 font-semibold"
                >
                  Delivery Address *
                </Label>
                <Input
                  id="address"
                  placeholder="Enter your full delivery address"
                  value={formData.address}
                  onChange={(e) => handleChange("address", e.target.value)}
                  required
                  className="h-12 border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
                />
              </div>

              {/* City/State */}
              <div className="space-y-2">
                <Label
                  htmlFor="city"
                  className="text-emerald-900 font-semibold"
                >
                  State *
                </Label>
                <Select
                  value={formData.city}
                  onValueChange={(value) => handleChange("city", value)}
                  required
                >
                  <SelectTrigger className="h-12 border-gray-200 focus:border-emerald-500 focus:ring-emerald-500">
                    <SelectValue placeholder="Select your state" />
                  </SelectTrigger>
                  <SelectContent>
                    {nigerianStates.map((state) => (
                      <SelectItem key={state} value={state}>
                        {state}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Package Selection */}
              <div className="space-y-3">
                <Label className="text-emerald-900 font-semibold">
                  Select Package *
                </Label>
                <div className="grid gap-3">
                  {packages.map((pkg) => (
                    <label
                      key={pkg.value}
                      className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                        formData.package_type === pkg.value
                          ? "border-emerald-500 bg-emerald-50"
                          : "border-gray-200 hover:border-emerald-300 hover:bg-gray-50"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="package"
                          value={pkg.value}
                          checked={formData.package_type === pkg.value}
                          onChange={(e) =>
                            handleChange("package_type", e.target.value)
                          }
                          className="w-5 h-5 text-emerald-600 focus:ring-emerald-500"
                        />
                        <span className="font-semibold text-emerald-900">
                          {pkg.label}
                        </span>
                      </div>
                      {pkg.savings && (
                        <span className="px-3 py-1 bg-lime-100 text-lime-700 text-sm font-bold rounded-full">
                          {pkg.savings}
                        </span>
                      )}
                    </label>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={
                  isSubmitting ||
                  !formData.customer_name ||
                  !formData.phone ||
                  !formData.address ||
                  !formData.city ||
                  !formData.package_type
                }
                className="w-full h-14 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Place Order Now
                  </>
                )}
              </Button>

              <p className="text-center text-gray-500 text-sm">
                Pay on delivery. We'll call to confirm your order before
                shipping.
              </p>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
