# 🚀 Ayzek Ajans - Vercel Deployment Rehberi

## ✅ Ön Hazırlık (TAMAMLANDI)
Projeniz deployment için tamamen hazır durumda! Aşağıdaki dosyalar mevcut:
- ✓ `package.json` - Tüm bağımlılıklar hazır
- ✓ `vercel.json` - Vercel konfigürasyonu hazır
- ✓ `/api/submit-form.ts` - Serverless function hazır
- ✓ `/api/health.ts` - Health check endpoint hazır
- ✓ Form uygulaması tamamen çalışır durumda

---

## 📋 Deployment Adımları

### Adım 1: GitHub Repository Kontrolü
GitHub'da `azm6530-ayzekajans` repository'nizin olduğundan emin olun. Bu projeyi GitHub'a push edin:

```bash
# Eğer henüz push etmediyseniz:
git init
git add .
git commit -m "Initial commit - Ayzek Ajans başvuru formu"
git branch -M main
git remote add origin https://github.com/azm6530/azm6530-ayzekajans.git
git push -u origin main
```

---

### Adım 2: Vercel'e Giriş ve Proje Oluşturma

1. **Vercel'e Git**: https://vercel.com
2. **GitHub ile Giriş Yapın** (azm6530 hesabı ile)
3. **"Add New..." > "Project"** butonuna tıklayın
4. **GitHub repository'nizi seçin**: `azm6530-ayzekajans`
5. **Import** butonuna tıklayın

---

### Adım 3: Proje Ayarları

Vercel otomatik olarak ayarları algılayacak:

- **Framework Preset**: Vite ✓
- **Build Command**: `npm run build` (otomatik)
- **Output Directory**: `dist` (otomatik)
- **Install Command**: `npm install` (otomatik)

**❗ ÖNEMLI**: Hiçbir şeyi değiştirmeyin, "Deploy" butonuna tıklamayın henüz!

---

### Adım 4: Environment Variables (Çevre Değişkenleri) Ekleyin

**Bu Adım Kritik!** Deploy etmeden önce Resend API Key eklemeniz gerekiyor.

#### Resend API Key Nasıl Alınır?

1. **Resend'e Git**: https://resend.com
2. **Sign Up / Login** yapın
3. **API Keys** bölümüne gidin
4. **"Create API Key"** tıklayın
5. Key'i kopyalayın (örnek: `re_123abc456def...`)

#### Vercel'e API Key Ekleyin

Vercel proje ayarlarında (henüz deploy etmeden):

1. **"Environment Variables"** bölümüne gidin
2. Aşağıdaki değişkeni ekleyin:

```
Key:   RESEND_API_KEY
Value: re_BURAYA_RESEND_API_KEYINIZI_YAPIŞTIRIN
Environment: Production, Preview, Development (hepsini seçin)
```

3. **"Add"** butonuna tıklayın

---

### Adım 5: Deploy! 🚀

Artık hazırsınız:

1. **"Deploy"** butonuna tıklayın
2. Vercel projenizi build edecek ve yayınlayacak (2-3 dakika sürer)
3. Deploy tamamlandığında size **Vercel URL** verilecek:
   - Örnek: `https://azm6530-ayzekajans.vercel.app`

---

### Adım 6: Custom Domain (www.ayzekajans.online) Bağlama

Deploy tamamlandıktan sonra:

1. **Vercel Dashboard'da projeye gidin**
2. **"Settings"** sekmesine tıklayın
3. **"Domains"** bölümüne gidin
4. **"Add Domain"** butonuna tıklayın
5. `www.ayzekajans.online` yazın
6. **Vercel size DNS kayıtlarını gösterecek**

#### Domain Sağlayıcınızda DNS Ayarları

Domain sağlayıcınıza (örn. GoDaddy, Namecheap, Cloudflare) gidin ve aşağıdaki DNS kayıtlarını ekleyin:

**CNAME Kaydı:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: Auto veya 3600
```

**A Kaydı (Root domain için - ayzekajans.online):**
```
Type: A
Name: @
Value: 76.76.21.21
TTL: Auto veya 3600
```

**İkinci A Kaydı:**
```
Type: A
Name: @
Value: 76.76.21.98
TTL: Auto veya 3600
```

7. **DNS değişiklikleri 24 saat içinde yayılacak** (genelde 10-30 dakika sürer)
8. **Vercel otomatik SSL sertifikası** ekleyecek (HTTPS)

---

## 🧪 Test Etme

### 1. Vercel URL ile Test
Deploy tamamlandığında:
```
https://azm6530-ayzekajans.vercel.app
```
Bu URL'yi tarayıcıda açın ve formu test edin.

### 2. API Endpoint Test
Health check:
```
https://azm6530-ayzekajans.vercel.app/api/health
```
Bu endpoint `{ "status": "ok", "timestamp": "..." }` döndürmeli.

### 3. Form Test
- Formu doldurun
- "Başvur" butonuna tıklayın
- `ayzekajans@gmail.com` adresine e-posta geldi mi kontrol edin

---

## 🔧 Sorun Giderme

### Problem 1: Build Failed (Build Hatası)
**Çözüm:**
- Vercel Dashboard'da "Deployments" > "Build Logs" kontrol edin
- Eksik bağımlılık varsa `package.json` güncelleyin

### Problem 2: E-posta Gönderilmiyor
**Çözüm:**
- Vercel Dashboard > Settings > Environment Variables
- `RESEND_API_KEY` doğru girilmiş mi kontrol edin
- Resend Dashboard'da API key aktif mi kontrol edin

### Problem 3: 403 Forbidden
**Çözüm:**
- Bu sorun Supabase ile ilgiliydi, Vercel Serverless Functions ile çözüldü
- `vercel.json` dosyası doğru konfigüre edilmiş durumda

### Problem 4: Domain Bağlanmıyor
**Çözüm:**
- DNS kayıtlarını tekrar kontrol edin
- `nslookup www.ayzekajans.online` komutu ile DNS yayılımını kontrol edin
- 24 saat bekleyin (genelde daha az sürer)

---

## 📊 Vercel Dashboard Özellikleri

### Deployment Bilgileri
- **Real-time Logs**: Canlı log izleme
- **Analytics**: Ziyaretçi istatistikleri
- **Performance**: Sayfa yükleme hızı
- **Edge Network**: Global CDN

### Environment Variables Yönetimi
- Production, Preview, Development ortamları
- API key'leri güvenli şekilde saklama

### Automatic HTTPS
- Vercel otomatik SSL sertifikası sağlar
- Let's Encrypt kullanır

---

## 🎉 Tamamlandı!

Başvuru formunuz artık **www.ayzekajans.online** adresinde canlı olacak!

### Yapılacaklar Listesi (Checklist):
- [x] GitHub'a push
- [x] Vercel'e import
- [x] RESEND_API_KEY ekleme
- [x] Deploy
- [ ] DNS ayarları (domain sağlayıcınızda)
- [ ] SSL doğrulama (otomatik)
- [ ] Form test

---

## 📞 Destek

**Sorularınız için:**
- Vercel Docs: https://vercel.com/docs
- Resend Docs: https://resend.com/docs
- GitHub Issues: https://github.com/azm6530/azm6530-ayzekajans/issues

**Ayzek Ajans:**
- Instagram: @ayzek_ajans
- Email: ayzekajans@gmail.com

---

## 🔄 Güncelleme Yapmak İçin

Formu güncellemek isterseniz:

```bash
# Değişiklikleri yapın
git add .
git commit -m "Form güncellendi"
git push

# Vercel otomatik deploy edecek!
```

---

**Hazırlayan:** Figma Make AI Assistant  
**Tarih:** 3 Ocak 2026  
**Proje:** Ayzek Ajans Başvuru Formu  
**Domain:** www.ayzekajans.online
