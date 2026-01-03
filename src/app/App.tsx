import { useForm } from "react-hook-form";
import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";
import { Button } from "./components/ui/button";
import { Checkbox } from "./components/ui/checkbox";
import { toast } from "sonner";
import { Toaster } from "./components/ui/sonner";
import { motion } from "motion/react";
import logo from "figma:asset/d76871624031b4d510e5cd2350db73731222546a.png";
import { TermsModal } from "./components/TermsModal";
import { PrivacyModal } from "./components/PrivacyModal";
import { useState } from "react";

interface FormData {
  fullName: string;
  city: string;
  email: string;
  phone: string;
  age: string;
  terms: boolean;
}

export default function App() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
    setValue,
    watch,
  } = useForm<FormData>();

  const [termsModalOpen, setTermsModalOpen] = useState(false);
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);

  const onSubmit = async (data: FormData) => {
    if (!termsAccepted) {
      toast.error("Kullanım koşullarını kabul etmelisiniz");
      return;
    }
    
    try {
      // Send form data to Vercel serverless function
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: data.fullName,
          city: data.city,
          email: data.email,
          phone: data.phone,
          age: data.age,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        console.error("Form submission error:", result);
        toast.error(result.error || "Başvuru gönderilemedi");
        return;
      }

      console.log("Form submitted successfully:", result);
      toast.success("Başvurunuz e-posta ile gönderildi! 🎉");
      reset();
      setTermsAccepted(false);
    } catch (error) {
      console.error("Network error:", error);
      toast.error("Bağlantı hatası. Lütfen tekrar deneyin.");
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6">
      <Toaster />
      
      {/* Mobile Vertical Container - Instagram Shorts Format */}
      <div className="w-full max-w-sm bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6 text-center">
          <div className="flex justify-center mb-3">
            <motion.img 
              src={logo} 
              alt="Ayzek Ajans Logo" 
              className="size-40"
              animate={{ 
                y: [0, -10, 0],
                rotate: [-2, 2, -2]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
          <motion.p 
            className="text-white/90 text-sm"
            initial={{ opacity: 0.7 }}
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Başvuru Formu
          </motion.p>
        </div>

        {/* Form */}
        <div className="p-6">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
            
            {/* Full Name */}
            <div className="space-y-1">
              <Label htmlFor="fullName" className="text-sm">
                İsim Soyisim *
              </Label>
              <Input
                id="fullName"
                type="text"
                placeholder="Adınız Soyadınız"
                {...register("fullName", {
                  required: "İsim soyisim zorunludur",
                  minLength: {
                    value: 3,
                    message: "En az 3 karakter olmalı",
                  },
                })}
                className={errors.fullName ? "border-red-500" : ""}
              />
              {errors.fullName && (
                <p className="text-red-500 text-xs">{errors.fullName.message}</p>
              )}
            </div>

            {/* City */}
            <div className="space-y-1">
              <Label htmlFor="city" className="text-sm">
                Şehir *
              </Label>
              <Input
                id="city"
                type="text"
                placeholder="Yaşadığınız şehir"
                {...register("city", {
                  required: "ehir zorunludur",
                })}
                className={errors.city ? "border-red-500" : ""}
              />
              {errors.city && (
                <p className="text-red-500 text-xs">{errors.city.message}</p>
              )}
            </div>

            {/* Email */}
            <div className="space-y-1">
              <Label htmlFor="email" className="text-sm">
                E-posta *
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="ornek@email.com"
                {...register("email", {
                  required: "E-posta zorunludur",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Geçerli bir e-posta girin",
                  },
                })}
                className={errors.email ? "border-red-500" : ""}
              />
              {errors.email && (
                <p className="text-red-500 text-xs">{errors.email.message}</p>
              )}
            </div>

            {/* Phone */}
            <div className="space-y-1">
              <Label htmlFor="phone" className="text-sm">
                Telefon *
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="05XX XXX XX XX"
                {...register("phone", {
                  required: "Telefon zorunludur",
                  pattern: {
                    value: /^[0-9]{10,11}$/,
                    message: "Geçerli telefon numarası girin",
                  },
                })}
                className={errors.phone ? "border-red-500" : ""}
              />
              {errors.phone && (
                <p className="text-red-500 text-xs">{errors.phone.message}</p>
              )}
            </div>

            {/* Age */}
            <div className="space-y-1">
              <Label htmlFor="age" className="text-sm">
                Yaş *
              </Label>
              <Input
                id="age"
                type="number"
                placeholder="18+"
                {...register("age", {
                  required: "Yaş zorunludur",
                  min: {
                    value: 18,
                    message: "18 yaşından büyük olmalısınız",
                  },
                  max: {
                    value: 120,
                    message: "Geçerli bir yaş girin",
                  },
                })}
                className={errors.age ? "border-red-500" : ""}
              />
              {errors.age && (
                <p className="text-red-500 text-xs">{errors.age.message}</p>
              )}
            </div>

            {/* Terms */}
            <div className="flex items-start space-x-2 pt-2">
              <Checkbox
                id="terms"
                checked={termsAccepted}
                onCheckedChange={(checked) => {
                  setTermsAccepted(checked as boolean);
                }}
              />
              <label
                htmlFor="terms"
                className="text-xs leading-tight cursor-pointer"
              >
                <button 
                  type="button"
                  className="text-purple-600 hover:underline" 
                  onClick={(e) => {
                    e.preventDefault();
                    setTermsModalOpen(true);
                  }}
                >
                  Kullanım koşullarını
                </button>{" "}
                ve{" "}
                <button 
                  type="button"
                  className="text-purple-600 hover:underline" 
                  onClick={(e) => {
                    e.preventDefault();
                    setPrivacyModalOpen(true);
                  }}
                >
                  gizlilik politikasını
                </button>{" "}
                kabul ediyorum *
              </label>
            </div>
            {!termsAccepted && (
              <p className="text-red-500 text-xs">Kabul etmelisiniz</p>
            )}

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg mt-4"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Gönderiliyor..." : "🌟 Başvur"}
            </Button>
          </form>

          {/* Footer */}
          <div className="text-center mt-4">
            <p className="text-xs text-gray-500">
              Bizi Instagram'da takip edin! @ayzek_ajans
            </p>
          </div>
        </div>
      </div>

      {/* Terms Modal */}
      <TermsModal isOpen={termsModalOpen} onClose={() => setTermsModalOpen(false)} />

      {/* Privacy Modal */}
      <PrivacyModal isOpen={privacyModalOpen} onClose={() => setPrivacyModalOpen(false)} />
    </div>
  );
}