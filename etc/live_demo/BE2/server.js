import express from "express"
import "dotenv/config"
import router from "./routes/router.js"

const app = express()
const port = process.env.PORT

app.use(express.json()) //suport json format form
app.use(express.urlencoded({extended:true}))

app.use(router)

app.listen(port, ()=>{
    console.log(`Server run on port ${port}`);
})