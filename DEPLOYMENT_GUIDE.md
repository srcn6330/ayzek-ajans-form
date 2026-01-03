# 🚀 AYZEK AJANS - VERCEL DEPLOYMENT GUIDE

## ⚠️ ÖNEMLİ: 403 HATASI MI ALDINIZ?

Eğer Supabase Edge Function deployment hatası aldıysanız:
👉 **[SUPABASE_FIX.md](./SUPABASE_FIX.md)** dosyasını okuyun!

---

## 📋 İÇİNDEKİLER
1. [GitHub'a Yükleme](#github-upload)
2. [Supabase Edge Function](#supabase-setup)
3. [Vercel Deployment](#vercel-deployment)
4. [Environment Variables](#env-variables)
5. [Domain Ayarları](#domain-settings)
6. [Test ve Kontrol](#testing)

---

## 1️⃣ GITHUB'A YÜKLEME {#github-upload}

### Adım 1: GitHub Desktop'ta Değişiklikleri Kontrol Et
1. GitHub Desktop'ı aç
2. Sol tarafta tüm dosyaların listelendiğini gör
3. **"Changes"** sekmesinde tüm dosyalar olmalı

### Adım 2: Commit (Kaydet)
1. Sol alttaki **"Summary"** kutusuna yaz:
   ```
   Initial commit - Ayzek Ajans başvuru formu
   ```
2. Mavi **"Commit to main"** butonuna tıkla

### Adım 3: GitHub'a Push (Yükle)
1. Üstteki **"Push origin"** butonuna tıkla
2. Dosyalar GitHub'a yüklenecek (1-2 dakika sürebilir)
3. Tarayıcıda GitHub repository'nizi açın:
   ```
   https://github.com/azm6530/azm6530-ayzekajans
   ```
4. Tüm dosyaların yüklendiğini kontrol edin ✅

---

## 2️⃣ SUPABASE EDGE FUNCTION {#supabase-setup}

### Adım 1: Supabase'a Giriş Yap
1. https://supabase.com adresine git
2. **"Sign in"** ile giriş yap
3. Projenizi seçin

### Adım 2: Edge Function Oluştur
1. **"Functions"** sekmesine git
2. **"Create Function"** butonuna tıkla
3. **"Name"** kısmına `make-server-a4ba0dfa` yaz
4. **"Runtime"** kısmından `Node.js 18` seç
5. **"Create"** butonuna tıkla

### Adım 3: Edge Function Kodunu Ekle
1. Oluşturduğunuz fonksiyona girin
2. **"Code"** sekmesine git
3. Aşağıdaki kodu yapıştırın:

```javascript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const POST = async (req) => {
  const { name, email, phone, message } = await req.json();

  try {
    const data = await resend.emails.send({
      from: 'Ayzek Ajans <onboarding@resend.dev>',
      to: 'ayzekajans@gmail.com',
      subject: 'Yeni Başvuru Formu',
      text: `Ad Soyad: ${name}\nE-posta: ${email}\nTelefon: ${phone}\nMesaj: ${message}`,
    });

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    return new Response(JSON.stringify(error), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
};
```

4. **"Deploy"** butonuna tıkla

### Adım 4: Environment Variable Ekle
⚠️ **ÖNEMLİ:** Bu adımı atlamayın!

**"Settings"** sekmesine gidin ve **"Secrets"** kısmına tıklayın. Şunları ekle:

| Name | Value |
|------|-------|
| `RESEND_API_KEY` | (Resend.com'dan alınan API key) |

Her biri için:
1. **Name** kısmına değişken adını yaz
2. **Value** kısmına değeri yapıştır
3. **Add** butonuna tıkla

---

## 3️⃣ VERCEL DEPLOYMENT {#vercel-deployment}

### Adım 1: Vercel'e Giriş Yap
1. https://vercel.com adresine git
2. **"Continue with GitHub"** ile giriş yap
3. GitHub hesabınızı bağla

### Adım 2: Yeni Proje Oluştur
1. **"Add New..."** → **"Project"** tıkla
2. **"Import Git Repository"** kısmında **azm6530-ayzekajans** repository'sini seç
3. **"Import"** butonuna tıkla

### Adım 3: Build Settings
Vercel otomatik olarak algılayacak:
- **Framework Preset:** Vite
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`

✅ Bunları **değiştirmeyin**, olduğu gibi bırakın!

### Adım 4: Environment Variables Ekle
⚠️ **ÖNEMLİ:** Bu adımı atlamayın!

**"Environment Variables"** kısmına tıkla ve şunları ekle:

| Name | Value |
|------|-------|
| `VITE_SUPABASE_PROJECT_ID` | `bawffxpjvmoeisnikahj` |
| `VITE_SUPABASE_ANON_KEY` | `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJhd2ZmeHBqdm1vZWlzbmlrYWhqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY2NzczNTYsImV4cCI6MjA4MjI1MzM1Nn0.v1fZPHN62KD5tMjlbow0xV79Kr74QuGByvXOtrsEuwo` |

Her biri için:
1. **Name** kısmına değişken adını yaz
2. **Value** kısmına değeri yapıştır
3. **Add** butonuna tıkla

### Adım 5: Deploy!
1. **"Deploy"** butonuna tıkla
2. ☕ Build süreci başlayacak (2-3 dakika)
3. ✅ **"Congratulations!"** mesajını gördüğünüzde hazır!

---

## 4️⃣ DOMAIN AYARLARI {#domain-settings}

### Vercel Domain'ini Öğren
Deployment tamamlandıktan sonra Vercel size otomatik bir domain verir:
```
https://azm6530-ayzekajans.vercel.app
```

### Custom Domain Ekle (www.ayzekajans.online)

#### Vercel Tarafı:
1. Vercel Dashboard → **Settings** → **Domains**
2. **Add Domain** butonuna tıkla
3. `www.ayzekajans.online` yazıp **Add**
4. Vercel size DNS kayıtlarını gösterecek

#### Domain Provider Tarafı (GoDaddy/Namecheap vb.):
1. Domain sağlayıcınıza giriş yapın
2. **DNS Management** / **DNS Ayarları** sayfasına gidin
3. Aşağıdaki kayıtları ekleyin:

**CNAME Kaydı:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

**A Kaydı (root domain için - opsiyonel):**
```
Type: A
Name: @ (veya boş)
Value: 76.76.21.21
```

4. **Save/Kaydet** butonuna tıklayın
5. ⏳ DNS değişikliklerinin yayılması 5-60 dakika sürebilir

---

## 5️⃣ TEST VE KONTROL {#testing}

### ✅ Kontrol Listesi:

#### 1. Site Açılıyor mu?
- [ ] https://azm6530-ayzekajans.vercel.app açılıyor
- [ ] Logo görünüyor
- [ ] Form görünüyor
- [ ] Animasyonlar çalışıyor

#### 2. Form Çalışıyor mu?
- [ ] Tüm alanları doldur
- [ ] Kullanım koşullarını kabul et
- [ ] **"🌟 Başvur"** butonuna tıkla
- [ ] "Başvurunuz e-posta ile gönderildi! 🎉" mesajı geliyor
- [ ] Form temizleniyor

#### 3. E-posta Geliyor mu?
- [ ] ayzekajans@gmail.com hesabını kontrol et
- [ ] Başvuru e-postası geldi mi?

#### 4. Mobil Görünüm
- [ ] Telefondan siteyi aç
- [ ] Responsive tasarım çalışıyor mu?

---

## 🎯 DEPLOYMENT SONRASI NOTLAR

### Supabase Edge Function (Backend)
Formlar şu endpoint'e gönderiliyor:
```
https://bawffxpjvmoeisnikahj.supabase.co/functions/v1/make-server-a4ba0dfa/submit-form
```

⚠️ **RESEND API KEY Kontrolü:**
Supabase Dashboard'dan environment variable eklenmelidir:
1. Supabase Dashboard → Project Settings → Edge Functions
2. **Add new secret** tıkla
3. Name: `RESEND_API_KEY`
4. Value: (Resend.com'dan alınan API key)

### Güncelleme Yapmak İstersen:
1. Kodda değişiklik yap
2. GitHub Desktop'ta commit yap
3. Push origin ile GitHub'a yükle
4. Vercel **otomatik olarak** yeni versiyonu deploy eder! 🚀

---

## 🆘 SORUN GİDERME

### "Build Failed" Hatası
- Environment variables'ları kontrol et
- GitHub'daki dosyaların eksiksiz olduğunu doğrula

### "Form Gönderilemedi" Hatası
- RESEND_API_KEY kontrolü yap
- Supabase Edge Function'ın çalıştığını test et:
  ```
  https://bawffxpjvmoeisnikahj.supabase.co/functions/v1/make-server-a4ba0dfa/health
  ```
  Yanıt: `{"status":"ok"}`

### "Domain Çalışmıyor" Hatası
- DNS kayıtlarını kontrol et
- 24 saat bekle (DNS propagation)
- Vercel Dashboard → Domains kısmını kontrol et

---

## 📞 İLETİŞİM

Herhangi bir sorun yaşarsan:
- GitHub Issues: https://github.com/azm6530/azm6530-ayzekajans/issues
- E-posta: ayzekajans@gmail.com

---

## 🎉 BAŞARILAR!

Ayzek Ajans başvuru formu artık canlıda! 🚀

**Canlı Site:**
- https://azm6530-ayzekajans.vercel.app
- https://www.ayzekajans.online (DNS ayarlarından sonra)

**Repo:**
- https://github.com/azm6530/azm6530-ayzekajans