const googleTrends = require('google-trends-api')
const getRandomName = require('./random-selector')

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const getGame = async () => {
  const { personName } = getRandomName() // Ensure names are returned

  await delay(1000) // Delay of 1 second

  return new Promise((resolve) => {
    googleTrends.interestOverTime(
      {
        keyword: personName,
      },
      (err, results) => {
        if (err) {
          console.error('Error fetching trends data:', err)
        }

        try {
          const data = JSON.parse(results)
          const timelineData = data.default.timelineData

          let totalSearchPoints = 0

          timelineData.forEach((dataPoint) => {
            totalSearchPoints += dataPoint.value[0]
          })

          const avgSearchPoint = totalSearchPoints / (timelineData.length || 1) // Avoid division by zero

          resolve({
            personName,
            avgSearchPoint,
          })
        } catch (err) {
          console.error('Error parsing trends data due to shitty api')
          // Send default values in case of a parsing error
          resolve({
            personName: 'error_person',
            avgSearchPoint: 1,
          })
        }
      }
    )
  })
}

module.exports = getGame
