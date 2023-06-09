import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MasukController } from 'src/my/controller/my/masuk.controller';
import { Masuk } from 'src/my/entity/my/masuk_entity';
import { MasukService } from 'src/my/service/my/masuk.service';
import { Keluar } from './entity/my/keluar_entity';
import { KeluarController } from './controller/my/keluar.controller';
import { KeluarService } from './service/my/keluar.service';

@Module({
  imports: [TypeOrmModule.forFeature([Masuk, Keluar])],
  controllers: [MasukController, KeluarController],
  providers: [MasukService, KeluarService],
})
export class MasukModule {}
