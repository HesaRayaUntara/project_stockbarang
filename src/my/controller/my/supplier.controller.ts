import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { SupplierService } from 'src/my/service/my/supplier.service';
import { SupplierDto } from 'src/my/dto/supplier.dto';
import { Supplier } from 'src/my/entity/my/supplier_entity';

@Controller('supplier')
export class SupplierController {
  constructor(
    private readonly supplierService: SupplierService,
  ) {}

  @Post()
  async create(@Body() supplierDto: SupplierDto): Promise<Supplier> {
    const supplier = await this.supplierService.create(supplierDto);
    return supplier;
  }

  @Get()
  async findAll(): Promise<Supplier[]> {
    return await this.supplierService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Supplier> {
    return await this.supplierService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() supplierDto: SupplierDto): Promise<Supplier> {
    const supplier = await this.supplierService.update(id, supplierDto);
    return supplier;
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    const supplier = await this.supplierService.findOne(id);
    await this.supplierService.delete(id);
  }
}
