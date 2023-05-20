import { Router } from "express";
import orderController from "../controller/orderController.js";

const router = Router()

router.post('/orders', orderController.OrderSP)

export default router