import { Injectable, Param } from '@nestjs/common';
import { product_category } from 'models';
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class ProductCategoryService {
  constructor(private sequelize: Sequelize) {}

  async GetAllCategory(): Promise<any> {
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

  async GetCategoryById(id: number): Promise<any> {
    try {
      const category = await product_category.findOne({
        where: { id: id },
      });

      let success = {
        message: 'Success',
        status: '202',
        result: category,
      };

      return success;
    } catch (error) {
      return error.message;
    }
  }

  async CreateCategory(dataBody: any): Promise<any> {
    try {
      const category = await product_category.create({
        name: dataBody.name,
        description: dataBody.description,
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

  async UpdateCategory(id: number, dataBody: any): Promise<any> {
    try {
      const category = await product_category.update(
        {
          name: dataBody.name,
          description: dataBody.description,
        },
        {
          where: { id: id },
          returning: true,
        },
      );

      return ['Kategori berhasil diperbarui', category];
    } catch (error) {
      return error.message;
    }
  }

  async DeleteCategory(id: number): Promise<any> {
    try {
      await product_category.destroy({
        where: { id: id },
      });

      return [`Kategori id ${id} berhasil dihapus`];
    } catch (error) {
      return error.message;
    }
  }
}
