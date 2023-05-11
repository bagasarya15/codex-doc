import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { orders } from './orders';
import { product } from './product';

export interface order_detailAttributes {
  id?: number;
  order_id?: number;
  product_id?: number;
  quantity?: number;
  createdat?: Date;
  updateat?: Date;
}

@Table({ tableName: 'order_detail', schema: 'public', timestamps: false })
export class order_detail
  extends Model<order_detailAttributes, order_detailAttributes>
  implements order_detailAttributes
{
  @Column({
    primaryKey: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal("nextval('order_detail_id_seq'::regclass)"),
  })
  @Index({ name: 'order_detail_pkey', using: 'btree', unique: true })
  id?: number;

  @ForeignKey(() => orders)
  @Column({ allowNull: true, type: DataType.INTEGER })
  order_id?: number;

  @ForeignKey(() => product)
  @Column({ allowNull: true, type: DataType.INTEGER })
  product_id?: number;

  @Column({ allowNull: true, type: DataType.INTEGER })
  quantity?: number;

  @Column({
    allowNull: true,
    type: DataType.DATE(6),
    defaultValue: Sequelize.literal('now()'),
  })
  createdat?: Date;

  @Column({
    allowNull: true,
    type: DataType.DATE(6),
    defaultValue: Sequelize.literal('now()'),
  })
  updateat?: Date;

  @BelongsTo(() => orders)
  order?: orders;

  @BelongsTo(() => product)
  product?: product;
}
