import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Masuk } from 'src/my/entity/my/masuk_entity';
import { MasukDto } from 'src/my/dto/masuk.dto';

@Injectable()
export class MasukService {
  constructor(
    @InjectRepository(Masuk)
    private readonly masukRepository: Repository<Masuk>,
  ) {}

  async create(masukDto: MasukDto): Promise<Masuk> {
    const masuk = new Masuk();
    masuk.nama_barang = masukDto.nama_barang;
    masuk.keterangan = masukDto.keterangan;
    masuk.jumlah = masukDto.jumlah;
    masuk.konfir_jumlah = masukDto.konfir_jumlah;
    masuk.penerima = masukDto.penerima;
    masuk.nama_supplier = masukDto.nama_supplier;
    masuk.tanggal = masukDto.tanggal;
    return await this.masukRepository.save(masuk);
  }

  async findAll(): Promise<Masuk[]> {
    return await this.masukRepository.find();
  }

  async findOne(id: string): Promise<Masuk> {
    return await this.masukRepository.findOne({ where: { idbarang: id } });
  }

  async update(id: string, masukDto: MasukDto): Promise<Masuk> {
    const masuk = await this.masukRepository.findOne({ where: { idbarang: id } });
    if (!masuk) {
      throw new NotFoundException('Masuk tidak ditemukan');
    }
    masuk.nama_barang = masukDto.nama_barang;
    masuk.keterangan = masukDto.keterangan;
    masuk.jumlah = masukDto.jumlah;
    masuk.konfir_jumlah = masukDto.konfir_jumlah;
    masuk.penerima = masukDto.penerima;
    masuk.nama_supplier = masukDto.nama_supplier;
    masuk.tanggal = masukDto.tanggal;
    return await this.masukRepository.save(masuk);
  }

  async kurangiJumlahMasuk(nama_barang: string, jumlahKeluar: number): Promise<Masuk> {
    const masuk = await this.masukRepository.findOneOrFail({ where: { nama_barang } });
    if (!masuk) {
      throw new NotFoundException('Masuk tidak ditemukan');
    }
    masuk.jumlah -= jumlahKeluar;
    return await this.masukRepository.save(masuk);
  }

  async delete(id: string): Promise<void> {
    const masuk = await this.masukRepository.findOne({ where: { idbarang: id } });
    if (masuk) {
      await this.masukRepository.delete(id);
    }
  }
}
