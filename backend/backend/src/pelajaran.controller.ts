import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { PelajaranService } from './pelajaran.service';
import { Bab } from './bab.entity';
import { Kelas } from './kelas.entity';
import { Materi } from './materi.entity';

@Controller('api/pelajaran')
export class PelajaranController {
  constructor(private readonly pelajaranService: PelajaranService) {}

  @Get('kelas/:jenjang')
  getKelasByJenjang(@Param('jenjang') jenjang: string): Kelas[] {
    const jenjangUpper = jenjang.toUpperCase();
    if (!['SD', 'SMP', 'SMA'].includes(jenjangUpper)) {
      throw new NotFoundException('Jenjang tidak valid. Gunakan: SD, SMP, atau SMA.');
    }
    return this.pelajaranService.findKelasByJenjang(jenjangUpper as 'SD' | 'SMP' | 'SMA');
  }

  @Get('bab/kelas/:kelasId')
  getBabByKelasId(@Param('kelasId') kelasId: string): Bab[] {
    const id = parseInt(kelasId, 10);
    const hasil = this.pelajaranService.findBabByKelasId(id);
    if (hasil.length === 0) {
      throw new NotFoundException(`Tidak ada bab ditemukan untuk kelas ID: ${id}`);
    }
    return hasil;
  }
  
  @Get('materi/bab/:babId')
  getMateriByBabId(@Param('babId') babId: string): Materi[] {
    const id = parseInt(babId, 10);
    const hasil = this.pelajaranService.findMateriByBabId(id);
    if (hasil.length === 0) {
      throw new NotFoundException(`Tidak ada materi ditemukan untuk bab ID: ${id}`);
    }
    return hasil;
  }
}
