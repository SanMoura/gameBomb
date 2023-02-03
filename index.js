// Global scope
let ARR = []
let POINTS = 0
let LEVEL = document.getElementById(`level`).value

function choose(id) {
  if (ARR.find(e => e == id)){
    endgame()
  }else{
    addPoints()
  }
}

function addPoints() {
  POINTS++
  document.getElementById(`points`).innerHTML = `PONTOS: ${POINTS}`
  console.log(`pontos adicionados`)
}
function endgame() {
  console.log(`endgame`)
}

function startGame() {
  LEVEL = document.getElementById(`level`).value
  for (let index = 1; index < 26; index++) {
    const divCoins = document.getElementById(index)
    divCoins.innerHTML = `
      <img 
        style="width:1em; 
        margin-top:0.2em;" 
        src="https://static.vecteezy.com/system/resources/previews/012/598/212/original/currency-coin-cartoon-png.png"
      />`  
  }

  let arr = []
  for (let i = 0; i < LEVEL; i++) {
    let randomNumber = getRandomNumber()
    while (arr.find(e => e === randomNumber)) {
      randomNumber = getRandomNumber()
    }
    arr.push(randomNumber)
  }
  
  arr.forEach(element => {
  const div = document.getElementById(element)
  div.innerHTML = `
    <img 
      style="width:1em; 
      margin-top:0.2em;
      margin-left:0.2em;" 
      src="https://www.freeiconspng.com/thumbs/bomb-png/high-resolution-bomb-png-clipart-2.png"
    />`
  });
  ARR = arr
}

function getRandomNumber(){
  let random = Math.floor(Math.random() * 25)
  random = random == 0 ? random + 1 : random
  return random
}