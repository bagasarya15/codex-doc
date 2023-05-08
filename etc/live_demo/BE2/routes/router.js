import { Router } from "express";
import userController from "../controller/userController.js";
import productController from "../controller/productController.js";
import authController from "../controller/authController.js";
import orderController from "../controller/orderController.js";
import categoryController from "../controller/categoryController.js";

const router = Router()

router.get('/', (req, res) => {
    res.send('Halaman Root')
})

//Route Auth
router.post('/login', authController.Login)

//Router Users
router.get('/users', userController.GetAllUser)
router.post('/users-procedure', userController.InsertProcedure)
router.put('/users-procedure/:id', userController.UpdateProcedure)
router.delete('/users/:id', userController.DeleteUserCustomer)

//Router Product
router.get('/product', productController.GetProduct)
router.post('/product', productController.CreateProduct)
router.put('/product/:id', productController.UpdateProduct)
router.delete('/product/:id', productController.DeleteProduct)

router.delete('/category/:id', categoryController.DeleteCategoryProduct)

//Router Orders
router.get('/orders', orderController.GetOrders)
router.post('/orders-procedure', orderController.CreateOrderSP)

export default router