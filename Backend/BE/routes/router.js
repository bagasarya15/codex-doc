import {Router} from "express"
import userController from "../controller/userController.js"
import categoryProductController from "../controller/categoryProductController.js"
import productController from "../controller/productController.js"
import customerController from "../controller/customerController.js"

const router = Router()

router.get("/",(req, res)=>{
    res.send("Hello Bagas")
})

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

//Route Order

//Route Order Detail
export default router