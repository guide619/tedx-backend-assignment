import * as express from 'express'
import router from './routes/route'
import {json} from 'body-parser'

const port = process.env.PORT || 3000
const app = express()
app.use(json())
app.use(router)
app.use((err : Error , req :express.Request ,res : express.Response , next : express.NextFunction) =>{
    res.status(500).json({message : err.message})
})
app.listen(port , ()=>
{
    console.log("Start to listen port " + port)
})