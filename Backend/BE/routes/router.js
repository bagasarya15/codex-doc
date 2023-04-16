import {Router} from "express"
import userController from "../controller/userController.js"
import categoryProductController from "../controller/categoryProductController.js"
import productController from "../controller/productController.js"

const router = Router()

router.get("/",(req, res)=>{
    res.send("Hello Bagas")
})

//Route User
router.get('/user', userController.GetUsers)
router.get('/user/:id', userController.GetUsersById)
router.post('/user', userController.CreateUser)
router.put('/user/:id', userController.UpdateUser)
router.delete('/user/:id', userController.DeleteUser)

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

export default router