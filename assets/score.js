class Score {
    constructor(ctx){
        this.ctx = ctx
        this.x = -4;
        this.y = -4;
        this.width = 545;
        this.height = 60
        this.img = new Image()

        this.img.src = 'images/score/36c7bb0d73c4cf786cc6a8b9f17db36c-removebg-preview.png'

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
        // this.ctx.fillStyle = 'rgba(0, 0, 0, 0.7)'
        // this.ctx.fillRect(195, 0, 150, 50)

        this.ctx.fillStyle = 'white'
        this.ctx.textAlign = 'center'
        this.ctx.font = 'bold 32px Courier New'
        this.ctx.fillText(`${(score / 10).toFixed(1)}m`, 270, 30)

        this.ctx.restore()
    }
}