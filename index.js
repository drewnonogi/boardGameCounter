let playersList = document.querySelector('ol')
let counterOfPlayers = 0

// Hamburger functionality
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.sidebar');
const hamburgerClick = () => {
  hamburger.classList.toggle('hamburger--active');
  nav.classList.toggle('sidebar--active');
}
hamburger.addEventListener('click', hamburgerClick);

// deleting player
document.addEventListener('dblclick', (event) => {
  if (event.target.closest(".DeleteButton") !== null) {
    event.target.closest("li").remove();
  }
})

// Adding & subtract
document.addEventListener('click', (event) => {
  if (event.target.closest(".AddValue") !== null) {
    calculating(event, "+")
  } else if (event.target.closest(".SubtractValue") !== null) {
    calculating(event, "-")
  }
})
const calculating = (event, sign) => {
  let clickedPlayer = event.target.closest(".Player");
  let calculationValue = clickedPlayer.getElementsByClassName("CalculationValue")[0].value
  let currentResult = clickedPlayer.getElementsByClassName("Result")[0]
  if (sign == "+") {
    currentResult.value = Number(currentResult.value) + Math.abs(Number(calculationValue))
  } else if (sign == "-") {
  currentResult.value = Number(currentResult.value) - Math.abs(Number(calculationValue))
  }
}

// Locking winning condition value
const conditionField = document.getElementById('conditionField')
const saveCondition = document.getElementById('saveCondition')
saveCondition.addEventListener('dblclick', () => {
  conditionField.toggleAttribute('readonly')
  saveCondition.innerText = saveCondition.innerText == "Lock condition" ? "Unlock condition" : "Lock condition"
})

// Adding new player
const addingPlayer = () => {
  counterOfPlayers++
  const playerSchemat = document.getElementById('playersContainerHidden').cloneNode(true)
  const createdPlayer = document.createElement('li')
  playerSchemat.setAttribute('id', `${counterOfPlayers}`)
  createdPlayer.appendChild(playerSchemat)
  playersList.appendChild(createdPlayer)
  // const delButton=document.querySelector('deleteButton')

}
const addPlayer = document.getElementById("addPlayer")
addPlayer.addEventListener('click', addingPlayer)