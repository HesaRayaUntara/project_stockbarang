// import { Injectable, Inject } from '@nestjs/common';
// import { ConfigService } from '@nestjs/config';
// import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';

// @Injectable()
// export class TypeOrmConfigService implements TypeOrmOptionsFactory {
//   @Inject(ConfigService)
//   private readonly config: ConfigService;

//   public createTypeOrmOptions(): TypeOrmModuleOptions {
//     return {
//       type: 'postgres',
//       host: 'localhost',
//       port: 5432,
//       database: 'stockbarang',
//       username: 'postgres',
//       password: 'hesa2006',
//       entities: [],
//       migrations: ['dist/migrations/*.{ts,js}'],
//       migrationsTableName: 'typeorm_migrations',
//       logger: 'file',
//       synchronize: true,
//       autoLoadEntities: true,
//     };
//   }
// }