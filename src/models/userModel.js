const connection = require('../database/connection');

const createUser = async (name, email, password) => {
  const [user] = await connection.execute(
    'INSERT INTO app_expenses.users (name, email, password) VALUES(?, ?, ?)',
    [name, email, password]
  )
  return user
}

const findUser = async (email, password) => {
  const foundUser = await connection.execute(
    'SELECT * FROM app_expenses.users WHERE email = ? AND password = ?', [email, password]
  )
  return foundUser
}

module.exports = {
  createUser,
  findUser
}
