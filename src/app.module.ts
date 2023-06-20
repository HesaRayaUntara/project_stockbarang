import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Keluar } from './my/entity/my/keluar_entity';
import { KeluarModule } from './my/keluar.module';
import { MasukModule } from './my/masuk.module';
import { Masuk } from './my/entity/my/masuk_entity';
import { Supplier } from './my/entity/my/supplier_entity';
import { SupplierModule } from './my/supplier.module';
import { ApiModule } from './api/api.module';
import { getEnvPath } from './common/helper/env.helper';
import { User } from './api/user/user.entity';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: getEnvPath(`${__dirname}/common/envs`), isGlobal: true }),
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        database: 'stockbarang',
        username: 'postgres',
        password: 'hesa2006',
        entities: [User, Keluar, Masuk, Supplier],
        migrations: ['dist/migrations/*.{ts,js}'],
        migrationsTableName: 'typeorm_migrations',
        logger: 'file',
        synchronize: true,
        autoLoadEntities: true,
      }),
    }),
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
