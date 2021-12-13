class Obstacle {
    constructor(ctx, y, position = 'left'){
        this.ctx = ctx

        this.x = (position === 'left') ? 55 : 465
        this.y = y
        //- this.height

        this.width = 20
        this.height = 20

        this.vy = 3
    }

    draw(){
        this.ctx.save()
        this.ctx.fillStyle = 'red'
        this.ctx.fillRect(this.x, this.y, this.width, this.height)
        this.ctx.restore()
    }

    move(){
        this.y += this.vy
    }
} 