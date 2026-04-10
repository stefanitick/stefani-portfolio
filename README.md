# Stefani Tick — Portfolio

## Cara setup

### 1. Install dependencies
```bash
npm install
```

### 2. Jalankan di localhost
```bash
npm run dev
```
Buka http://localhost:3000

### 3. Tambah foto profil
Taruh foto di: `public/profile.png`

### 4. Tambah gambar project
Taruh di folder: `public/work/`
Contoh: `public/work/dir-1.jpg`

Lalu update path di `data/data.json` di bagian `gallery[].src`

---

## Cara edit konten

Semua konten ada di satu file: **`data/data.json`**

### Ganti info profil
```json
"profile": {
  "name": "Nama kamu",
  "bio": "Bio kamu...",
  ...
}
```

### Tambah expertise baru
```json
"expertise": [
  { "icon": "◈", "name": "Nama Skill", "desc": "Deskripsi singkat." },
  ...
]
```

### Tambah project baru (featured)
```json
{
  "id": "nama-unik",
  "title": "Judul Project",
  "subtitle": "Subjudul",
  "category": "Strategy",        // Motion | Visual Design | Strategy | Web / Tool
  "featured": true,
  "emoji": "◈",
  "shortDesc": "Deskripsi singkat untuk card.",
  "fullDesc": "Deskripsi panjang untuk halaman detail.",
  "tags": ["Tag 1", "Tag 2"],
  "tools": ["Tool 1", "Tool 2"],
  "gallery": [
    { "type": "image", "src": "/work/nama-file.jpg", "caption": "Keterangan" },
    { "type": "video", "src": "https://www.youtube.com/embed/VIDEO_ID", "caption": "Video" }
  ]
}
```

### Tambah project non-featured
```json
{
  "id": "nama-unik",
  "title": "Judul",
  "subtitle": "Subjudul",
  "category": "Motion",
  "featured": false,
  "emoji": "▶",
  "shortDesc": "Deskripsi singkat.",
  "thumbnail": "/work/thumb.jpg"
}
```

---

## Deploy ke Vercel

1. Push ke GitHub
2. Buka vercel.com → New Project → Import repo
3. Klik Deploy

Setiap push ke GitHub → website otomatis update.
