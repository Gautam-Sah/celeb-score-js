const getGame = require('./datasender-promise')
const Game = require('../models/game')
const { StatusCodes } = require('http-status-codes')
const createGameData = async (req, res) => {
  try {
    const { personName, avgSearchPoint } = await getGame()

    if (!personName || !avgSearchPoint) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ error: 'Incomplete game data' })
    }
    const game = await Game.create({
      person: personName,
      searchScore: avgSearchPoint,
    })
    res.status(StatusCodes.CREATED).json({ game })
  } catch (error) {
    console.error('Error fetching trends data:', error)
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: 'Failed to create game data' })
  }
}

module.exports = createGameData
