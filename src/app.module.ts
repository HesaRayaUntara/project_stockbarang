import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StockModule } from 'src/my/stock.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Stock } from './my/entity/my/stock_entity';
import { Keluar } from './my/entity/my/keluar_entity';
import { KeluarModule } from './my/keluar.module';
import { LoginModule } from './my/login.module';
import { Login } from './my/entity/my/login_entity';
import { MasukModule } from './my/masuk.module';
import { Masuk } from './my/entity/my/masuk_entity';
import { Supplier } from './my/entity/my/supplier_entity';
import { SupplierModule } from './my/supplier.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'hesa2006',
      database: 'stockbarang',
      entities: [Stock, Keluar, Login, Masuk, Supplier],
      synchronize: true,
    }),
    StockModule,
    KeluarModule,
    LoginModule,
    MasukModule,
    SupplierModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

