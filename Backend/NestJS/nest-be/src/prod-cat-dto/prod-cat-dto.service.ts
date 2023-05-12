import { Injectable } from '@nestjs/common';
import { CreateProdCatDtoDto } from './dto/create-prod-cat-dto.dto';
import { UpdateProdCatDtoDto } from './dto/update-prod-cat-dto.dto';
import { product_category } from 'models';

@Injectable()
export class ProdCatDtoService {
  async create(createProdCatDtoDto: CreateProdCatDtoDto) {
    try {
      const category = await product_category.create({
        name: createProdCatDtoDto.name,
        description: createProdCatDtoDto.description,
      });

      let success = {
        message: 'Kategori berhasil ditambah',
        result: category,
      };

      return success;
    } catch (error) {
      return error.message;
    }
  }

  async findAll() {
    try {
      const category = await product_category.findAll();

      let success = {
        message: 'success',
        result: category,
      };

      return success;
    } catch (error) {
      return error.message;
    }
  }

  async findOne(id: number) {
    try {
      const category = await product_category.findOne({
        where: { id: id },
      });

      let success = {
        message: 'success',
        result: category,
      };

      return success;
    } catch (error) {
      return error.message;
    }
  }

  async update(id: number, updateProdCatDtoDto: UpdateProdCatDtoDto) {
    try {
      const category = await product_category.update(
        {
          name: updateProdCatDtoDto.name,
          description: updateProdCatDtoDto.description,
        },
        {
          where: { id: id },
          returning: true,
        },
      );

      let success = {
        message: 'Kategori id ' + id + ' berhasil diperbarui',
        result: category,
      };

      return success;
    } catch (error) {
      return error.message;
    }
  }

  async remove(id: number) {
    try {
      await product_category.destroy({
        where: { id: id },
      });

      let success = {
        message: 'Kategori id ' + id + ' berhasil dihapus',
      };

      return success;
    } catch (error) {
      return error.message;
    }
  }
}
