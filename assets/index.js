const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

const game = new Game(ctx)
const button = document.getElementById('start')
const imageTitle = document.getElementById('main-tittle')
const citySilhoutte = document.getElementById('city-silhouette')

button.onclick = (e) => {
  e.stopPropagation()
  console.log('gola');
  button.remove()
  imageTitle.remove()
  citySilhoutte.remove()
  

  game.startGame()
  document.addEventListener('click', (event) => {
    game.pressScreen()
  })
}
