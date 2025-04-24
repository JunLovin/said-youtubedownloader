import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import morgan from 'morgan'
import { fetchApi } from './src/server/utils/utils.js'
import 'dotenv/config'

const app = express()
const PORT = process.env.PORT || 3000

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cors())

app.put('/api/get', fetchApi)

app.get('/', (req, res) => {
    res.json({ success: "Hello World" })
})

app.listen(PORT, () => {
    console.log(`El servidor está funcionando en el puerto ${PORT}`)
})