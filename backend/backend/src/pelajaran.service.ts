import { Injectable } from '@nestjs/common';
import { Bab } from './bab.entity';
import { Kelas } from './kelas.entity';
import { Materi } from './materi.entity';
import { SEMUA_KELAS } from './kelas.data';
import { SEMUA_BAB } from './bab.data';
import { SEMUA_MATERI } from './materi.data';

@Injectable()
export class PelajaranService {
  findKelasByJenjang(jenjang: 'SD' | 'SMP' | 'SMA'): Kelas[] {
    return SEMUA_KELAS.filter(k => k.jenjang === jenjang);
  }

  findBabByKelasId(kelasId: number): Bab[] {
    return SEMUA_BAB.filter(b => b.kelasId === kelasId);
  }

  findMateriByBabId(babId: number): Materi[] {
    return SEMUA_MATERI.filter(m => m.babId === babId);
  }
}
