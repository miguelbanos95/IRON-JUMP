const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const game = new Game(ctx)
const button = document.getElementById('start')

button.onclick = () => {
  button.remove()

  game.start()
}