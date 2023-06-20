import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Keluar } from '../../entity/my/keluar_entity';
import { KeluarDto } from '../../dto/keluar.dto';
import { MasukService } from './masuk.service';
import { Masuk } from 'src/my/entity/my/masuk_entity';

@Injectable()
export class KeluarService {
  constructor(
    @InjectRepository(Keluar)
    private readonly keluarRepository: Repository<Keluar>,
    private readonly masukService: MasukService,
  ) {}

  async create(keluarDto: KeluarDto): Promise<Keluar> {
    const keluar = new Keluar();
    keluar.nama_barang = keluarDto.nama_barang;
    keluar.jumlah = keluarDto.jumlah;
    keluar.penerima = keluarDto.penerima;
    keluar.tanggal = keluarDto.tanggal;

    const savedKeluar = await this.keluarRepository.save(keluar);

    if (savedKeluar) {
      await this.masukService.kurangiJumlahMasuk(savedKeluar.idbarang, savedKeluar.jumlah);
    }

    return savedKeluar;
  }

  async findAll(): Promise<Keluar[]> {
    return await this.keluarRepository.find();
  }

  async findOne(id: string): Promise<Keluar> {
    return await this.keluarRepository.findOne({ where: { idkeluar: id } });
  }

  async update(idkeluar: string, keluarDto: KeluarDto): Promise<Keluar> {
    const keluar = await this.keluarRepository.findOne({ where: { idkeluar: idkeluar } });
    if (keluar) {
      keluar.nama_barang = keluarDto.nama_barang;
      keluar.jumlah = keluarDto.jumlah;
      keluar.penerima = keluarDto.penerima;
      keluar.tanggal = keluarDto.tanggal;
      return await this.keluarRepository.save(keluar);
    }
    return null;
  }

  async kurangiJumlahMasuk(idbarang: string, jumlahKeluar: number): Promise<Masuk> {
    const masuk = await this.masukService.findOne(idbarang);
    if (!masuk) {
      throw new NotFoundException('Barang masuk tidak ditemukan');
    }
    masuk.jumlah -= jumlahKeluar;
    return await this.masukService.update(idbarang, masuk);
  }  

  // async tambahJumlahMasuk(idbarang: string, jumlahMasuk: number): Promise<Masuk> {
  //   const masuk = await this.masukService.findOne(idbarang);
  //   if (!masuk) {
  //     throw new NotFoundException('Masuk tidak ditemukan');
  //   }
  //   masuk.jumlah += jumlahMasuk;
  //   return await this.masukService.update(idbarang, masuk);
  // }

  // async delete(id: string): Promise<void> {
  //   const keluar = await this.keluarRepository.findOne({ where: { idkeluar: id } });
  //   if (keluar) {
  //     await this.tambahJumlahMasuk(keluar.idbarang, keluar.jumlah);
  //     await this.keluarRepository.remove(keluar);
  //   }
  // }  

  async delete(id: string): Promise<void> {
    await this.keluarRepository.delete(id);
  }

}