import {Sequelize} from 'sequelize'

const sequelize = new Sequelize (
  process.env.DB_NAME,
  process.env.DB_USERS,
  process.env.DB_PASS,
  {
    dialect : "postgres"
  }
) 

import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _customer from  "./customer.js";
import _order_detail from  "./order_detail.js";
import _orders from  "./orders.js";
import _product from  "./product.js";
import _product_category from  "./product_category.js";
import _selectview from  "./selectview.js";
import _users from  "./users.js";

function initModels(sequelize) {
  const customer = _customer.init(sequelize, DataTypes);
  const order_detail = _order_detail.init(sequelize, DataTypes);
  const orders = _orders.init(sequelize, DataTypes);
  const product = _product.init(sequelize, DataTypes);
  const product_category = _product_category.init(sequelize, DataTypes);
  const selectview = _selectview.init(sequelize, DataTypes);
  const users = _users.init(sequelize, DataTypes);

  order_detail.belongsTo(orders, { as: "order", foreignKey: "order_id"});
  orders.hasMany(order_detail, { as: "order_details", foreignKey: "order_id"});
  order_detail.belongsTo(product, { as: "product", foreignKey: "product_id"});
  product.hasMany(order_detail, { as: "order_details", foreignKey: "product_id"});
  product.belongsTo(product_category, { as: "category", foreignKey: "category_id"});
  product_category.hasMany(product, { as: "products", foreignKey: "category_id"});
  customer.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(customer, { as: "customers", foreignKey: "user_id"});
  orders.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(orders, { as: "orders", foreignKey: "user_id"});

  return {
    customer,
    order_detail,
    orders,
    product,
    product_category,
    selectview,
    users,
  };
}

const models = initModels(sequelize)
export default models;
export {sequelize}