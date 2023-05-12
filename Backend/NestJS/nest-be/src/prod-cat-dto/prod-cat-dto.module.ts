import { Module } from '@nestjs/common';
import { ProdCatDtoService } from './prod-cat-dto.service';
import { ProdCatDtoController } from './prod-cat-dto.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { product_category } from 'models';

@Module({
  imports: [SequelizeModule.forFeature([product_category])],
  controllers: [ProdCatDtoController],
  providers: [ProdCatDtoService],
})
export class ProdCatDtoModule {}
