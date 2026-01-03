# 🚀 VERCEL DEPLOYMENT REHBERİ

## ✅ DURUM: Dosyalar Hazır!

Tüm kod değişiklikleri tamamlandı. Şimdi sadece deployment yapmanız gerekiyor.

---

## 📋 ADIM ADIM DEPLOYMENT

### 🔑 ADIM 1: Resend API Key Al (5 dakika)

1. **Resend.com'a Git:** https://resend.com
2. **Sign Up** tıkla (ücretsiz hesap aç)
   - GitHub ile giriş yapabilirsin (daha hızlı)
3. Dashboard'da **API Keys** sekmesine git
4. **Create API Key** tıkla
   - **Name:** `Ayzek Ajans Production`
   - **Permission:** `Sending access` seç
5. **Create** tıkla
6. ⚠️ **ÖNEMLİ:** API key'i **HEMEN KOPYALA** (sadece bir kez gösterilir!)
   - Format: `re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx`
   - Güvenli bir yere not al (şimdi lazım olacak)

---

### 📤 ADIM 2: GitHub'a Dosyaları Yükle (2 dakika)

Dosyalarınız şu anda Figma Make'te hazır. GitHub'a yüklemeniz gerekiyor:

**Seçenek A: GitHub Desktop (Önerilir)**

1. **GitHub Desktop**'ı aç
2. Sol üstte repository seç: `azm6530-ayzekajans`
3. Sol panelde değişiklikleri gör
4. **Summary** alanına yaz:
   ```
   🚀 Production ready with Vercel serverless functions
   ```
5. **Commit to main** tıkla
6. Üstte **Push origin** tıkla
7. ✅ Done!

**Seçenek B: Terminal / Command Line**

```bash
cd [projenizin bulunduğu klasör]
git add .
git commit -m "🚀 Production ready with Vercel serverless functions"
git push origin main
```

---

### 🌐 ADIM 3: Vercel'e Deploy Et (10 dakika)

#### 3.1 Vercel Hesabı Oluştur

1. **Vercel.com'a Git:** https://vercel.com
2. **Sign Up** tıkla
3. **Continue with GitHub** seç (önemli!)
4. GitHub ile giriş yap ve Vercel'e izin ver

#### 3.2 Projeyi Import Et

1. Vercel Dashboard'da **Add New...** tıkla → **Project** seç
2. **Import Git Repository** altında **azm6530-ayzekajans** görünecek
3. Repository'nin yanında **Import** tıkla

#### 3.3 Project Settings (Önemli!)

**Framework Preset:** `Vite` (otomatik algılanır, değiştirme)

**Build and Output Settings:**
- Build Command: `npm run build` (zaten dolu)
- Output Directory: `dist` (zaten dolu)
- Install Command: `npm install` (zaten dolu)

#### 3.4 Environment Variables Ekle (ÇOK ÖNEMLİ!)

1. **Environment Variables** bölümünü bul
2. **Add** tıkla
3. Ekle:
   ```
   Key:   RESEND_API_KEY
   Value: re_xxxxxxxxxxxxx (Adım 1'de kopyaladığın key)
   ```
4. **Environments:** 
   - ✅ Production
   - ✅ Preview
   - ✅ Development
   (3'ünü de seç!)
5. **Add** tıkla

#### 3.5 Deploy!

1. **Deploy** butonuna tıkla
2. ⏳ Build süreci başlar (2-3 dakika)
3. Build logs'u izle (hata varsa burada görürsün)
4. ✅ "Congratulations!" mesajını gördüğünde **HAZIR!**

---

### 🎉 ADIM 4: Site Linkini Al

Deploy tamamlanınca:

1. **Visit** butonuna tıkla veya
2. URL'i kopyala: `https://azm6530-ayzekajans.vercel.app`

Bu link senin **production** sitin!

---

## ✅ TEST ET!

### Test 1: API Health Check

Tarayıcıda aç:
```
https://azm6530-ayzekajans.vercel.app/api/health
```

**Görmek istediğin:**
```json
{
  "status": "ok",
  "service": "Ayzek Ajans API",
  "timestamp": "2025-12-25T...",
  "endpoints": {
    "health": "/api/health",
    "submit": "/api/submit-form"
  }
}
```

❌ **Hata alırsan:** ADIM 3.4'ü kontrol et (RESEND_API_KEY eklenmiş mi?)

---

### Test 2: Form Gönder

1. Ana sayfayı aç: `https://azm6530-ayzekajans.vercel.app`
2. Formu doldur (örnek):
   ```
   İsim: Test Kullanıcı
   Şehir: İstanbul
   E-posta: test@example.com
   Telefon: 05551234567
   Yaş: 25
   ✅ Şartları kabul ediyorum
   ```
3. **🌟 Başvur** tıkla
4. **Görmek istediğin:**
   - ✅ "Başvurunuz e-posta ile gönderildi! 🎉" mesajı
   - ✅ Form temizlendi
   - ✅ ayzekajans@gmail.com'a e-posta geldi

---

### Test 3: E-posta Kontrolü

1. **ayzekajans@gmail.com** hesabını aç
2. **Inbox**'ta ara: "🎉 Yeni Başvuru"
3. E-postayı aç
4. **Görmek istediğin:**
   - ✅ Konu: "🎉 Yeni Başvuru - Test Kullanıcı"
   - ✅ İçerik: Form bilgileri güzel HTML formatında
   - ✅ Gönderen: onboarding@resend.dev (Resend'in default adresi)

---

## 🔄 SONRAKI GÜNCELLEMELERİ NASIL YAPARIM?

**Süper kolay! Vercel otomatik deploy eder:**

1. Figma Make'te veya editörde değişiklik yap
2. GitHub'a push et:
   ```bash
   git add .
   git commit -m "Değişiklik açıklaması"
   git push origin main
   ```
3. **Vercel otomatik olarak 30 saniye içinde deploy eder!**
4. Hiçbir şey yapmanız gerekmiyor! 🎉

**Deploy durumunu takip et:**
- Vercel Dashboard → Deployments
- Her push için yeni deployment göreceksin
- Build logs'u inceleyebilirsin

---

## 🌐 www.ayzekajans.online DOMAIN BAĞLAMA (Opsiyonel)

Şu an siteniz: `azm6530-ayzekajans.vercel.app`
İstersen custom domain ekleyebilirsin.

### Adımlar:

1. **Vercel Dashboard → Project → Settings → Domains**
2. **Add Domain:** `www.ayzekajans.online` yaz
3. Vercel sana DNS kayıtlarını gösterecek
4. Domain provider'ına git (GoDaddy, Namecheap, vb.)
5. **DNS Management** bölümünü aç
6. **CNAME Record** ekle:
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   TTL: 3600
   ```
7. Kaydet ve **5-60 dakika bekle** (DNS propagation)
8. ✅ Vercel otomatik HTTPS sertifikası ekleyecek

---

## 🆘 SORUN ÇÖZME

### Hata: "RESEND_API_KEY is not set"

**Çözüm:**
1. Vercel Dashboard → Project → Settings → **Environment Variables**
2. `RESEND_API_KEY` var mı kontrol et
3. Yoksa ADIM 3.4'ü tekrar yap
4. Varsa: Deployments → ... → **Redeploy**

---

### Hata: "Failed to send email"

**Kontrol et:**
1. Resend API key doğru mu?
2. Resend free plan limit aştın mı? (100 email/day)
3. Resend Dashboard → Logs → Son hataları kontrol et

---

### Hata: Form submit çalışmıyor

**Debug:**
1. Browser'da **F12** aç → **Network** tab
2. Form submit et
3. `/api/submit-form` isteğini bul
4. Response'u kontrol et
5. Console'da hata var mı?

**Vercel Logs:**
1. Vercel Dashboard → Project → **Logs**
2. Real-time logs'u aç
3. Form submit et
4. Hataları gör

---

## 📊 İSTATİSTİKLER (Opsiyonel)

### Vercel Analytics Ekle

Site ziyaretçilerini takip etmek istersen:

```bash
npm install @vercel/analytics
```

`src/app/App.tsx` dosyasına ekle:
```typescript
import { Analytics } from '@vercel/analytics/react';

// Component'in return'ünde en alta ekle:
<Analytics />
```

Sonra GitHub'a push et, Vercel otomatik deploy eder.

---

## ✅ CHECKLIST - TAMAMLANDIĞINDA İŞARETLE

- [ ] ✅ Resend API key aldım
- [ ] ✅ API key'i güvenli yere not ettim
- [ ] ✅ Dosyaları GitHub'a push ettim
- [ ] ✅ Vercel hesabı oluşturdum (GitHub ile)
- [ ] ✅ Projeyi Vercel'e import ettim
- [ ] ✅ RESEND_API_KEY environment variable ekledim
- [ ] ✅ Deploy ettim
- [ ] ✅ `/api/health` test ettim (çalışıyor)
- [ ] ✅ Form test ettim (çalışıyor)
- [ ] ✅ E-posta geldi (ayzekajans@gmail.com)
- [ ] 🎉 **SİTE YAYINDA!**

---

## 🎯 ÖNEMLİ NOTLAR

### Güvenlik

- ⚠️ API key'i ASLA koda yazma
- ⚠️ API key'i GitHub'a push etme
- ✅ Sadece Vercel Environment Variables'da tut

### Maliyet

- **Vercel Free Plan:** 
  - ✅ 100 GB bandwidth/ay
  - ✅ Unlimited deploys
  - ✅ Otomatik HTTPS
  - ✅ Yeter senin projene!

- **Resend Free Plan:**
  - ✅ 100 email/gün
  - ✅ 3,000 email/ay
  - ✅ Yeter senin projene!

### Performans

- ⚡ Vercel Edge Network (Global CDN)
- ⚡ Otomatik caching
- ⚡ HTTPS otomatik
- ⚡ ~100ms API response time

---

## 🎉 TEBR İKLER!

Siteniz artık production'da! 

**Site URL:** `https://azm6530-ayzekajans.vercel.app`

Her GitHub push'unda otomatik deploy edilecek. 

Başka bir şey yapmana gerek yok! 🚀

---

## 📞 YARDIM LİNKLERİ

- **Vercel Dashboard:** https://vercel.com/dashboard
- **Resend Dashboard:** https://resend.com/emails
- **Vercel Docs:** https://vercel.com/docs
- **Resend Docs:** https://resend.com/docs

---

**Son Güncelleme:** 2025-12-25
**Durum:** ✅ PRODUCTION READY
