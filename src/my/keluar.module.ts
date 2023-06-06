import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KeluarController } from 'src/my/controller/my/keluar.controller';
import { Keluar } from 'src/my/entity/my/keluar_entity';
import { KeluarService } from 'src/my/service/my/keluar.service';
import { Stock } from 'src/my/entity/my/stock_entity';
import { StockService } from 'src/my/service/my/stock.service';
import { StockController } from 'src/my/controller/my/stock.controller';
import { MasukService } from './service/my/masuk.service';
import { Masuk } from './entity/my/masuk_entity';

@Module({
  imports: [TypeOrmModule.forFeature([Keluar, Stock, Masuk])],
  controllers: [KeluarController, StockController],
  providers: [KeluarService, StockService, MasukService],
})
export class KeluarModule {}
