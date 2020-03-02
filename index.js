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
  if (event.target.closest('.DeleteButton') !== null) {
    event.target.closest('li').remove();
  }
})

// Adding & subtract / and check currently winning player
document.addEventListener('click', (event) => {
  if (event.target.closest('.AddValue') !== null) {
    calculating(event, '+')
  } else if (event.target.closest('.SubtractValue') !== null) {
    calculating(event, '-')
  }
})
const calculating = (event, sign) => {
  let clickedPlayer = event.target.closest('.Player');
  let calculationValue = clickedPlayer.getElementsByClassName('CalculationValue')[0].value
  let currentResult = clickedPlayer.getElementsByClassName('Result')[0]
  if (sign == '+') {
    currentResult.value = Number(currentResult.value) + Math.abs(Number(calculationValue))
  } else if (sign == '-') {
    currentResult.value = Number(currentResult.value) - Math.abs(Number(calculationValue))
  }
  winnerCheck()
}
// Checking current winner
const winnerCheck = () => {
  let allScores = document.getElementsByClassName('Result')
  let currentIndex = 0
  let highest = -Infinity
  let goal = document.getElementById('conditionField')
  let list = document.getElementById('listedPlayers')
  list.textContent=''
  for (let i = 0; i < allScores.length; i++) {
    if (goal.hasAttribute('readonly') && goal.value <= Number(allScores[i].value)){
      let temporary=allScores[i].closest('.Player')
      let name=temporary.getElementsByClassName('PlayerName')[0].value
      list.textContent+=`${name} `
    }
    if (highest < Number(allScores[i].value)) {
      highest = Number(allScores[i].value)
      currentIndex = i
    }
  }
  let winner = document.getElementsByClassName('Result')[currentIndex].closest('.Player');
  winnerName = winner.getElementsByClassName('PlayerName')[0].value
  slotForWinnerName = document.getElementById('winner')
  slotForWinnerName.value = winnerName
}


// Locking winning condition value
const conditionField = document.getElementById('conditionField')
const saveCondition = document.getElementById('saveCondition')
saveCondition.addEventListener('dblclick', () => {
  conditionField.toggleAttribute('readonly')
  saveCondition.innerText = saveCondition.innerText == 'Lock condition' ? 'Unlock condition' : 'Lock condition'
})

// Adding new player
const addingPlayer = () => {
  counterOfPlayers++
  const playerSchemat = document.getElementById('playersContainerHidden').cloneNode(true)
  const createdPlayer = document.createElement('li')
  playerSchemat.setAttribute('id', counterOfPlayers)
  createdPlayer.appendChild(playerSchemat)
  playersList.appendChild(createdPlayer)
}
const addPlayer = document.getElementById('addPlayer')
addPlayer.addEventListener('click', addingPlayer)

// Delete ALL players
const deleteAll = document.getElementById('deleteAllPlayers')
deleteAll.addEventListener('dblclick', () => {
  let allPlayers = document.getElementById('allPlayers')
  allPlayers.innerHTML = ''
})


