# ✅ Deployment Checklist

## Hazırlık Durumu

### ✅ Tamamlanmış İşler
- [x] React TypeScript formu hazır
- [x] Vercel Serverless Functions (`/api/submit-form.ts`, `/api/health.ts`)
- [x] `vercel.json` konfigürasyonu
- [x] `package.json` dependencies
- [x] Form validasyonu (React Hook Form)
- [x] E-posta template (Resend)
- [x] Modal'lar (Terms & Privacy)
- [x] Responsive design
- [x] Animasyonlar (Motion/Framer Motion)
- [x] `.gitignore` dosyası
- [x] `.env.example` dosyası
- [x] README.md dokümantasyonu
- [x] Deployment rehberleri

### 🔲 Yapılacak İşler

#### 1. GitHub Repository
- [ ] GitHub'da `azm6530-ayzekajans` repository oluşturuldu
- [ ] Proje dosyaları push edildi
- [ ] Branch: `main`

#### 2. Resend API Key
- [ ] https://resend.com hesabı oluşturuldu
- [ ] API Key alındı (örn: `re_123abc...`)
- [ ] API Key kaydedildi (güvenli bir yerde)

#### 3. Vercel Deployment
- [ ] https://vercel.com hesabı oluşturuldu
- [ ] GitHub ile bağlantı kuruldu
- [ ] `azm6530-ayzekajans` repository import edildi
- [ ] Environment Variable eklendi: `RESEND_API_KEY`
- [ ] Deploy butonu tıklandı
- [ ] Deploy başarılı (Build logs kontrol edildi)

#### 4. Test
- [ ] Vercel URL açıldı (örn: `https://azm6530-ayzekajans.vercel.app`)
- [ ] Health endpoint test edildi: `/api/health`
- [ ] Form dolduruldu ve submit edildi
- [ ] E-posta `ayzekajans@gmail.com` adresine geldi
- [ ] Toast bildirimleri çalışıyor

#### 5. Domain Bağlama (www.ayzekajans.online)
- [ ] Vercel Dashboard → Settings → Domains
- [ ] Domain eklendi: `www.ayzekajans.online`
- [ ] DNS sağlayıcısında CNAME kaydı eklendi
  - Name: `www`
  - Value: `cname.vercel-dns.com`
- [ ] DNS sağlayıcısında A kayıtları eklendi
  - Name: `@`, Value: `76.76.21.21`
  - Name: `@`, Value: `76.76.21.98`
- [ ] DNS yayılımı beklendi (10-30 dakika)
- [ ] `www.ayzekajans.online` tarayıcıda açıldı
- [ ] SSL sertifikası otomatik yüklendi (HTTPS)

#### 6. Final Kontrol
- [ ] Tüm formlar çalışıyor
- [ ] Tüm validasyonlar çalışıyor
- [ ] E-posta gönderimi başarılı
- [ ] Mobil görünüm test edildi
- [ ] Desktop görünüm test edildi
- [ ] Terms & Privacy modal'ları açılıyor
- [ ] Vercel Analytics aktif (opsiyonel)

---

## Deployment Komutları

### Git Push (İlk defa)
```bash
git init
git add .
git commit -m "Initial commit - Ayzek Ajans başvuru formu"
git branch -M main
git remote add origin https://github.com/azm6530/azm6530-ayzekajans.git
git push -u origin main
```

### Git Push (Güncellemeler)
```bash
git add .
git commit -m "Güncelleme mesajı"
git push
```

---

## Environment Variables (Vercel)

```env
RESEND_API_KEY=re_BURAYA_API_KEYINIZI_YAPIŞTIRIN
```

**Ortamlar:** Production, Preview, Development (hepsini seç)

---

## Sorun Giderme

### ❌ Build Failed
**Çözüm:** Vercel Dashboard → Deployments → Build Logs kontrol et

### ❌ E-posta Gitmiyor
**Çözüm:** 
1. RESEND_API_KEY environment variable kontrolü
2. Resend Dashboard'da API key aktif mi?
3. Vercel logs kontrol et

### ❌ Domain Çalışmıyor
**Çözüm:**
1. DNS kayıtlarını tekrar kontrol et
2. `nslookup www.ayzekajans.online` komutu çalıştır
3. 24 saat bekle

### ❌ 403 Error
**Çözüm:** Bu sorun Vercel mimarisi ile çözüldü, artık oluşmamalı

---

## Destek Dökümanları

- **Hızlı Başlangıç:** `HIZLI_BASLANGIC.md`
- **Detaylı Rehber:** `VERCEL_DEPLOYMENT_REHBERI.md`
- **Genel Bilgi:** `README.md`

---

## İletişim

- **E-posta:** ayzekajans@gmail.com
- **Instagram:** @ayzek_ajans
- **Domain:** www.ayzekajans.online

---

**Son Güncelleme:** 3 Ocak 2026  
**Durum:** ✅ Deploy için hazır!
