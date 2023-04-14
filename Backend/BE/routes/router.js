import {Router} from "express"
import userController from "../controller/userController.js"

const router = Router()

router.get("/",(req, res)=>{
    res.send("Hello Bagas")
})

router.get("/user", userController.GetUsers)
router.get("/user/:id", userController.GetUsersById)
router.post("/user", userController.CreateUser)
router.patch("/user/:id", userController.UpdateUser)
router.delete("/user/:id", userController.DeleteUser)

export default router