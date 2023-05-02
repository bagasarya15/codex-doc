import {Router} from "express"
import userController from "../controller/userController.js"
import categoryProductController from "../controller/categoryProductController.js"
import productController from "../controller/productController.js"
import customerController from "../controller/customerController.js"
import ordersController from "../controller/ordersController.js"
import orderDetailController from "../controller/orderDetailController.js"

const router = Router()

//Route User
router.get('/user', userController.GetUsers)
router.get('/user/:id', userController.GetUsersById)
router.post('/user', userController.CreateUser)
router.post('/user-procedure', userController.CreateUserCustomer)
router.put('/user/:id', userController.UpdateUser)
router.delete('/user/:id', userController.DeleteUser)

//Route Customer
router.get('/customer', customerController.GetCustomer )
router.get('/customer/:id', customerController.GetCustomerById)
router.post('/customer', customerController.CreateCustomer)
router.put('/customer/:id',customerController.UpdateCustomer)
router.delete('/customer/:id', customerController.DeleteCustomer)

//Route Product-Category
router.get('/product-category',categoryProductController.GetCategoryProduct)
router.get('/product-category/:id',categoryProductController.GetCategoryProductById)
router.post('/product-category',categoryProductController.CreateCategoryProduct)
router.put('/product-category/:id',categoryProductController.UpdateCategoryProduct)
router.delete('/product-category/:id',categoryProductController.DeleteCategoryProduct)

//Route Product
router.get('/product', productController.GetProduct)
router.get('/product/:id', productController.GetProductById)
router.post('/product', productController.CreateProduct)
router.put('/product/:id', productController.UpdateProduct)
router.delete('/product/:id', productController.DeleteProduct)

//Route Orders
router.get('/orders', ordersController.GetOrders)
router.get('/orders/:id', ordersController.GetOrdersById)
router.post('/orders', ordersController.CreateOrders)
router.put('/orders/:id', ordersController.UpdateOrders)
router.delete('/orders/:id', ordersController.DeleteOrders)

//Route Order Detail
router.get('/order-detail', orderDetailController.GetOrderDetail)

export default router