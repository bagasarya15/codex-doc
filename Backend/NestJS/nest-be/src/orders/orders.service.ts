import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { Sequelize } from 'sequelize-typescript';
import { order_detail, orders, users } from 'models';

@Injectable()
export class OrdersService {
  constructor(private sequelize: Sequelize) {}

  async create(createOrderDto: CreateOrderDto) {
    try {
      const order = createOrderDto;
      let user_id = 0;
      let totalproduct = 0;
      let totalprice = 0;

      order.forEach((createOrderDto) => {
        user_id = createOrderDto.user_id;
        totalprice += createOrderDto.quantity * createOrderDto.price;
        totalproduct += createOrderDto.quantity;
      });

      let object = {
        user_id: user_id,
        totalproduct: totalproduct,
        totalprice: totalprice,
      };

      const data1 = `[${JSON.stringify(object)}]`;
      const data2 = `${JSON.stringify(order)}`;

      const query = `CALL InsertOrderxDetail ('${data1}', '${data2}')`;
      const result = await this.sequelize.query(query);

      let succes = {
        message: 'Data order dan order detail berhasil ditambah',
        result: result,
      };

      return succes;
    } catch (error) {
      return error.message;
    }
  }

  async findAll() {
    try {
      const dataOrder = await orders.findAll({
        include: [
          {
            model: users,
          },
        ],
      });

      let succes = {
        message: 'success',
        result: dataOrder,
      };

      return succes;
    } catch (error) {
      error.message;
    }
  }

  async findOne(id: number) {
    try {
      const check = await orders.findByPk(id);
      if (!check) throw new Error('Order tidak ditemukan');

      const dataOrder = await orders.findOne({
        include: [
          {
            model: users,
          },
        ],
        where: { id: id },
      });

      let succes = {
        message: 'success',
        result: dataOrder,
      };

      return succes;
    } catch (error) {
      return error.message;
    }
  }

  async update(id: number, updateOrder:any) {
    try {
      const findOrder = await orders.findByPk(id);
      if (!findOrder) {
        throw new Error(`Orders id ${id} tidak ditemukan!`);
      }
    
      const findOrderDetail = await order_detail.findAll({
        where: {
          order_id: findOrder.id,
        },
      });
    
      if (!findOrderDetail) {
        throw new Error("Order Detail Kosong!");
      }
    
      // let hasil_orderDetail = updateOrder.order_detail;

      //  //FOR INI DIPAKE KALO PAKE PROCEDURE YANG updateOrder
      // for (let i = 0; i < findOrderDetail.length; i++) {
      //   hasil_orderDetail[i].id = findOrderDetail[i].id;`
      // }

      const result = await this.sequelize.query(
        "CALL orderUpdateNew(:order_id, :order_detail)",
        {
          replacements: {
            order_id: findOrder.id,
            order_detail: JSON.stringify(updateOrder)
          }
        }
      );
      
      return result

    } catch (error) {
      return error.message
    }
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
