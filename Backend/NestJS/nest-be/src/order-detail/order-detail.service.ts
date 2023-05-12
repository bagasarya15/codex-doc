import { Injectable } from '@nestjs/common';
import { CreateOrderDetailDto } from './dto/create-order-detail.dto';
import { UpdateOrderDetailDto } from './dto/update-order-detail.dto';
import { order_detail } from 'models';

@Injectable()
export class OrderDetailService {
  create(createOrderDetailDto: CreateOrderDetailDto) {
    return 'This action adds a new orderDetail';
  }

  async findAll() {
    try {
      const orderDetail = await order_detail.findAll();

      let succes = {
        message: 'success',
        result: orderDetail,
      };

      return succes;
    } catch (error) {
      return error.message;
    }
  }

  async findOne(id: number) {
    try {
      const orderDetail = await order_detail.findOne({
        where: {
          id: id,
        },
      });

      let succes = {
        message: 'success',
        result: orderDetail,
      };

      return succes;
    } catch (error) {
      return error.message;
    }
  }

  update(id: number, updateOrderDetailDto: UpdateOrderDetailDto) {
    return `This action updates a #${id} orderDetail`;
  }

  remove(id: number) {
    return `This action removes a #${id} orderDetail`;
  }
}
