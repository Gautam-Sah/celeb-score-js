const express = require('express')
const Router = express.Router()
const createGameData = require('../controllers/main')
Router.route('/').post(createGameData)

module.exports = Router
