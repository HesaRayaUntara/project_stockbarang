import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SupplierController } from 'src/my/controller/my/supplier.controller';
import { Supplier } from 'src/my/entity/my/supplier_entity';
import { SupplierService } from 'src/my/service/my/supplier.service';

@Module({
  imports: [TypeOrmModule.forFeature([Supplier])],
  controllers: [SupplierController],
  providers: [SupplierService],
})
export class SupplierModule {}
