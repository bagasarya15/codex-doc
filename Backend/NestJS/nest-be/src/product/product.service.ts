import {
  BadRequestException,
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { product, product_category } from 'models';
import * as fs from 'fs-extra';

export class ValidationInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler) {
    const request = context.switchToHttp().getRequest();

    const payload = request.body;
    if (
      !payload ||
      !payload.description ||
      !payload.name ||
      !payload.category_id ||
      !payload.price
    ) {
      throw new BadRequestException(`Field ada yang kosong!`);
    }

    return next.handle();
  }
}

@Injectable()
export class ProductService {
  async create(createProductDto: CreateProductDto) {
    try {
      // if(!createProductDto.name || !createProductDto.description || !createProductDto.category_id || !createProductDto.price ) {
      //   throw new Error('Field must be required!')
      // }

      if (!createProductDto.name) {
        throw new Error('Field produk required');
      } else if (!createProductDto.description) {
        throw new Error('Field description required');
      } else if (!createProductDto.category_id) {
        throw new Error('Field category_id required');
      } else if (!createProductDto.price) {
        throw new Error('Field price required');
      } else {
        const dataProduct = await product.create({
          name: createProductDto.name,
          description: createProductDto.description,
          category_id: createProductDto.category_id,
          price: createProductDto.price,
          image: createProductDto.image,
        });

        let success = {
          message: 'Data produk berhasil ditambah',
          status: '202',
          result: dataProduct,
        };

        return success;
      }
    } catch (error) {
      const oldImagePath = './image/' + createProductDto.image;
      if (fs.existsSync(oldImagePath)) {
        fs.unlinkSync(oldImagePath);
      }
      return error.message;
    }
  }

  async findAll() {
    try {
      const dataProduct = await product.findAll({
        include: [
          {
            model: product_category,
          },
        ],
      });

      let success = {
        message: 'success',
        status: '202',
        result: dataProduct,
      };

      return success;
    } catch (error) {
      return error.message;
    }
  }

  async findOne(id: number) {
    try {
      const dataProduct = await product.findOne({
        include: [
          {
            model: product_category,
          },
        ],
        where: { id: id },
      });

      let success = {
        message: 'success',
        status: '202',
        result: dataProduct,
      };

      return success;
    } catch (error) {
      return error.message;
    }
  }

  async update(id: number, updateProductDto: CreateProductDto): Promise<any> {
    try {
      if (!updateProductDto.name) {
        throw new Error('Field produk required');
      } else if (!updateProductDto.description) {
        throw new Error('Field description required');
      } else if (!updateProductDto.category_id) {
        throw new Error('Field category_id required');
      } else if (!updateProductDto.price) {
        throw new Error('Field price required');
      } else {
        const getPk = await product.findByPk(id);

        const oldImagePath = './image/' + getPk.image;
        if (fs.existsSync(oldImagePath)) {
          fs.unlinkSync(oldImagePath);
        }

        const dataProduct = await product.update(
          {
            name: updateProductDto.name,
            description: updateProductDto.description,
            category_id: updateProductDto.category_id,
            price: updateProductDto.price,
            image: updateProductDto.image,
          },
          {
            where: { id: id },
            returning: true,
          },
        );

        if (!dataProduct) throw new Error('Isi dulu!');

        let success = {
          message: 'Data produk berhasil diperbarui',
          status: '202',
          result: dataProduct,
        };

        return success;
      }
    } catch (error) {
      const oldImagePath = './image/' + updateProductDto.image;
      if (fs.existsSync(oldImagePath)) {
        fs.unlinkSync(oldImagePath);
      }
      return error.message;
    }
  }

  async remove(id: number) {
    const dataProduct = await product.findByPk(id);
    try {
      if (!dataProduct) throw new Error('Produk tidak ditemukan!');

      const imagePath = './image/' + dataProduct.image;
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }

      await dataProduct.destroy();

      let success = {
        message: `Data produk id: ${id} berhasil dihapus`,
      };

      return success;
    } catch (error) {
      return error.message;
    }
  }
}
