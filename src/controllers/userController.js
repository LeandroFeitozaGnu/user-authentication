require('dotenv').config();
const userRouter = require('express').Router();
const Model = require('../models/userModel');

const jwt = require('jsonwebtoken')

const secret = process.env.SECRET
const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
}

userRouter.get('/add', (req, res) => {
  res.status(200).json({mess: 'ok'})
});

userRouter.post('/add', async (req, res) => {
  const { name, email, password } = req.body
  const result = await Model.createUser(name, email, password)
  console.log(result.insertId)

  res.status(201).json({mess: 'osso'})
});

userRouter.post('/', async (req, res) => {
  const { email, password } = req.body;
  const [[result]] = await Model.findUser(email, password)

  console.log(result.id)
  // if (!!result) return res.status(500).json({mess: 'acesso negado'})

  const user = {
    id: result.id,
    name: result.name,
    email: result.email
  }
  console.log(user)

  const token = jwt.sign({data: user}, secret, jwtConfig)
  return res.status(200).json({token})
  
});

module.exports = userRouter;
