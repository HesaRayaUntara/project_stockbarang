import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KeluarController } from 'src/my/controller/my/keluar.controller';
import { Keluar } from 'src/my/entity/my/keluar_entity';
import { KeluarService } from 'src/my/service/my/keluar.service';
import { MasukService } from './service/my/masuk.service';
import { Masuk } from './entity/my/masuk_entity';

@Module({
  imports: [TypeOrmModule.forFeature([Keluar, Masuk])],
  controllers: [KeluarController],
  providers: [KeluarService, MasukService],
})
export class KeluarModule {}
