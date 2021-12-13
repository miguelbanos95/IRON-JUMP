class Score {
    constructor(ctx){
        this.ctx = ctx
    }
    draw(score){
        this.ctx.save()

        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.7)'
        this.ctx.fillRect(195, 0, 150, 50)

        this.ctx.fillStyle = 'white'
        this.ctx.textAlign = 'center'
        this.ctx.font = 'bold 32px Courier New'
        this.ctx.fillText(`${(score / 10).toFixed(1)}m`, 270, 30)

        this.ctx.restore()
    }
}