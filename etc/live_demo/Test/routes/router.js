import { Router } from "express";
import customerController from "../controller/customerController.js";

const router = Router()

router.get('/', (req, res) => {
    res.send('Halaman Root')
})

router.get('/customer', customerController.GetAllCustomer)
export default router