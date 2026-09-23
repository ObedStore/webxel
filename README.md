# Xeltrha Studio

Website portfolio dan toko digital untuk studio produk kreatif Indonesia. Proyek ini dirancang untuk portfolio, katalog produk, testimonial, dan admin panel untuk mengelola tampilan serta konten tanpa perlu database berbayar di tahap awal.

## Ringkasan project

- Frontend: Next.js 16 + React 19
- Styling: Tailwind CSS
- Auth: NextAuth v4
- Hosting: Vercel-ready
- Data storage awal: JSON lokal di folder `data/`
- Database opsional kedepan: Supabase, Neon, PostgreSQL, atau MongoDB
- Admin panel: dashboard, produk, kategori, testimonial, setting brand
- Order flow: otomatis buka WhatsApp

## Komponen yang dipakai

### Frontend
- Next.js App Router
- TypeScript
- React
- Tailwind CSS

### Auth & security
- NextAuth v4
- Google OAuth Provider
- Cookies untuk demo admin fallback
- `AUTH_SECRET` dan `NEXTAUTH_SECRET` untuk session security

### Data layer
- File JSON lokal di `data/site-data.json`
- Helper `lib/site-data.ts`
- API route untuk `GET` / `POST` data website

### Admin panel
- Dashboard
- Produk management
- Kategori management
- Settings brand & tampilan
- Login admin

### Deployment / infra
- Vercel
- Free-tier friendly
- No paid DB required at MVP stage

## Folder utama

- `app/` — halaman, API route, admin panel
- `auth.ts` — konfigurasi NextAuth
- `lib/site-data.ts` — pembaca dan penulis data JSON
- `data/site-data.json` — data konten website
- `.env.example` — template env

## Environment variables

Buat file `.env.local` atau set variabel di Vercel:

```env
AUTH_SECRET=ubah_dengan_string_rahasia
NEXTAUTH_SECRET=ubah_dengan_string_rahasia
GOOGLE_CLIENT_ID=client_id_google_oauth
GOOGLE_CLIENT_SECRET=client_secret_google_oauth
NEXT_PUBLIC_GOOGLE_LOGIN=false
```

### Penjelasan
- `AUTH_SECRET`: untuk signing sesi auth NextAuth
- `NEXTAUTH_SECRET`: alias kompatibilitas untuk NextAuth
- `GOOGLE_CLIENT_ID`: ID client Google OAuth
- `GOOGLE_CLIENT_SECRET`: secret Google OAuth
- `NEXT_PUBLIC_GOOGLE_LOGIN`: saat `true`, admin login akan pindah ke Google. Saat `false` atau kosong, fallback ke mode demo admin

## Apakah otomatis ke production setelah env diisi?

Tidak otomatis 100% tanpa redeploy.

Prosesnya seperti ini:

1. Kamu isi env di local atau Vercel
2. Build ulang / redeploy aplikasi
3. Saat `NEXT_PUBLIC_GOOGLE_LOGIN=true`, halaman admin akan menampilkan tombol "Lanjutkan dengan Google"
4. Saat `NEXT_PUBLIC_GOOGLE_LOGIN` tidak aktif, sistem tetap memakai mode demo admin

Artinya mode demo adalah fallback untuk development dan demo, bukan mode permanen. Setelah env valid dan redeploy terkirim, maka website akan masuk ke mode production auth real.

## Jalankan lokal

```bash
npm install
npm run dev
```

Lalu buka:

- Website: http://localhost:3000
- Admin login: http://localhost:3000/admin/login

## Deploy ke Vercel

1. Push project ke GitHub
2. Import repo ke Vercel
3. Isi environment variables di Project Settings > Environment Variables
4. Deploy ulang
5. Hubungkan domain custom bila diperlukan

## Lisensi

Proyek ini diberlakukan lisensi MIT, kecuali ada perjanjian khusus tertulis dari pemilik proyek.

### Lisensi MIT

```text
MIT License

Copyright (c) 2026 Xeltrha Studio

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## Annual / support plan

Berikut skema support annual yang dapat dipakai untuk pengelolaan project kedepan:

### Basic Annual
- Update minor content 2x per bulan
- Monitoring basic performance
- 1x audit keamanan per tahun
- 1x update UI/branding per tahun

### Growth Annual
- Semua fitur Basic
- Update konten dan katalog rutin
- Dukungan admin selama 1 tahun
- Perbaikan bug dan optimasi landing page
- Akses konsultasi 1x per bulan

### Pro Annual
- Semua fitur Growth
- Maintenance deployment Vercel
- Manajemen environment variables
- Support OAuth dan auth troubleshooting
- Rekomendasi tambah fitur, integrasi, dan skalabilitas

## Catatan bisnis

- Saat ini project mengutamakan pendekatan free-tier dan low-cost deployment
- Data produk dan konten disimpan dalam JSON agar tidak perlu database berbayar di awal
- Jika skala berkembang, struktur ini dapat ditingkatkan ke Supabase, Neon, atau PostgreSQL
- Autentikasi real bisa diaktifkan dengan Google OAuth dan Vercel environment variables

## FAQ

### Apakah bisa pakai tanpa Google OAuth?
Ya. Saat `NEXT_PUBLIC_GOOGLE_LOGIN` mati, admin tetap bisa dipakai via mode demo.

### Apakah harus ada database?
Tidak untuk MVP. Data lokal JSON cukup untuk versi awal.

### Apakah aman untuk produksi?
Aman jika env secret sudah diisi dan Google OAuth sudah dikonfigurasi dengan benar di Google Cloud Console dan Vercel.

### Bisakah nanti upgrade ke database?
Bisa. Struktur API route sudah memudahkan untuk migrasi dari JSON ke database.

## Kontak

- Brand: Xeltrha Studio
- WhatsApp: wa.me/6282373093754
- Email: hello@xeltrha.studio
