import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Stock } from 'src/my/entity/my/stock_entity';
import { StockDto } from 'src/my/dto/stock.dto';

@Injectable()
export class StockService {
  constructor(
    @InjectRepository(Stock)
    private stockRepository: Repository<Stock>,
  ) {}

  async create(stockDto: StockDto): Promise<StockDto> {
    const stock = new Stock();
    // stock.nama_barang = stockDto.nama_barang;
    // stock.deskripsi = stockDto.deskripsi;
    stock.jumlah = stockDto.jumlah;

    await this.stockRepository.save(stock);
    return stockDto;
  }

  async updateStock(namaBarang: string, jumlah: number): Promise<void> {
    // await this.stockRepository.update({ nama_barang: namaBarang }, { jumlah });
  }

  async findAll(): Promise<StockDto[]> {
    const stocks = await this.stockRepository.find();
    return stocks.map((stock) => {
      const stockDto = new StockDto();
      // stockDto.nama_barang = stock.nama_barang;
      // stockDto.deskripsi = stock.deskripsi;
      stockDto.jumlah = stock.jumlah;
      return stockDto;
    });
  }
}
