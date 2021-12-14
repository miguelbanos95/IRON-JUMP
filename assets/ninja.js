class Ninja {
    constructor(ctx) {
        this.ctx = ctx;

        this.x = 55
        this.maxY = 540
        this.y = this.maxY

        this.width = 35
        this.height = 45


        this.vx = 0
        this.vy = 0

        this.ay = 0.7

        this.isLeft = true
        this.isJumping = false
    }

    draw() {
        this.ctx.save()

        this.ctx.fillStyle = 'blue'
        this.ctx.fillRect(485, 0, 55, 700)
        this.ctx.fillStyle = 'blue'
        this.ctx.fillRect(0, 0, 55, 700)
        this.ctx.fillStyle = 'red'
        this.ctx.fillRect(this.x, this.y, this.width, this.height)

        this.ctx.restore()
    }
    move() {
        this.vy += this.ay
        this.y += this.vy
        if (!this.isLeft) {
            this.x += this.vx
        } else {
            this.x -= this.vx
        }

        //delimitar el ninja para que no se escape de las paredes
        if (this.x <= 55) {
            this.x = 55
        }
        if (this.x + this.width >= this.ctx.canvas.width - 55) {
            this.x = this.ctx.canvas.width - this.width - 55
        }
        if (this.y > this.maxY) {
            this.vx = 0
            this.y = this.maxY
            this.isJumping = false
        }
    }

    jump() {
        if (!this.isJumping) {
            this.isLeft = !this.isLeft;
            this.vx = 10.3;
            this.vy = -14.2;
            this.isJumping = true;
        }
    }
    collidesWith(obstacle) {
        if (
            this.x < obstacle.x + obstacle.width &&
            this.x + this.width > obstacle.x &&
            this.y < obstacle.y + obstacle.height &&
            this.y + this.height > obstacle.y
        ) {
            return true;
        }
        return false
    }
    collidesWith(enemy) {
      if (
        this.x < enemy.x + enemy.width &&
        this.x + this.width > enemy.x &&
        this.y < enemy.y + enemy.height &&
        this.y + this.height > enemy.y
      ) {
        return true;
      }
      return false
    }
}