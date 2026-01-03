# Ayzek Ajans - Başvuru Formu

Modern ve kullanıcı dostu başvuru formu uygulaması.

## 🎉 403 HATASI ÇÖZÜLDÜ!

**Supabase 403 deployment hatası tamamen ortadan kaldırıldı!**

### Yeni Mimari: Vercel Serverless Functions ✅
- ✅ No Supabase Edge Functions dependency
- ✅ Otomatik deployment (her push'ta)
- ✅ Zero configuration
- ✅ Daha hızlı ve güvenilir

**Detaylı bilgi:** 👉 [VERCEL_SOLUTION.md](./VERCEL_SOLUTION.md)

---

## Teknolojiler

- ⚡ **Vite** - Hızlı build tool
- ⚛️ **React 18** - UI framework  
- 🎨 **Tailwind CSS** - Styling
- 📝 **React Hook Form** - Form yönetimi
- 🔔 **Sonner** - Toast bildirimleri
- 🎭 **Motion** - Animasyonlar
- 🚀 **Vercel Serverless Functions** - Backend API
- 📧 **Resend** - E-posta servisi

---

## Kurulum

```bash
npm install
```

## Geliştirme

```bash
npm run dev
```

## Production Build

```bash
npm run build
```

---

## Deployment

Bu proje **Vercel** üzerinde deploy edilmek üzere yapılandırılmıştır.

### ⚡ Hızlı Başlangıç (5 Dakika!)

**[👉 HIZLI_BASLANGIC.md](./HIZLI_BASLANGIC.md)** - 5 adımda deployment!

### Detaylı Rehber

1. **Resend API Key Al:**
   - https://resend.com → Sign Up → API Keys → Create
   
2. **GitHub'a Push:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

3. **Vercel'e Deploy:**
   - https://vercel.com → Import Project
   - Repository seç: `azm6530-ayzekajans`
   - Environment Variable ekle:
     - `RESEND_API_KEY` = (Resend'den aldığın key)
   - Deploy!

**Detaylı adımlar:** [VERCEL_DEPLOYMENT_REHBERI.md](./VERCEL_DEPLOYMENT_REHBERI.md)

---

## Environment Variables

### Vercel Dashboard'a Eklenecek:

```bash
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxx
```

**Not:** Bu değişken sadece Vercel'de kullanılır, Supabase artık gerekli değil!

---

## API Endpoints

### Production:
```
https://azm6530-ayzekajans.vercel.app/api/health
https://azm6530-ayzekajans.vercel.app/api/submit-form
```

### Local Development:
```
http://localhost:5173/api/health
http://localhost:5173/api/submit-form
```

---

## Özellikler

- ✅ Responsive tasarım (mobil-first)
- ✅ Form validasyonu (React Hook Form)
- ✅ E-posta entegrasyonu (Resend API)
- ✅ Kullanım koşulları ve gizlilik politikası
- ✅ Modern animasyonlar (Motion/Framer Motion)
- ✅ Toast bildirimleri (Sonner)
- ✅ Vercel Serverless Functions backend
- ✅ Otomatik deployment
- ✅ HTTPS & CORS configured

---

## Proje Yapısı

```
azm6530-ayzekajans/
├── api/                      # Vercel Serverless Functions
│   ├── health.ts            # Health check endpoint
│   └── submit-form.ts       # Form submission handler
├── src/
│   ├── app/
│   │   ├── App.tsx          # Ana component
│   │   └── components/      # React components
│   └── styles/              # CSS & Tailwind
├── .env.example             # Environment variables template
├── vercel.json              # Vercel configuration
├── package.json             # Dependencies
├── README.md                # Bu dosya
├── VERCEL_SOLUTION.md       # Deployment rehberi
└── DEPLOYMENT_GUIDE.md      # Eski deployment rehberi
```

---

## Test Etme

### 1. Health Check:
```bash
curl https://azm6530-ayzekajans.vercel.app/api/health
```

**Beklenen:**
```json
{
  "status": "ok",
  "service": "Ayzek Ajans API",
  "timestamp": "2025-12-25T..."
}
```

### 2. Form Submission:
```bash
curl -X POST https://azm6530-ayzekajans.vercel.app/api/submit-form \
  -H "Content-Type: application/json" \
  -d '{
    "fullName": "Test User",
    "city": "Istanbul",
    "email": "test@example.com",
    "phone": "05551234567",
    "age": "25"
  }'
```

**Beklenen:**
```json
{
  "success": true,
  "message": "Başvurunuz başarıyla gönderildi! ✅"
}
```

---

## Sorun Giderme

### 403 Supabase Hatası?
➡️ **ÇÖZÜLDÜ!** Artık Supabase Edge Functions kullanılmıyor.

### RESEND_API_KEY Hatası?
1. Vercel Dashboard → Settings → Environment Variables
2. `RESEND_API_KEY` var mı kontrol et
3. Yoksa ekle: https://resend.com/api-keys

### Form Çalışmıyor?
1. Browser Console (F12) → Network → XHR
2. `/api/submit-form` isteğini kontrol et
3. Vercel Dashboard → Logs → Real-time logs

**Detaylı troubleshooting:** [VERCEL_SOLUTION.md](./VERCEL_SOLUTION.md)

---

## Domain Ayarları (Opsiyonel)

### Custom Domain: www.ayzekajans.online

**Vercel:**
1. Dashboard → Settings → Domains
2. Add: `www.ayzekajans.online`

**DNS Provider:**
1. Add CNAME record:
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

**DNS propagation:** 5-60 dakika

---

## Güncellemeler

**Sonraki güncellemeler için:**
1. Kodda değişiklik yap
2. GitHub'a push et
3. Vercel **otomatik deploy** eder! 🎉

**Zero maintenance, zero configuration!**

---

## Destek & Dokümantasyon

- 📖 **Deployment Guide:** [VERCEL_SOLUTION.md](./VERCEL_SOLUTION.md)
- 🔧 **Troubleshooting:** [SUPABASE_FIX.md](./SUPABASE_FIX.md)
- 📊 **Fix Report:** [FIX_REPORT.md](./FIX_REPORT.md)
- 🌐 **Live Site:** https://azm6530-ayzekajans.vercel.app

---

## Lisans

© 2025 Ayzek Ajans. Tüm hakları saklıdır.

---

## Katkıda Bulunanlar

- **Developer:** Figma Make AI
- **Design:** Ayzek Ajans
- **Deployment:** Vercel
- **Email:** Resend

---

**Made with ❤️ using Figma Make, React, Tailwind CSS & Vercel**