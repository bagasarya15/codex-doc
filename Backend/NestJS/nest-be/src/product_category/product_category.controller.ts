import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { ProductCategoryService } from './product_category.service';

@Controller('product-category')
export class ProductCategoryController {
  constructor(
    private readonly productCategoryService: ProductCategoryService,
  ) {}

  @Get('find-all')
  FindAllCategory() {
    return this.productCategoryService.GetAllCategory();
  }

  @Get('find-by/:id')
  FindCategoryById(@Param('id') id: string): any {
    return this.productCategoryService.GetCategoryById(+id);
  }

  @Post('create')
  PostCategory(@Body() dataBody: string): any {
    return this.productCategoryService.CreateCategory(dataBody);
  }

  @Put('update/:id')
  PutCategory(@Param('id') id: string, @Body() dataBody: string): any {
    return this.productCategoryService.UpdateCategory(+id, dataBody);
  }

  @Delete('delete/:id')
  DeleteCategory(@Param('id') id: string): any {
    return this.productCategoryService.DeleteCategory(+id);
  }
}
