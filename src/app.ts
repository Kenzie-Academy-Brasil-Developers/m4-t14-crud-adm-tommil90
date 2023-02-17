import "express-async-errors"
import express, { Application } from 'express'
import { errorHandler } from './error'
import { userRouter } from "./routes/users.routes"


const app: Application = express()
app.use(express.json())

app.use("/users", userRouter)




app.use(errorHandler)

export default app