import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MasukController } from 'src/my/controller/my/masuk.controller';
import { Masuk } from 'src/my/entity/my/masuk_entity';
import { MasukService } from 'src/my/service/my/masuk.service';
import { Stock } from 'src/my/entity/my/stock_entity';
import { StockService } from 'src/my/service/my/stock.service';
import { StockController } from 'src/my/controller/my/stock.controller';
import { Keluar } from './entity/my/keluar_entity';
import { KeluarController } from './controller/my/keluar.controller';
import { KeluarService } from './service/my/keluar.service';

@Module({
  imports: [TypeOrmModule.forFeature([Masuk, Stock, Keluar])],
  controllers: [MasukController, StockController, KeluarController],
  providers: [MasukService, StockService, KeluarService],
})
export class MasukModule {}
