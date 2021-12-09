class Game {
    constructor(ctx) {
        this.ctx = ctx;

        this.city = new City(ctx);

        this.intervalId = undefined
    }

    startGame() {
        if (!this.intervalId) {
            this.sound.play()

           
            this.intervalId = setInterval(() => {
                this.clear()

                this.move()

                this.draw()
               
            }, 1000 / 60)
        }
    }

    clear() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
    }

    draw() {
        this.city.draw()
    }

    move() {}

}