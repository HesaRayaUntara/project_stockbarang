import { Controller, Post, Get, Body } from '@nestjs/common';
import { StockService } from 'src/my/service/my/stock.service';
import { StockDto } from 'src/my/dto/stock.dto';

@Controller('stockbarang')
export class StockController {
  constructor(private stockService: StockService) {}

  @Post()
  async create(@Body() stock: StockDto): Promise<StockDto> {
    const createdStock = await this.stockService.create(stock);
    return createdStock;
  }

  @Get()
  async findAll(): Promise<StockDto[]> {
    const stocks = await this.stockService.findAll();
    return stocks;
  }
}
