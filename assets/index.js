const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

const game = new Game(ctx)
const button = document.getElementById('start')
const imageTitle = document.getElementById('main-tittle')
const citySilhoutte = document.getElementById('city-silhouette')
const author = document.getElementById('author')


button.onclick = (e) => {
  e.stopPropagation()
  button.remove()
  imageTitle.remove()
  citySilhoutte.remove()
  author.remove()
  

  game.startGame()
  document.addEventListener('click', (event) => {
    game.pressScreen()
  })
}
