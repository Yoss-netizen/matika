import { Controller, Get, Param, NotFoundException, Res } from '@nestjs/common';
import { AppService } from './app.service';
import express from 'express';

@Controller('api')
export class AppController {
  [x: string]: any;
  constructor(private readonly appService: AppService) {}
  
  // Fungsi untuk menambahkan header CORS
  private setCorsHeaders(res: express.Response) {
    res.header('Access-Control-Allow-Origin', '*');
  }

  @Get('kelas/:jenjang')
  getKelasByJenjang(@Param('jenjang') jenjang: string, @Res() res: express.Response) {
    this.setCorsHeaders(res);
    const jenjangUpper = jenjang.toUpperCase();
    if (!['SD', 'SMP', 'SMA'].includes(jenjangUpper)) {
      throw new NotFoundException('Jenjang tidak valid.');
    }
    const data = this.appService.findKelasByJenjang(jenjangUpper as 'SD' | 'SMP' | 'SMA');
    res.send(data);
  }

  @Get('bab/kelas/:kelasId')
  getBabByKelasId(@Param('kelasId') kelasId: string, @Res() res: express.Response) {
    this.setCorsHeaders(res);
    const id = parseInt(kelasId, 10);
    const hasil = this.appService.findBabByKelasId(id);
    if (hasil.length === 0) throw new NotFoundException(`Tidak ada bab ditemukan.`);
    res.send(hasil);
  }
  
  @Get('materi/bab/:babId')
  getMateriByBabId(@Param('babId') babId: string, @Res() res: express.Response) {
    this.setCorsHeaders(res);
    const id = parseInt(babId, 10);
    const hasil = this.appService.findMateriByBabId(id);
    if (hasil.length === 0) throw new NotFoundException(`Tidak ada materi ditemukan.`);
    res.send(hasil);
  }
}