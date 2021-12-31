class Enemy {
    constructor(ctx, x, y) {
        this.ctx = ctx
        this.x = x
        this.y = y

        this.width = 50
        this.height = 50

        this.vy = 3.5

        this.img = new Image()
        this.img.src = 'images/SPRITES/plat_bat_spritesheet.png'
        this.img.isReady = false
        this.img.onload = () => {
            this.img.isReady = true
        }
        this.horizontalFrames = 3
        this.verticalFrames = 1

        this.xFrame = 0
        this.yFrame = 0

        this.tick = 0
    }
    draw() {
        if (this.img.isReady) {

            this.ctx.drawImage(
                this.img,
                (this.img.width * this.xFrame) / this.horizontalFrames,
                (this.img.height * this.yFrame) / this.verticalFrames,
                this.img.width / this.horizontalFrames,
                this.img.height * this.verticalFrames,
                this.x,
                this.y,
                50,
                50
            )
        }

        this.tick++
    }
    move() {
        this.y += this.vy
        if (this.tick % 10 === 0) {
            this.xFrame++

            if (this.xFrame >= this.horizontalFrames) {
                this.xFrame = 0
            }
        }
    }

}