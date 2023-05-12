import { Module } from '@nestjs/common';
import { ProductCategoryController } from './product_category.controller';
import { product_category } from 'models';
import { ProductCategoryService } from './product_category.service';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([product_category])],
  providers: [ProductCategoryService],
  controllers: [ProductCategoryController],
})
export class ProductCategoryModule {}
