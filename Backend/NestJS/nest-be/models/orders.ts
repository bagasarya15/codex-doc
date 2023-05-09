import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from 'sequelize-typescript';

export interface ordersAttributes {
  id?: number;
  user_id?: number;
  totalproduct?: number;
  totalprice?: string;
  createdat?: Date;
  updateat?: Date;
}

@Table({ tableName: 'orders', schema: 'public', timestamps: false })
export class orders
  extends Model<ordersAttributes, ordersAttributes>
  implements ordersAttributes
{
  @Column({
    primaryKey: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal("nextval('orders_id_seq'::regclass)"),
  })
  @Index({ name: 'orders_pkey', using: 'btree', unique: true })
  id?: number;

  @Column({ allowNull: true, type: DataType.INTEGER })
  user_id?: number;

  @Column({ allowNull: true, type: DataType.INTEGER })
  totalproduct?: number;

  @Column({ allowNull: true, type: DataType.DECIMAL })
  totalprice?: string;

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
}
