import { Router } from "express";
import userController from "../controller/userController.js";
import productController from "../controller/productController.js";

const router = Router()

router.get('/', (req, res) => {
    res.send('Halaman Root')
})

router.post('/user', userController.CreateUser)
router.put('/product-category/:id', productController.updateCategory)
router.post('/product', productController.createProduk)
router.put('/product/:id', productController.updateProduk)
export default router