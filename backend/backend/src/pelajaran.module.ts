import { Module } from '@nestjs/common';
import { PelajaranController } from './pelajaran.controller';
import { PelajaranService } from './pelajaran.service';

@Module({
  controllers: [PelajaranController],
  providers: [PelajaranService],
})
export class PelajaranModule {}