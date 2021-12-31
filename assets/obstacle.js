class Obstacle {
    constructor(ctx, y, position = 'left'){
        this.ctx = ctx

        this.x = (position === 'left') ? 30 : 460
        this.y = y

        this.vy = 3.2
        //- this.height

        this.img = new Image()
        this.isBalcony = Math.random() > 0.5 
        this.img.src = this.isBalcony ? "images/SPRITES/obstacles/balcony.png" : 'images/SPRITES/obstacles/air conditioner.png'

        this.img.isReady = false
        this.img.onload = () => {
            this.img.isReady = true
        }

        this.width = 50
        this.height = 55

        this.horizontalFrames = this.isBalcony ? 1 : 2
        this.verticalFrames = 1

        this.xFrame = 0
        this.yFrame = 0

        this.tick = 0
    }
    

    draw(){
        this.ctx.save()
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
        this.ctx.restore()
    }

    move(){
        this.y += this.vy
        if (this.tick % 10 === 0) {
            this.xFrame++

            if (this.xFrame >= this.horizontalFrames) {
                this.xFrame = 0
            }
        }
    }
} 