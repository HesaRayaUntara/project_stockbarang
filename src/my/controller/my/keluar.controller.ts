import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { KeluarService } from '../../service/my/keluar.service';
import { KeluarDto } from '../../dto/keluar.dto';

@Controller('keluar')
export class KeluarController {
  constructor(private readonly keluarService: KeluarService) {}

  @Post()
  async create(@Body() keluarDto: KeluarDto) {
    return await this.keluarService.create(keluarDto);
  }

  @Get()
  async findAll() {
    return await this.keluarService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.keluarService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() keluarDto: KeluarDto) {
    return await this.keluarService.update(id, keluarDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.keluarService.delete(id);
  }
}
