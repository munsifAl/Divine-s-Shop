import express  from  'express'
import  dotenv  from  'dotenv'
import connectDB from './config/db.js'
import {notFound, errorHandler} from './middleware/errorMiddleware.js'
import productsRoutes from './routes/productRoutes.js'

dotenv.config()
connectDB()
const app = express()

app.get('/',(req,res) => {

     res.send('api running')
})

app.use('/api/products',productsRoutes)

app.use(notFound)

app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`app is running in ${process.env.NODE_ENV} mode port ${PORT} `)
)