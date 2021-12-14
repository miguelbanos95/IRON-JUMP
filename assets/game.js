const OBSTACLES_FRAMES = 120

class Game {
    constructor(ctx) {
        this.ctx = ctx;

        //this.city = new City(ctx);
        this.ninja = new Ninja(ctx);

        this.ninjaSound = new Audio('sounds/yt1s.com - Naruto jumping sound effect.mp3')

        this.intervalId = undefined
        this.obstacles = []
        this.enemies = []
        this.scoreTop = new Score(ctx);

        this.obstaclesFramesCount = 0

        this.score = 0
    }

    startGame() {
        if (!this.intervalId) {
            this.intervalId = setInterval(() => {

                let OBSTACLES_FRAMES_RIGHT = Math.floor(Math.random() * (150 - 100)) + 100


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




                //clear
                this.clear()

                //move
                this.move()

                //draw
                this.draw()

                this.score++

                this.checkCollissions()
                this.obstaclesFramesCount++


            }, 1000 / 60)
        }
    }

    clear() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
        const canvasHeight = this.ctx.canvas.height;
        this.obstacles = this.obstacles.filter((obstacle) => obstacle.y < canvasHeight)
        this.enemies = this.enemies.filter(enemy => enemy.y < canvasHeight)
    }

    draw() {
        //this.city.draw()
        console.log(this.enemies.length)
        this.enemies.forEach(enemy => enemy.draw())
        this.obstacles.forEach(obstacle => obstacle.draw());
        this.ninja.draw()
        this.scoreTop.draw(this.score)
    }

    move() {
        this.enemies.forEach(enemy => enemy.move())
        this.obstacles.forEach(obstacle => obstacle.move());
        this.ninja.move()

    }

    pressScreen() {
        this.ninja.jump()
        this.ninjaSound.currentTime = 0
        this.ninjaSound.play()
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
        console.log("addEnemy")
        const max = this.ctx.canvas.width - 100
        const x = Math.floor(Math.random() * (max - 60) + 60)
        this.enemies.push(
            new Enemy(this.ctx, x, 0)
        )
    }
    checkCollissions() {
        const condition = this.obstacles.some(obstacle => this.ninja.collidesWith(obstacle)) || this.enemies.some(enemy => this.ninja.collidesWith(enemy))


        if (condition) {
            this.gameOver()
        }
    }
    gameOver() {
        clearInterval(this.intervalId)

        this.ctx.save()

        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.7)'
        this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)

        this.ctx.fillStyle = 'white'
        this.ctx.textAlign = 'center'
        this.ctx.font = 'bold 32px sans-serif'
        this.ctx.fillText('Game Over', this.ctx.canvas.width / 2, this.ctx.canvas.height / 2)

        this.ctx.restore()
    }
    
}