// let name_1 = document.querySelector('#name-1')
// let name_2 = document.querySelector('#name-2')
// let name_3 = document.querySelector("#name-3")

// name_2.textContent = personName2
// name_3.textContent = personName1
// console.log(personName1)

// Function to fetch game data
const game = async () => {
  try {
    URL = 'http://localhost:3000/api/v1/game'
    fetch(URL, {
      method: 'POST',
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    // name_1.textContent = data.game.person1
    // name_2.textContent = data.game.person2
  } catch (error) {
    console.error('Error fetching game data:', error)
  }
}
game()
