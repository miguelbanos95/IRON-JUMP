const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

const button = document.getElementById('start')
const imageTitle = document.getElementById('main-tittle')
const citySilhoutte = document.getElementById('city-silhouette')
const author = document.getElementById('author')
const mouse = document.getElementById('mouse') 
const controls = document.getElementById('controls')
const restartButton = document.getElementsByClassName('restart')
const gameOver = document.getElementById('game-over')
const musicGame = new Audio('sounds/musicGame.mp3')


const startGame = (e) => {
  musicGame.currentTime = 0
  gameOver.style.display = 'none'
  e.stopPropagation()
  const game = new Game(ctx)
  musicGame.play()
  button.remove()
  imageTitle.remove()
  citySilhoutte.remove()
  author.remove()
  mouse.remove()
  controls.remove()
  game.startGame()
  document.addEventListener('click', (event) => {
    game.pressScreen()
  })
}

button.onclick = startGame;

restartButton[0].onclick = startGame


