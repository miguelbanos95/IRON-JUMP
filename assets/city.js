class City {
    constructor(ctx) {
        this.ctx = ctx;
        this.y = 0;
        this.x = 0;

        this.width = this.ctx.canvas.width
        this.height = this.ctx.canvas.height

        this.img = new Image();
        this.img.src = "images/4016cd0da5dd95f171edbdb6dbd83806.gif"
        this.img.isReady = false
        this.img.onload = () => {
            this.img.isReady = true

        }

    }

    draw() {
        if (this.img.isReady) {
            this.ctx.drawImage(
                this.img,
                this.x,
                this.y,
                this.width,
                this.height
            )
        }

    }
}