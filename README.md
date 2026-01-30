# Telecom Pro — Zamonaviy Telekommunikatsiya Ekotizimi

Telecom Pro — bu yuqori darajadagi foydalanuvchi tajribasini (UX) ta'minlash uchun yaratilgan zamonaviy telekommunikatsiya xizmatlari portali. Ushbu platforma internet, mobil aloqa, TV xizmatlarini boshqarish va shaxsiy kabinet orqali hisob-kitoblarni amalga oshirish imkonini beradi.

![Platforma ko'rinishi](https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2000&auto=format&fit=crop)

## 🚀 Asosiy Imkoniyatlar

### 🌐 Internet Xizmatlari
* **Fiber-Optik Internet:** GPON texnologiyasi asosida 1 Gbit/s gacha bo'lgan tezlik.
* **Tezlikni Tekshirish (Speedtest):** Real vaqt rejimida internet tezligini o'lchash moduli.
* **Onlayn Ariza:** Fiber-optik internetga ulanish uchun qulay forma.

### 📱 Mobil Aloqa
* **Moslashuvchan Tariflar:** Foydalanuvchi ehtiyojlariga moslashtirilgan 5G tariflari.
* **E-SIM:** Yangi avlod virtual sim-kartalarini onlayn faollashtirish.
* **SIM-karta Yetkazib Berish:** Buyurtma asosida uyga yetkazib berish xizmati.

### 📺 Smart TV va Ko'ngilochar
* **Onlayn TV:** 200+ dan ortiq mahalliy va xorijiy kanallar.
* **Kinoteatr:** Eng so'nggi blokbasterlar va seriallar to'plami.
* **Ko'p qurilmali ulanish:** Bir vaqtning o'zida bir nechta qurilmada tomosha qilish.

### 👤 Shaxsiy Kabinet
* **Dashboard:** Foydalanilgan trafik va qoldiq balansi haqida batafsil ma'lumot.
* **Tranzaksiyalar:** To'lovlar tarixi va kvitansiyalarni yuklab olish.
* **Bildirishnomalar:** Muhim xabarlar va aktsiyalar haqida tezkor xabarlar.

## 🛠 Texnologik Stek

Loyiha eng zamonaviy va barqaror texnologiyalar yordamida ishlab chiqilgan:

*   **Frontend:** React 18 & Vite
*   **Dizayn Tizimi:** Material UI (MUI) - Premium darajadagi UI komponentlar.
*   **Animatsiyalar:** Framer Motion - Ssmooth va dinamik o'tishlar.
*   **Xalqaro tillar:** i18next - O'zbek, Ingliz va Rus tillari qo'llab-quvvatlanadi.
*   **Grafiklar:** Recharts - Ma'lumotlarni vizuallashtirish uchun.
*   **Ikonkalar:** Lucide React - Minimalistik va tushunarli piktogrammalar.
*   **Marshrutlash:** React Router 6 - Bir sahifali ilova (SPA) navigatori.

## 📁 Loyiha Strukturasi

```text
src/
├── components/      # Qayta foydalaniladigan UI komponentlar (Layout, Forms, Cards)
├── context/         # Global holatni boshqarish (UserContext)
├── locales/         # Til fayllari (uz, en, ru)
├── pages/           # Asosiy sahifalar (Home, Cabinet, TV, Internet, etc.)
├── constants.js     # Global o'zgarmaslar va sozlimalar
├── i18n.js          # Xalqarolashtirish konfiguratsiyasi
├── App.jsx          # Root komponent va Router
└── main.jsx         # Ilovani ishga tushirish (Mounting)
```

## ⚙️ O'rnatish va Ishga tushirish

1.  Repozitoriyani yuklab oling:
    ```bash
    git clone [repo-url]
    ```

2.  Kutubxonalarni o'rnating:
    ```bash
    npm install
    ```

3.  Loyiha dev-serverini ishga tushiring:
    ```bash
    npm run dev
    ```

4.  Produktsiya uchun build tayyorlash:
    ```bash
    npm run build
    ```

## 📱 Mobil Moslashuvchanlik

Platforma mobil qurilmalarga to'liq moslashtirilgan (Responsive Design). Mobil menyu va pastki navigatsiya paneli (Bottom Navigation) foydalanuvchiga ilova sifatidagi tajribani taqdim etadi.

---
© 2026 Telecom Pro. Barcha huquqlar himoyalangan.
