import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UploadedFile,
  UseInterceptors,
  UseGuards,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import multer, { diskStorage } from 'multer';
import { AuthGuard } from 'src/midleware/auth-guard';

const fileUploadInterceptor = FileInterceptor('image', {
  storage: diskStorage({
    destination: './image',
    filename: (req, file, cb) => {
      const date = Date.now();
      cb(null, date + '-' + file.originalname);
    },
  }),
  fileFilter: (req, file, cb) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
      return cb(new Error('Hanya file gambar yang diizinkan!'), false);
    }
    cb(null, true);
  },
});

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  @UseGuards(AuthGuard)
  @UseInterceptors(fileUploadInterceptor)
  create(
    @Body() createProductDto: CreateProductDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    createProductDto.image = file.filename;
    return this.productService.create(createProductDto);
  }

  @Get()
  @UseGuards(AuthGuard)
  findAll() {
    return this.productService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard)
  @UseInterceptors(fileUploadInterceptor)
  update(
    @Param('id') id: string,
    @Body() updateProductDto: CreateProductDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    updateProductDto.image = file.filename;
    return this.productService.update(+id, updateProductDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  remove(@Param('id') id: string) {
    return this.productService.remove(+id);
  }
}
