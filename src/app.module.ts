import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Keluar } from './my/entity/my/keluar_entity';
import { KeluarModule } from './my/keluar.module';
import { MasukModule } from './my/masuk.module';
import { Masuk } from './my/entity/my/masuk_entity';
import { Supplier } from './my/entity/my/supplier_entity';
import { SupplierModule } from './my/supplier.module';
import { ApiModule } from './api/api.module';
import { getEnvPath } from './common/helper/env.helper';
import { TypeOrmConfigService } from './shared/typeorm/typeorm.service';
import { ConfigModule } from '@nestjs/config';
import { User } from './api/user/user.entity';

const envFilePath: string = getEnvPath(`${__dirname}/common/envs`);

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath, isGlobal: true }),
    TypeOrmModule.forRootAsync({ useClass: TypeOrmConfigService }),
    TypeOrmModule.forFeature([User]),
    ApiModule,
    KeluarModule,
    MasukModule,
    SupplierModule,
    ApiModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

