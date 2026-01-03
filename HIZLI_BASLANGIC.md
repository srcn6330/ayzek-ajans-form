# ⚡ Hızlı Başlangıç - 5 Adımda Deploy

## 🎯 www.ayzekajans.online'a 5 Dakikada Deploy Edin!

### ✅ Adım 1: GitHub'a Push
```bash
git add .
git commit -m "Ayzek Ajans formu hazır"
git push origin main
```

### ✅ Adım 2: Vercel'e Git
1. https://vercel.com adresine gidin
2. GitHub ile giriş yapın
3. "Add New Project" tıklayın
4. `azm6530-ayzekajans` repository'sini seçin

### ✅ Adım 3: Resend API Key Alın
1. https://resend.com adresine gidin
2. Sign up / Login yapın
3. "API Keys" > "Create API Key"
4. Key'i kopyalayın (örn: `re_123abc...`)

### ✅ Adım 4: Environment Variable Ekleyin
Vercel'de deploy etmeden önce:
```
RESEND_API_KEY = re_BURAYA_KEYINIZI_YAPIŞTIRIN
```
**ÖNEMLİ:** Bu olmadan form e-posta gönderemez!

### ✅ Adım 5: Deploy!
"Deploy" butonuna tıklayın. 2-3 dakikada hazır! 🚀

---

## 🌐 Domain Bağlama (www.ayzekajans.online)

Deploy tamamlandıktan sonra:

### Vercel'de:
1. Settings > Domains
2. "Add Domain" > `www.ayzekajans.online`

### Domain Sağlayıcınızda:
**CNAME Kaydı ekleyin:**
```
Name: www
Value: cname.vercel-dns.com
```

**A Kayıtları ekleyin:**
```
Name: @
Value: 76.76.21.21

Name: @
Value: 76.76.21.98
```

**10-30 dakikada DNS yayılır!**

---

## ✨ Test Etme

Vercel URL'niz (örnek):
```
https://azm6530-ayzekajans.vercel.app
```

Formu doldurup test edin!

E-posta `ayzekajans@gmail.com` adresine gelecek.

---

## 🆘 Sorun mu Var?

### E-posta gitmiyor?
- `RESEND_API_KEY` environment variable'ını kontrol edin

### Build hatası?
- Build Logs'u Vercel Dashboard'da kontrol edin

### Domain çalışmıyor?
- DNS yayılması 24 saate kadar sürebilir (genelde 10-30 dk)

---

## 📚 Detaylı Rehber

Tüm detaylar için: `VERCEL_DEPLOYMENT_REHBERI.md` dosyasına bakın.

---

**Hazır! Başarılar! 🎉**
