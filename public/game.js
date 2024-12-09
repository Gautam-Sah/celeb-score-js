let name_1 = document.querySelector("#name-1")
let name_2 = document.querySelector("#name-2")
let name_3 = document.querySelector("#name-3")
let score_1 = document.querySelector(".score-1")
let score_2 = document.querySelector(".score-2")
let changes = document.querySelector(".change")
let Right = document.querySelector(".right")
let Left = document.querySelector(".left")
let score2 = 0
let person_2
// Function to fetch game data
async function Game() {
  try {
    URL = "http://localhost:3000/api/v1/game"
    const response = await fetch(URL, {
      method: "POST",
    })
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    console.log("Fetched Game Data:", data)
    //const score1 = 100
    score2 = Math.round(data.game.searchScore * 1000) / 1000
    console.log(score2)
    // const person_1 = "Jesus"
    person_2 = data.game.person
    // name_1.textContent = person_1
    // name_2.textContent = person_2
    // name_3.textContent = person_1
    // const picture = () => {
    //   Left.style.backgroundImage = `url("./images/${person_1}.jpeg")`
    //   Right.style.backgroundImage = `url("./images/${person_2}.jpeg")`
    // }
    // picture()
    // const more = score1 > score2 ? score1 : score2
    // const less = score1 > score2 ? score2 : score1
    // const value = score2
    // check1 = () => {
    //   const newP = document.createElement("p")
    //   newP.className = "score-2"
    //   newP.innerHTML = `${score2}
    //   <br>
    //   <span class="desc">score out of 100
    //   </span>` // Use innerHTML for HTML content
    //   changes.replaceWith(newP) // Replace the 'results' element with the new paragraph
    //   setTimeout(() => {
    //     if (more == value) {
    //       console.log("win")
    //       picture()`<span id="name-1">"${person_1}"</span><br />
    //       <span class="has">has</span><br />
    //       <span class="score-1">${score1}</span>
    //       <br />score out of100
    //       <br />
    //     </p>`
    //       Game()
    //       Right.style.backgroundImage = `url("./images/${person_2}.jpeg")``<p>
    //       <span id="name-2">"${person_2}"</span><br />
    //       <span class="has">has</span>
    //     </p>
    //     <div class="result">
    //       <div class="change">
    //         <button class="bn16" onclick="check1()">more</button><br />
    //         <button class="bn16" onclick="check2()">less</button>
    //         <p class="desc">
    //           score than<br />
    //           <span id="name-3">"${person_1}"</span>
    //         </p>
    //       </div>
    //     </div>`
    //     } else {
    //       console.log("lose")
    //       window.location.href = "/lastpage.html"
    //     }
    //   }, 3000)
    // }
    // check2 = () => {
    //   const newP = document.createElement("p")
    //   newP.className = "score-2"
    //   newP.innerHTML = `${score2}
    //   <br>
    //   <span class="desc">score out of 100
    //   </span>` // Use innerHTML for HTML content
    //   changes.replaceWith(newP) // Replace the 'results' element with the new paragraph
    //   setTimeout(() => {
    //     if (less == value) {
    //       console.log("win")

    //       Left.style.backgroundImage = `url("./images/${person_2}.jpeg")`
    //       Game()`<p>
    //       <span id="name-1">"${person_1}"</span><br />
    //       <span class="has">has</span><br />
    //       <span class="score-1">${score1}</span>
    //       <br />score out of100
    //       <br />
    //     </p>`
    //       Right.style.backgroundImage = `url("./images/${person_2}.jpeg")`` <span id="name-2">"${person_2}"</span><br />
    //       <span class="has">has</span>
    //     </p>
    //     <div class="result">
    //       <div class="change">
    //         <button class="bn16" onclick="check1()">more</button><br />
    //         <button class="bn16" onclick="check2()">less</button>
    //         <p class="desc">
    //           score than<br />
    //           <span id="name-3">"${person_1}"</span>
    //         </p>
    //       </div>
    //     </div>`
    //     } else {
    //       console.log("lose")
    //       window.location.href = "/lastpage.html"
    //     }
    //   }, 3000)
    // }
  } catch (error) {
    console.error("Error fetching game data:", error)
  }
}
Game()
console.log(score2)
console.log(person_2)
