// module importing starting point
const express = require('express')
const {register,login} = require('../controllers/userController')
// module importing ending point
const Router = express.Router()

Router.post('/register',register)
Router.post('/login',login)

module.exports = Router;