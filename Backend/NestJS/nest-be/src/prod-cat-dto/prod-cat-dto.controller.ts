import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProdCatDtoService } from './prod-cat-dto.service';
import { CreateProdCatDtoDto } from './dto/create-prod-cat-dto.dto';
import { UpdateProdCatDtoDto } from './dto/update-prod-cat-dto.dto';

@Controller('prod-cat-dto')
export class ProdCatDtoController {
  constructor(private readonly prodCatDtoService: ProdCatDtoService) {}

  @Post('create')
  create(@Body() createProdCatDtoDto: CreateProdCatDtoDto) {
    return this.prodCatDtoService.create(createProdCatDtoDto);
  }

  @Get('find-all')
  findAll() {
    return this.prodCatDtoService.findAll();
  }

  @Get('find-by/:id')
  findOne(@Param('id') id: string) {
    return this.prodCatDtoService.findOne(+id);
  }

  @Patch('update/:id')
  update(
    @Param('id') id: string,
    @Body() updateProdCatDtoDto: UpdateProdCatDtoDto,
  ) {
    return this.prodCatDtoService.update(+id, updateProdCatDtoDto);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.prodCatDtoService.remove(+id);
  }
}
