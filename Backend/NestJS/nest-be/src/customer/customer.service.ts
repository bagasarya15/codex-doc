import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { customer } from 'models';

@Injectable()
export class CustomerService {
  create(createCustomerDto: CreateCustomerDto) {
    return 'This action adds a new customer';
  }

  async findAll() {
    try {
      const dataCustomer = await customer.findAll();

      let succes = {
        message: 'success',
        result: dataCustomer,
      };

      return succes;
    } catch (error) {
      return error.message;
    }
  }

  async findOne(id: number) {
    try {
      const dataCustomer = await customer.findOne({
        where: { id: id },
      });

      let succes = {
        message: 'success',
        result: dataCustomer,
      };

      return succes;
    } catch (error) {
      return error.message;
    }
  }

  async update(id: number, updateCustomerDto: UpdateCustomerDto) {
    try {
      const updateCustomer = await customer.update(
        {
          firstname: updateCustomerDto.firstname,
          lastname: updateCustomerDto.lastname,
        },
        {
          where: { id: id },
          returning: true,
        },
      );

      let succes = {
        message: 'Customer berhasil diperbarui',
        result: updateCustomer,
      };

      return succes;
    } catch (error) {
      return error.message;
    }
  }

  remove(id: number) {
    return `This action removes a #${id} customer`;
  }
}
