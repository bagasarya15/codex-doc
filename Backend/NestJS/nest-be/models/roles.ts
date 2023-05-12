import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
  HasMany,
} from 'sequelize-typescript';
import { users } from './users';

export interface rolesAttributes {
  id?: number;
  name?: string;
  description?: string;
}

@Table({ tableName: 'roles', schema: 'public', timestamps: false })
export class roles
  extends Model<rolesAttributes, rolesAttributes>
  implements rolesAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal("nextval('roles_id_seq'::regclass)"),
  })
  @Index({ name: 'roles_pkey', using: 'btree', unique: true })
  id?: number;

  @Column({ allowNull: true, type: DataType.STRING(100) })
  name?: string;

  @Column({ allowNull: true, type: DataType.STRING(100) })
  description?: string;

  @HasMany(() => users, { sourceKey: 'id' })
  users?: users[];
}
