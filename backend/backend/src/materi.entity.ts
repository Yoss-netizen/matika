export class Materi {
  id: number;
  babId: number;
  judul: string;
  tipe: 'penjelasan' | 'contoh_soal' | 'rumus';
  konten: string; // Bisa berisi teks biasa atau format Markdown
}