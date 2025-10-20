import { Materi } from './materi.entity';

export const SEMUA_MATERI: Materi[] = [
  // --- Materi Penjumlahan (Bab ID: 101) ---
  {
    id: 1, babId: 101, judul: '1. Apa itu Penjumlahan?', tipe: 'penjelasan',
    konten: `Penjumlahan adalah cara untuk menggabungkan dua angka atau lebih menjadi satu jumlah total. Simbol yang digunakan adalah tambah (+).\n\nContoh: Jika kamu punya 2 apel dan ibu memberimu 3 apel lagi, maka total apelmu adalah 2 + 3 = 5 apel.`
  },
  {
    id: 1, babId: 101, judul: '2. Contoh Soal', tipe: 'contoh_soal',
    konten: `**Soal:**\nBudi memiliki 5 kelereng. Ali memberinya 4 kelereng. Berapa kelereng Budi sekarang?\n\n**Jawaban:**\n5 + 4 = 9\nJadi, Budi sekarang memiliki **9** kelereng.`
  },

  // --- Materi Perkalian dan Pembagian (Bab ID: 201) ---
{
  id: 2, babId: 102, judul: '1. Konsep Perkalian sebagai Penjumlahan Berulang', tipe: 'penjelasan',
  konten: `Perkalian dapat dipahami sebagai penjumlahan yang dilakukan secara berulang.\n\nJika kamu melihat kalimat **4 × 3**, itu artinya kamu menjumlahkan angka 4 sebanyak 3 kali:\n\n**4 + 4 + 4 = 12**.\n\n**Artinya:** Perkalian adalah cara cepat untuk menjumlahkan angka yang sama berulang kali.`
},
{
  id: 2, babId: 102, judul: '2. Contoh Soal Perkalian Dasar', tipe: 'contoh_soal',
  konten: `**Soal:**\nHitung hasil dari 3 × 5.\n\n**Pembahasan:**\n- 3 dijumlahkan sebanyak 5 kali\n- 3 + 3 + 3 + 3 + 3 = 15\n- Jadi, **3 × 5 = 15**`
},

  
  // --- Materi Teorema Pythagoras (Bab ID: 203) ---
  {
    id: 3, babId: 103, judul: '1. Konsep Pythagoras', tipe: 'penjelasan',
    konten: `Teorema Pythagoras berlaku khusus untuk **segitiga siku-siku**. Teorema ini menyatakan bahwa kuadrat dari sisi miring (hipotenusa) sama dengan jumlah kuadrat dari kedua sisi penyikunya.\n\nJika sisi penyiku adalah **a** dan **b**, dan sisi miring adalah **c**, maka rumusnya adalah:\n\n**a² + b² = c²**`
  },
  {
    id: 3, babId: 103, judul: '2. Contoh Soal Pythagoras', tipe: 'contoh_soal',
    konten: `**Soal:**\nSebuah segitiga siku-siku memiliki panjang sisi penyiku 3 cm dan 4 cm. Berapakah panjang sisi miringnya?\n\n**Pembahasan:**\n- a = 3, b = 4\n- a² + b² = c²\n- 3² + 4² = c²\n- 9 + 16 = c²\n- 25 = c²\n- c = √25 = 5\n\nJadi, panjang sisi miringnya adalah **5 cm**.`
  },

  // --- Materi KPK dan FPB (Bab ID: 202) ---
{
  id: 4, babId: 104, judul: '1. Pengertian KPK (Kelipatan Persekutuan Terkecil)', tipe: 'penjelasan',
  konten: `KPK adalah **bilangan kelipatan terkecil** yang sama dari dua atau lebih bilangan.\n\nContoh: KPK dari 4 dan 6 didapat dari mencari kelipatan masing-masing:\n- Kelipatan 4: 4, 8, 12, 16, 20, ...\n- Kelipatan 6: 6, 12, 18, 24, ...\n\nKelipatan yang sama dan paling kecil adalah **12**, jadi **KPK = 12**.`
},
{
  id: 4, babId: 1042, judul: '2. Contoh Soal KPK', tipe: 'contoh_soal',
  konten: `**Soal:**\nTentukan KPK dari 3 dan 5.\n\n**Pembahasan:**\n- Kelipatan 3: 3, 6, 9, 12, 15, ...\n- Kelipatan 5: 5, 10, 15, 20, ...\n- Kelipatan yang sama dan paling kecil adalah **15**\n- Jadi, **KPK = 15**`
},
{
  id: 4, babId: 104, judul: '3. Pengertian FPB (Faktor Persekutuan Terbesar)', tipe: 'penjelasan',
  konten: `FPB adalah **faktor terbesar yang sama** dari dua atau lebih bilangan.\n\nContoh: FPB dari 12 dan 18:\n- Faktor 12: 1, 2, 3, 4, 6, 12\n- Faktor 18: 1, 2, 3, 6, 9, 18\nFaktor yang sama dan paling besar adalah **6**, jadi **FPB = 6**.`
},
{
  id: 4, babId: 104, judul: '4. Contoh Soal FPB', tipe: 'contoh_soal',
  konten: `**Soal:**\nTentukan FPB dari 8 dan 12.\n\n**Pembahasan:**\n- Faktor 8: 1, 2, 4, 8\n- Faktor 12: 1, 2, 3, 4, 6, 12\n- Faktor yang sama dan paling besar adalah **4**\n- Jadi, **FPB = 4**`
},


  // --- Materi Turunan Fungsi (Bab ID: 304) ---
  {
    id: 5, babId: 105, judul: '1. Aturan Pangkat (Power Rule)', tipe: 'rumus',
    konten: `Aturan paling dasar untuk turunan fungsi aljabar adalah Aturan Pangkat (Power Rule).\n\nJika sebuah fungsi adalah **f(x) = axⁿ**, maka turunannya, **f'(x)**, adalah:\n\n**f'(x) = n · axⁿ⁻¹**\n\n**Artinya:** Pangkat (n) dikalikan ke depan, lalu pangkatnya dikurangi satu.`
  },
  {
    id: 5, babId: 105, judul: '2. Contoh Soal Turunan', tipe: 'contoh_soal',
    konten: `**Soal:**\nTentukan turunan dari f(x) = 5x³.\n\n**Pembahasan:**\n- a = 5, n = 3\n- f'(x) = 3 · 5x³⁻¹\n- f'(x) = 15x²`
  },

  // --- Materi Bangun Ruang (Bab ID: 106) ---
{
  id: 7,
  babId: 106,
  judul: '1. Pengertian Bangun Ruang',
  tipe: 'penjelasan',
  konten: `Bangun ruang adalah bangun tiga dimensi yang memiliki panjang, lebar, dan tinggi. Contohnya seperti kubus, balok, tabung, prisma, dan limas.`
},
{
  id: 8,
  babId: 106,
  judul: '2. Rumus Volume Bangun Ruang',
  tipe: 'rumus',
  konten: `Berikut beberapa rumus volume bangun ruang:\n
- Kubus: V = s³
- Balok: V = p × l × t
- Tabung: V = π × r² × t
\nVolume adalah ukuran seberapa banyak ruang yang dapat ditempati oleh suatu benda.`
},
{
  id: 9,
  babId: 106,
  judul: '3. Contoh Soal Volume Bangun Ruang',
  tipe: 'contoh_soal',
  konten: `**Soal:**\nSebuah kubus memiliki panjang rusuk 4 cm. Berapa volumenya?\n
**Pembahasan:**\nV = s³ = 4 × 4 × 4 = 64 cm³\n
Jadi, volume kubus adalah **64 cm³**.`
},
{
  id: 10,
  babId: 106,
  judul: '4. Rumus Luas Permukaan Bangun Ruang',
  tipe: 'rumus',
  konten: `Beberapa rumus luas permukaan bangun ruang adalah:\n
- Kubus: L = 6 × s²
- Balok: L = 2 × (pl + pt + lt)
- Tabung: L = 2πr(r + t)
\nLuas permukaan adalah seluruh bidang yang menyelimuti bangun ruang.`
},
{
  id: 11,
  babId: 106,
  judul: '5. Contoh Soal Luas Permukaan',
  tipe: 'contoh_soal',
  konten: `**Soal:**\nHitung luas permukaan balok dengan panjang 5 cm, lebar 3 cm, dan tinggi 2 cm.\n
**Pembahasan:**\nL = 2 × (pl + pt + lt)\n= 2 × (5×3 + 5×2 + 3×2)\n= 2 × (15 + 10 + 6)\n= 2 × 31 = 62 cm²\n
Jadi, luas permukaan balok adalah **62 cm²**.`
},

// --- Materi Bentuk Aljabar (Bab ID: 201) ---
{
  id: 12,
  babId: 201,
  judul: '1. Apa itu Bentuk Aljabar?',
  tipe: 'penjelasan',
  konten: `Bentuk aljabar adalah ekspresi matematika yang terdiri dari variabel, konstanta, dan operasi hitung.\n\nContoh: 3x + 5, 2a - 7, atau 4y`
},
{
  id: 12,
  babId: 201,
  judul: '2. Variabel dan Konstanta',
  tipe: 'penjelasan',
  konten: `Variabel adalah huruf yang mewakili suatu nilai yang belum diketahui, seperti x, y, atau a.\nKonstanta adalah nilai tetap, seperti 2, 5, atau 10.\n\nContoh: Pada bentuk aljabar 3x + 7, x adalah variabel dan 7 adalah konstanta.`
},
{
  id: 12,
  babId: 201,
  judul: '3. Koefisien',
  tipe: 'penjelasan',
  konten: `Koefisien adalah angka yang mengalikan variabel.\n\nContoh: Pada ekspresi 5x, angka 5 adalah koefisien dari variabel x.`
},
{
  id: 12,
  babId: 201,
  judul: '4. Operasi pada Bentuk Aljabar',
  tipe: 'penjelasan',
  konten: `Operasi dasar aljabar meliputi penjumlahan, pengurangan, perkalian, dan pembagian.\n\nContoh:\n- Penjumlahan: 2x + 3x = 5x\n- Pengurangan: 7a - 2a = 5a`
},
{
  id: 12,
  babId: 201,
  judul: '5. Contoh Soal Bentuk Aljabar',
  tipe: 'contoh_soal',
  konten: `**Soal:**\nSederhanakan bentuk aljabar berikut: 4x + 3x - 2x.\n\n**Pembahasan:**\n4x + 3x - 2x = (4 + 3 - 2)x = 5x`
},


// --- Materi Himpunan (Bab ID: 202) ---


{
  id: 13,
  babId: 202,
  judul: '1. Apa itu Himpunan?',
  tipe: 'penjelasan',
  konten: `Himpunan adalah kumpulan objek atau elemen yang didefinisikan dengan jelas.\n\nContoh:\nA = {1, 2, 3}\nB = {apel, jeruk, mangga}`
},
{
  id: 13,
  babId: 202,
  judul: '2. Cara Menyatakan Himpunan',
  tipe: 'penjelasan',
  konten: `Himpunan bisa ditulis dengan:\n- **Daftar anggota:** A = {2, 4, 6}\n- **Notasi pembentuk:** B = {x | x bilangan genap kurang dari 10}`
},
{
  id: 13,
  babId: 202,
  judul: '3. Diagram Venn',
  tipe: 'penjelasan',
  konten: `Diagram Venn digunakan untuk menggambarkan hubungan antar himpunan.\nBiasanya digambarkan dalam bentuk lingkaran yang saling berpotongan atau terpisah.`
},
{
  id: 13,
  babId: 202,
  judul: '4. Operasi pada Himpunan',
  tipe: 'penjelasan',
  konten: `Beberapa operasi dasar himpunan adalah:\n\n- **Irisan (∩):** Anggota yang sama\n- **Gabungan (∪):** Semua anggota dari kedua himpunan\n- **Selisih (−):** Anggota himpunan pertama yang tidak ada di himpunan kedua\n- **Komplemen:** Anggota yang bukan bagian dari suatu himpunan`
},
{
  id: 13,
  babId: 202,
  judul: '5. Contoh Soal Himpunan',
  tipe: 'contoh_soal',
  konten: `**Soal:**\nDiketahui A = {1, 2, 3, 4} dan B = {3, 4, 5, 6}. Tentukan A ∩ B dan A ∪ B.\n\n**Pembahasan:**\n- A ∩ B = {3, 4}\n- A ∪ B = {1, 2, 3, 4, 5, 6}`
},

// --- Materi Teorema Pythagoras (Bab ID: 203) ---
{
  id: 14,
  babId: 203,
  judul: '1. Apa itu Teorema Pythagoras?',
  tipe: 'penjelasan',
  konten: `Teorema Pythagoras menjelaskan hubungan antar sisi dalam segitiga siku-siku.\nRumusnya adalah:\n\n**a² + b² = c²**\n\na dan b adalah sisi siku-siku, sedangkan c adalah sisi miring (hipotenusa).`
},
{
  id: 14,
  babId: 203,
  judul: '2. Contoh Penggunaan Rumus',
  tipe: 'penjelasan',
  konten: `Jika diketahui panjang dua sisi siku-siku, kita bisa mencari panjang sisi miring.\nContoh:\nJika a = 6 dan b = 8, maka:\n\nc² = 6² + 8² = 36 + 64 = 100\nc = √100 = 10`
},
{
  id: 14,
  babId: 203,
  judul: '3. Mencari Sisi Siku-Siku',
  tipe: 'penjelasan',
  konten: `Jika kita tahu sisi miring dan satu sisi siku-siku, kita bisa mencari sisi lainnya.\nContoh:\nJika c = 13 dan a = 5:\n\nb² = c² - a² = 169 - 25 = 144\nb = √144 = 12`
},
{
  id: 14,
  babId: 203,
  judul: '4. Contoh Soal Pythagoras',
  tipe: 'contoh_soal',
  konten: `**Soal:**\nSebuah tangga bersandar pada dinding dengan jarak kaki tangga ke dinding 6 meter dan panjang tangga 10 meter. Berapa tinggi dinding yang dicapai tangga?\n\n**Pembahasan:**\nMisal:\n- a = 6 (alas)\n- c = 10 (sisi miring)\n\nb² = 10² - 6²\nb² = 100 - 36 = 64\nb = √64 = 8\n\nJadi, tinggi yang dicapai tangga adalah **8 meter**.`
},
{
  id: 14,
  babId: 203,
  judul: '5. Manfaat Teorema Pythagoras',
  tipe: 'penjelasan',
  konten: `Teorema Pythagoras digunakan dalam berbagai bidang seperti konstruksi bangunan, navigasi, desain grafis, dan fisika.\nContohnya: Mengukur jarak miring, membuat sudut siku-siku, atau menentukan ketinggian benda.`
},

// --- Materi Lingkaran (Bab ID: 204) ---
{
  id: 15,
  babId: 204,
  judul: '1. Unsur-unsur Lingkaran',
  tipe: 'penjelasan',
  konten: `Lingkaran memiliki beberapa unsur penting:\n
- **Titik Pusat:** Titik tengah lingkaran.\n
- **Jari-jari (r):** Jarak dari titik pusat ke tepi lingkaran.\n
- **Diameter (d):** Dua kali jari-jari, d = 2r.\n
- **Busur:** Garis lengkung pada lingkaran.\n
- **Tali Busur:** Garis lurus yang menghubungkan dua titik pada lingkaran.\n
- **Juring:** Daerah yang dibatasi dua jari-jari dan busur.\n
- **Tembereng:** Daerah yang dibatasi tali busur dan busur.`
},
{
  id: 15,
  babId: 204,
  judul: '2. Rumus Keliling Lingkaran',
  tipe: 'rumus',
  konten: `Keliling lingkaran dapat dihitung dengan salah satu rumus berikut:\n
**K = 2πr** atau **K = πd**\n
Dengan π (phi) ≈ 3,14 atau 22/7.`
},
{
  id: 15,
  babId: 204,
  judul: '3. Rumus Luas Lingkaran',
  tipe: 'rumus',
  konten: `Luas lingkaran dihitung dengan rumus:\n
**L = πr²**\n
Artinya: jari-jari dikuadratkan, lalu dikalikan π.`
},
{
  id: 15,
  babId: 204,
  judul: '4. Garis Singgung Lingkaran',
  tipe: 'penjelasan',
  konten: `Garis singgung adalah garis yang hanya menyentuh satu titik pada lingkaran.\n
Sifat penting garis singgung:\n
- Tegak lurus terhadap jari-jari yang ditarik ke titik singgung.\n
- Dua garis singgung dari satu titik luar memiliki panjang yang sama.`
},
{
  id: 15,
  babId: 204,
  judul: '5. Contoh Soal Lingkaran',
  tipe: 'contoh_soal',
  konten: `**Soal 1:**\nHitung keliling lingkaran dengan jari-jari 14 cm!\n\n**Pembahasan:**\nK = 2 × π × r\nK = 2 × 22/7 × 14 = 88 cm\n\n**Soal 2:**\nHitung luas lingkaran dengan diameter 10 cm!\n\n**Pembahasan:**\nd = 10 → r = 5\nL = π × r² = 3,14 × 25 = 78,5 cm²`
},

// --- Materi Statistika (Bab ID: 205) ---
{
  id: 16,
  babId: 205,
  judul: '1. Pengertian Statistika',
  tipe: 'penjelasan',
  konten: `Statistika adalah cabang matematika yang mempelajari cara mengumpulkan, mengolah, menganalisis, dan menyajikan data.\n
Data bisa berupa angka, tabel, atau diagram.`
},
{
  id: 16,
  babId: 205,
  judul: '2. Mean (Rata-rata)',
  tipe: 'penjelasan',
  konten: `Mean adalah jumlah seluruh data dibagi banyaknya data.\n
**Rumus:**\nMean = (x₁ + x₂ + x₃ + ... + xn) / n\n
**Contoh:**\nData: 4, 6, 8, 10\nMean = (4 + 6 + 8 + 10) / 4 = 28 / 4 = 7`
},
{
  id: 16,
  babId: 205,
  judul: '3. Median (Nilai Tengah)',
  tipe: 'penjelasan',
  konten: `Median adalah nilai tengah dari data yang sudah diurutkan.\n
Jika jumlah data ganjil → nilai tengahnya.\nJika jumlah data genap → rata-rata dua nilai tengah.\n
**Contoh:**\nData: 3, 5, 7, 9, 11 → Median = 7\nData: 2, 4, 6, 8 → Median = (4 + 6) / 2 = 5`
},
{
  id: 16,
  babId: 205,
  judul: '4. Modus (Data yang Paling Sering Muncul)',
  tipe: 'penjelasan',
  konten: `Modus adalah nilai yang paling sering muncul dalam suatu kumpulan data.\n
**Contoh:**\nData: 2, 4, 4, 5, 6, 6, 6, 7 → Modus = 6`
},
{
  id: 16,
  babId: 205,
  judul: '5. Kuartil',
  tipe: 'penjelasan',
  konten: `Kuartil membagi data menjadi empat bagian yang sama besar.\n\n
- **Kuartil 1 (Q1):** Nilai seperempat dari data.\n
- **Kuartil 2 (Q2):** Sama dengan median.\n
- **Kuartil 3 (Q3):** Nilai tiga perempat dari data.\n
Kuartil digunakan untuk memahami penyebaran data.`
},
{
  id: 16,
  babId: 205,
  judul: '6. Contoh Soal Statistika',
  tipe: 'contoh_soal',
  konten: `**Soal:**\nDiketahui data: 5, 7, 8, 10, 10, 12, 15\nHitung mean, median, dan modus!\n\n**Pembahasan:**\nMean = (5 + 7 + 8 + 10 + 10 + 12 + 15) / 7 = 67 / 7 ≈ 9,57\nMedian = nilai ke-4 = 10\nModus = 10 (muncul 2 kali)`
},

// --- Materi Peluang (Bab ID: 206) ---
{
  id: 17,
  babId: 206,
  judul: '1. Pengertian Peluang',
  tipe: 'penjelasan',
  konten: `Peluang adalah kemungkinan terjadinya suatu peristiwa. Peluang dinyatakan dalam bentuk pecahan, desimal, atau persen.\n
Semakin besar peluang suatu kejadian, semakin besar kemungkinan kejadian itu terjadi.`
},
{
  id: 17,
  babId: 206,
  judul: '2. Peluang Teoretik',
  tipe: 'penjelasan',
  konten: `Peluang teoretik adalah peluang yang dihitung berdasarkan penalaran matematika tanpa percobaan.\n
**Rumus:**\nP(A) = n(A) / n(S)\n
Keterangan:\n- n(A) = banyaknya kejadian yang diinginkan\n- n(S) = banyaknya semua kemungkinan`
},
{
  id: 17,
  babId: 206,
  judul: '3. Peluang Empirik',
  tipe: 'penjelasan',
  konten: `Peluang empirik adalah peluang yang diperoleh dari hasil percobaan yang dilakukan berulang.\n
**Rumus:**\nP(A) = (banyak kejadian A terjadi) / (jumlah percobaan)`
},
{
  id: 17,
  babId: 206,
  judul: '4. Contoh Peluang Teoretik',
  tipe: 'contoh_soal',
  konten: `**Soal:**\nSebuah dadu dilempar sekali. Berapa peluang munculnya angka 4?\n\n**Pembahasan:**\n- Kemungkinan yang diinginkan: 1 (yaitu angka 4)\n- Banyaknya kemungkinan: 6\nP(A) = 1/6`
},
{
  id: 17,
  babId: 206,
  judul: '5. Contoh Peluang Empirik',
  tipe: 'contoh_soal',
  konten: `**Soal:**\nSebuah koin dilempar 20 kali, dan muncul sisi gambar sebanyak 9 kali. Berapa peluang empirik munculnya gambar?\n\n**Pembahasan:**\nP(A) = 9/20 = 0,45`
},
{
  id: 17,
  babId: 206,
  judul: '6. Perbandingan Peluang Teoretik dan Empirik',
  tipe: 'penjelasan',
  konten: `Peluang teoretik diperoleh dari perhitungan matematika tanpa percobaan.\nPeluang empirik diperoleh dari hasil percobaan nyata.\n
Semakin banyak percobaan, peluang empirik akan semakin mendekati peluang teoretik.`
},

// --- Materi Eksponen & Logaritma (Bab ID: 301) ---
{
  id: 1,
  babId: 301,
  judul: '1. Pengertian Eksponen dan Logaritma',
  tipe: 'penjelasan',
  konten: `Eksponen adalah bentuk perpangkatan bilangan, misalnya aⁿ artinya a dikalikan sebanyak n kali. Logaritma adalah kebalikan dari eksponen, yaitu logₐ(b) berarti pangkat berapa a harus dinaikkan agar menghasilkan b.`
},
{
  id: 1,
  babId: 301,
  judul: '2. Rumus Dasar Eksponen dan Logaritma',
  tipe: 'rumus',
  konten: `Beberapa sifat penting:\n
1) aᵐ × aⁿ = aᵐ⁺ⁿ\n
2) aᵐ ÷ aⁿ = aᵐ⁻ⁿ\n
3) (aᵐ)ⁿ = aᵐⁿ\n
4) logₐ(aⁿ) = n\n
5) aˡᵒᵍₐ(ⁿ) = n`
},
{
  id: 1,
  babId: 301,
  judul: '3. Contoh Soal Eksponen dan Logaritma',
  tipe: 'contoh_soal',
  konten: `**Soal 1:**\nHitung 2³ × 2².\n**Pembahasan:**\n2³ × 2² = 2⁵ = 32\n\n**Soal 2:**\nTentukan nilai log₂(8).\n**Pembahasan:**\nlog₂(8) = 3 karena 2³ = 8.`
},
{
  id: 1,
  babId: 301,
  judul: '4. Penerapan Eksponen dan Logaritma',
  tipe: 'penjelasan',
  konten: `Eksponen digunakan untuk menyatakan pertumbuhan populasi, bunga majemuk, dan ukuran mikro. Logaritma sering digunakan dalam skala pH, skala richter, dan desibel suara.`
},
{
  id: 1,
  babId: 301,
  judul: '5. Ringkasan Eksponen dan Logaritma',
  tipe: 'penjelasan',
  konten: `Eksponen menyatakan perpangkatan, sedangkan logaritma adalah inversnya. Menguasai sifat-sifatnya penting untuk menyelesaikan soal aljabar tingkat lanjut.`
},

// --- Materi Trigonometri Dasar (Bab ID: 302) ---
{
  id: 1,
  babId: 302,
  judul: '1. Pengertian Trigonometri',
  tipe: 'penjelasan',
  konten: `Trigonometri mempelajari hubungan antara sudut dan panjang sisi pada segitiga, terutama segitiga siku-siku. Fungsi utamanya adalah sinus, cosinus, dan tangen.`
},
{
  id: 1,
  babId: 302,
  judul: '2. Rumus Dasar Trigonometri',
  tipe: 'rumus',
  konten: `Dalam segitiga siku-siku:\n
sin θ = depan / miring\n
cos θ = samping / miring\n
tan θ = depan / samping`
},
{
  id: 1,
  babId: 302,
  judul: '3. Contoh Soal Trigonometri',
  tipe: 'contoh_soal',
  konten: `**Soal:**\nJika sudut θ memiliki sisi depan 6 cm dan sisi miring 10 cm, berapakah sin θ?\n**Pembahasan:** sin θ = 6/10 = 0,6`
},
{
  id: 1,
  babId: 302,
  judul: '4. Penerapan Trigonometri',
  tipe: 'penjelasan',
  konten: `Trigonometri digunakan dalam pengukuran tinggi bangunan, navigasi, astronomi, dan teknik sipil.`
},
{
  id: 1,
  babId: 302,
  judul: '5. Ringkasan Trigonometri',
  tipe: 'penjelasan',
  konten: `Trigonometri dasar fokus pada perbandingan sisi segitiga terhadap sudutnya. Menguasai sinus, cosinus, dan tangen sangat penting sebagai dasar lanjutannya.`
},

// --- Materi Limit Fungsi Aljabar (Bab ID: 303) ---
{
  id: 1,
  babId: 303,
  judul: '1. Pengertian Limit',
  tipe: 'penjelasan',
  konten: `Limit adalah nilai pendekatan suatu fungsi ketika variabelnya mendekati suatu titik tertentu. Limit digunakan dalam turunan dan integral.`
},
{
  id: 1,
  babId: 303,
  judul: '2. Rumus Dasar Limit',
  tipe: 'rumus',
  konten: `Beberapa sifat limit:\n
1) lim x→a c = c\n
2) lim x→a x = a\n
3) lim x→a [f(x) ± g(x)] = lim f(x) ± lim g(x)`
},
{
  id: 1,
  babId: 303,
  judul: '3. Contoh Soal Limit',
  tipe: 'contoh_soal',
  konten: `**Soal:**\nHitung lim x→2 (x² - 4) / (x - 2)\n**Pembahasan:**\n(x² - 4) = (x - 2)(x + 2)\nlim = x + 2 = 4`
},
{
  id: 1,
  babId: 303,
  judul: '4. Penerapan Limit',
  tipe: 'penjelasan',
  konten: `Limit digunakan untuk mencari kecepatan sesaat, menentukan turunan, dan memahami perilaku fungsi di titik tak terdefinisi.`
},
{
  id: 1,
  babId: 303,
  judul: '5. Ringkasan Limit',
  tipe: 'penjelasan',
  konten: `Limit membantu memahami nilai pendekatan fungsi dan menjadi dasar diferensial dan integral.`
},

// --- Materi Turunan Fungsi (Bab ID: 304) ---

  {
    id: 1,
    babId: 304,
    judul: '1. Pengertian Turunan Fungsi',
    tipe: 'penjelasan',
    konten: `Turunan (diferensial) adalah konsep dalam kalkulus yang digunakan untuk mengetahui laju perubahan suatu fungsi.\n\nJika sebuah fungsi ditulis sebagai f(x), maka turunan pertama dari fungsi tersebut dilambangkan dengan f'(x) atau df/dx.\n\nTurunan digunakan dalam berbagai aplikasi seperti kecepatan, pertumbuhan, dan optimasi.`
  },
  {
    id: 2,
    babId: 304,
    judul: '2. Aturan Dasar Turunan',
    tipe: 'rumus',
    konten: `Beberapa aturan dasar turunan yang sering digunakan:\n\n1) Konstanta\nJika f(x) = c, maka f'(x) = 0\n\n2) Pangkat (Power Rule)\nJika f(x) = axⁿ, maka f'(x) = n · axⁿ⁻¹\n\n3) Penjumlahan/Pengurangan\nJika f(x) = u ± v, maka f'(x) = u' ± v'\n\n4) Konstanta dikali fungsi\nJika f(x) = c·u(x), maka f'(x) = c·u'(x)`
  },
  {
    id: 3,
    babId: 304,
    judul: '3. Contoh Soal Turunan Dasar',
    tipe: 'contoh_soal',
    konten: `Contoh 1:\nf(x) = 5x³\nTurunannya:\nf'(x) = 3 · 5x³⁻¹ = 15x²\n\nContoh 2:\nf(x) = 7x² - 3x + 4\nTurunannya:\nf'(x) = 14x - 3`
  },
  {
    id: 4,
    babId: 304,
    judul: '4. Penerapan Turunan',
    tipe: 'penjelasan',
    konten: `Turunan digunakan dalam berbagai bidang:\n\n1) Fisika → Kecepatan dan percepatan\n2) Ekonomi → Biaya marginal dan keuntungan maksimal\n3) Teknik → Optimasi bentuk dan ukuran\n\nContoh: Menentukan kecepatan sesaat dari fungsi posisi terhadap waktu.`
  },
  {
    id: 5,
    babId: 304,
    judul: '5. Kesimpulan Turunan',
    tipe: 'penjelasan',
    konten: `Turunan adalah cara untuk mengukur perubahan suatu fungsi terhadap variabel bebasnya.\n\nDengan memahami aturan dasar dan contoh soalnya, kamu bisa mengerjakan soal-soal lanjutan seperti turunan trigonometri, logaritma, dan aplikasi optimasi.\n\nPelajari dasarnya dulu agar lebih mudah lanjut ke tingkat berikutnya.`
  },



// --- Materi Integral (Bab ID: 305) ---
{
  id: 1,
  babId: 305,
  judul: '1. Pengertian Integral',
  tipe: 'penjelasan',
  konten: `Integral adalah kebalikan dari turunan dan digunakan untuk mencari luas di bawah kurva. Integral terbagi menjadi tak tentu dan tentu.`
},
{
  id: 1,
  babId: 305,
  judul: '2. Rumus Dasar Integral',
  tipe: 'rumus',
  konten: `∫ xⁿ dx = xⁿ⁺¹ / (n + 1) + C\n∫ a dx = ax + C\n∫ f(x) dx dari a ke b = F(b) - F(a)`
},
{
  id: 1,
  babId: 305,
  judul: '3. Contoh Soal Integral',
  tipe: 'contoh_soal',
  konten: `**Soal:**\nHitung ∫ 3x² dx\n**Pembahasan:**\n= 3 × x³/3 = x³ + C`
},
{
  id: 1,
  babId: 305,
  judul: '4. Penerapan Integral',
  tipe: 'penjelasan',
  konten: `Integral digunakan untuk menghitung luas, volume, jarak tempuh, dan probabilitas dalam statistik.`
},
{
  id: 1,
  babId: 305,
  judul: '5. Ringkasan Integral',
  tipe: 'penjelasan',
  konten: `Integral adalah anti-turunan dan alat penting dalam fisika, teknik, dan matematika lanjutan.`
},

// --- Materi Dimensi Tiga (Bab ID: 306) ---
{
  id: 1,
  babId: 306,
  judul: '1. Pengertian Dimensi Tiga',
  tipe: 'penjelasan',
  konten: `Dimensi tiga mempelajari titik, garis, dan bidang dalam ruang. Termasuk jarak, sudut, dan posisi objek dalam koordinat 3D.`
},
{
  id: 1,
  babId: 306,
  judul: '2. Rumus Jarak dalam Ruang',
  tipe: 'rumus',
  konten: `Rumus jarak dua titik A(x₁,y₁,z₁) dan B(x₂,y₂,z₂):\nAB = √[(x₂-x₁)² + (y₂-y₁)² + (z₂-z₁)²]`
},
{
  id: 1,
  babId: 306,
  judul: '3. Contoh Soal Dimensi Tiga',
  tipe: 'contoh_soal',
  konten: `**Soal:**\nHitung jarak titik A(1,2,3) ke B(4,6,3).\n**Pembahasan:**\n= √[(4-1)² + (6-2)² + (3-3)²] = √(9 + 16 + 0) = 5`
},
{
  id: 1,
  babId: 306,
  judul: '4. Penerapan Dimensi Tiga',
  tipe: 'penjelasan',
  konten: `Konsep dimensi tiga digunakan dalam desain bangunan, animasi 3D, navigasi pesawat, hingga pemodelan fisika.`
},
{
  id: 1,
  babId: 306,
  judul: '5. Ringkasan Dimensi Tiga',
  tipe: 'penjelasan',
  konten: `Dimensi tiga membahas posisi dan jarak objek dalam ruang. Penting untuk aplikasi teknik dan sains.`
},



];
