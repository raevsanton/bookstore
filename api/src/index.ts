import express from 'express'
import bookRouter from './routes/book'
import { port } from './config'

const app = express()

app.use(express.json())
app.use('/', bookRouter)

app.listen(port, () => {
    console.log(`Started api service on port: ${port}`)
})