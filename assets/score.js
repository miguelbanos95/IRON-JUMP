class Score {
    constructor(ctx){
        this.ctx = ctx
        this.x = 180;
        this.y = -50;
        this.width = 180;
        this.height = 200
        this.img = new Image()

        this.img.src = 'images/score/line-rectangle-red-11549997287pymehtcl2s-removebg-preview.png'

        this.img.isReady = false

        this.img.onload = () => {
          this.img.isReady = true
        }
    
    }
    draw(score){
        this.ctx.save()
        this.ctx.drawImage(
            this.img, this.x, this.y, this.width, this.height
        )
        this.ctx.fillStyle = 'white'
        this.ctx.textAlign = 'center'
        this.ctx.font = 'bold 30px Courier New'
        this.ctx.fillText(`${(score / 10).toFixed(1)}m`, 270, 60)

        this.ctx.restore()
    }
}