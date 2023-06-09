import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { MasukService } from 'src/my/service/my/masuk.service';
import { MasukDto } from 'src/my/dto/masuk.dto';
import { Masuk } from 'src/my/entity/my/masuk_entity';
import { KeluarService } from 'src/my/service/my/keluar.service';

@Controller('masuk')
export class MasukController {
  constructor(
    private readonly masukService: MasukService,
    private readonly keluarService: KeluarService
  ) {}

  @Post()
  async create(@Body() masukDto: MasukDto): Promise<Masuk> {
    const masuk = await this.masukService.create(masukDto);
    return masuk;
  }

  @Get()
  async findAll(): Promise<Masuk[]> {
    return await this.masukService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Masuk> {
    return await this.masukService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() masukDto: MasukDto): Promise<Masuk> {
    const masuk = await this.masukService.update(id, masukDto);
    return masuk;
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    const masuk = await this.masukService.findOne(id);
    await this.masukService.delete(id);
  }

  // @Delete(':id')
  // async delete(@Param('id') id: string): Promise<void> {
  //   const masuk = await this.masukService.findOne(id);
  //   const keluarIds = masuk.keluar.map(keluar => keluar.idkeluar);
  //   await Promise.all(keluarIds.map(keluarId => this.keluarService.delete(keluarId)));
  //   await this.masukService.delete(id);
  // }

}
