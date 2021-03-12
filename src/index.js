const express = require('express')
require('express-async-errors');
require('dotenv').config();

const userRouter = require('./controllers/userController')

const app = express()
const PORT = 3333

app.use(express.json())

app.get('/', (req, res) => res.send('Hello World!'))

app.use('/users', userRouter)

app.use('/login', userRouter);

app.listen(PORT, () => console.log(`Rodando na porta --> ${PORT}!`))