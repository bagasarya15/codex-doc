import "dotenv/config"
import express from "express"
import router from "./routes/router.js"

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(router)

// app.get('/', (req, res) => {
//     res.send('Jajal')
// })

app.listen(port, () => {
    console.log(`Server app listening on port ${port}`)
})
