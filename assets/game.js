const OBSTACLES_FRAMES = 120

class Game {
    constructor(ctx) {
        this.ctx = ctx;

        this.city = new City(ctx);
        this.ninja = new Ninja(ctx);

        this.ninjaSound = new Audio('sounds/jump sound.mp3')
        this.fallSound = new Audio('sounds/falling sound.mp3')
        // this.introMusic = new Audio('sounds/introMusic.mp3')
        

        this.intervalId = undefined
        this.obstacles = []

        this.enemies = []
        this.scoreTop = new Score(ctx);

        this.isGameOver = false
        this.obstaclesFramesCount = 0

        this.score = 0
    }


    startGame() {
        if (!this.intervalId) {
            this.intervalId = setInterval(() => {

                if (this.obstaclesFramesCount > 20) {
                    let OBSTACLES_FRAMES_RIGHT = Math.floor(Math.random() * (220 - 100)) + 100;
                
                    if (Math.floor(Math.random() * 250) === 3) {
                        this.addObstacle()
                    }

                    if (this.obstaclesFramesCount % OBSTACLES_FRAMES_RIGHT === 0) {
                        this.addObstacle2()
                        this.obstaclesFramesCount = 0
                    }

                    if (this.obstaclesFramesCount % OBSTACLES_FRAMES === 0) {
                        this.addEnemy()
                        this.obstaclesFramesCount = 0
                    }
                }

                this.score++

                //clear
                this.clear()

                //move
                this.move()

                //draw
                this.draw()


                this.checkCollissions()
                this.obstaclesFramesCount++


            }, 1000 / 60)
        }
        // this.musicGame.play()
    }

    clear() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
        const canvasHeight = this.ctx.canvas.height;
        this.obstacles = this.obstacles.filter((obstacle) => obstacle.y < canvasHeight)
        this.enemies = this.enemies.filter(enemy => enemy.y < canvasHeight)
    }

    draw() {
        this.city.draw()
        this.enemies.forEach(enemy => enemy.draw())
        this.obstacles.forEach(obstacle => obstacle.draw())
        this.ninja.draw()
        this.scoreTop.draw(this.score)
    }

    move() {
        this.city.move()
        this.enemies.forEach(enemy => enemy.move())
        this.obstacles.forEach(obstacle => obstacle.move())
        this.ninja.move()

    }

    pressScreen() {

        if (!this.isGameOver) {
            this.ninja.jump()
            this.ninjaSound.currentTime = 0
            this.ninjaSound.play()
        }

    }

    addObstacle() {
        this.obstacles.push(
            new Obstacle(this.ctx, 0, 'left')

        )
    }
    addObstacle2() {
        this.obstacles.push(
            new Obstacle(this.ctx, 0, 'right')
        )
    }
    addEnemy() {

        const max = this.ctx.canvas.width - 100
        const x = Math.floor(Math.random() * (max - 60) + 60)
        this.enemies.push(
            new Enemy(this.ctx, x, 0)
        )
    }
    checkCollissions() {
        const obstacleCollision = this.obstacles.some(obstacle => this.ninja.collidesWith(obstacle)) || this.enemies.some(enemy => this.ninja.collidesWith(enemy)) 


        if (obstacleCollision) {
            this.gameOver()
            this.fallSound.play()
            this.ninjaSound.muted = true


        }
    }
    gameOver() {

        clearInterval(this.intervalId)

        this.ctx.save()
        document.getElementById('game-over').style.display = 'flex';
        this.isGameOver = true;

        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.7)'
        this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)

        const score = document.getElementById('score') 
        score.innerHTML = `${(this.score / 10).toFixed(1)}m`

        // this.musicGame.pause()
        // this.musicGame.currentTime = 0

        this.ctx.restore()
    }

}