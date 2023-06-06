import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Supplier } from 'src/my/entity/my/supplier_entity';
import { SupplierDto } from 'src/my/dto/supplier.dto';

@Injectable()
export class SupplierService {
  constructor(
    @InjectRepository(Supplier)
    private readonly supplierRepository: Repository<Supplier>,
  ) {}

  async create(supplierDto: SupplierDto): Promise<Supplier> {
    const supplier = new Supplier();
    supplier.nama_supplier = supplierDto.nama_supplier;
    supplier.alamat = supplierDto.alamat;
    supplier.telepon = supplierDto.telepon;
    return await this.supplierRepository.save(supplier);
  }

  async findAll(): Promise<Supplier[]> {
    return await this.supplierRepository.find();
  }

  async findOne(id: string): Promise<Supplier> {
    return await this.supplierRepository.findOne({ where: { idsupplier: id } });
  }

  async update(id: string, supplierDto: SupplierDto): Promise<Supplier> {
    const supplier = await this.supplierRepository.findOne({ where: { idsupplier: id } });
    if (supplier) {
      supplier.nama_supplier = supplierDto.nama_supplier;
      supplier.alamat = supplierDto.alamat;
      supplier.telepon = supplierDto.telepon;
      return await this.supplierRepository.save(supplier);
    }
  }

  async delete(id: string): Promise<void> {
    await this.supplierRepository.delete(id);
  }
}