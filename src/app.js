//aca configuramos express
import express from 'express'
import morgan from 'morgan'
import taskRoutes from './routes/task.routes.js'
import authRoutes from './routes/auth.routes.js'

const app = express()

//middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))



//Routes
app.get('/api', (req,res) => res.json({message: "welcome"}))

//las routas de folder routes las tenemos que llamar
app.use('/api',taskRoutes)
app.use('/api',authRoutes)

app.get('/test', (req, res)=> res.send('test'))




//error handlers
app.use((err, req, res, next)=>{
    res.status(500).json({
        status: "error",
        message: err.message
    })
})

export default app