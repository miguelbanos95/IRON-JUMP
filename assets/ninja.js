class Ninja {
    constructor(ctx) {
        this.ctx = ctx;
        

        this.x = 55
        this.maxY = 540
        this.y = this.maxY

        this.width = 45
        this.height = 60


        this.vx = 0
        this.vy = 0

        this.ay = 0.75

        this.isLeft = true
        this.isJumping = false

        this.img = new Image()
        this.img.src = 'images/SPRITES/sprite-ninja.png'
        this.img.isReady = false
        this.img.onload = () => {
            this.img.isReady = true
        }
//El sprite tiene 7 frames saltando y 6 corriendo

        this.horizontalFrames = 7  
        this.verticalFrames = 4

        this.xFrame = 0
        this.yFrame = 0

        this.tick = 0
    }

    draw() {
        this.ctx.save()
//Lógica de pintar cada frame según su estado

        if (this.img.isReady) {
            
            if(this.isJumping) {

              //Jump + Left
                if(!this.isLeft) {
                    this.yFrame = 0;
              //Jump + Right      
                } else {
                    this.yFrame = 1;
                }
            } else {
               // Run + Right 
                if(!this.isLeft) {
                    this.yFrame = 2;
               //Run + Left     
                } else {
                    this.yFrame = 3;
                }
        
            }
            this.ctx.drawImage(
                this.img,
                (this.img.width * this.xFrame) / this.horizontalFrames,
                (this.img.height * this.yFrame) / this.verticalFrames,
                this.img.width / this.horizontalFrames,
                this.img.height / this.verticalFrames,
                this.x,
                this.y,
                this.width,
                this.height
            )
            
        }

        this.tick++
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
        if (this.tick % 5 === 0) {
            this.xFrame++
            //Movimiento de Saltar
            if (this.isJumping && this.xFrame >= this.horizontalFrames) {
                this.xFrame = 0
            }
            //Al tener 6frames en vez de 7 hay que restarle 1 a this.horizontalFrames
            //Movimiento de Correr
            if(!this.isJumping && this.xFrame >= this.horizontalFrames - 1){
                this.xFrame = 0
            }
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
            //cambia de salto a correr if(left){
                //pinta el vertical
           // }
        }
    }
    //lógica del salto
    jump() {
        if (!this.isJumping) {
            this.isLeft = !this.isLeft;
            this.vx = 10.3;
            this.vy = -14.2;
            this.isJumping = true;
        }
    }
    //colisiones con obstáculos de las paredes
    collidesWith(obstacle) {
        if (
            this.x < obstacle.x + obstacle.width &&
            this.x + this.width > obstacle.x  &&
            this.y < obstacle.y + obstacle.height && 
            this.y + this.height >= obstacle.y 
        ) {
            return true;
        }
        return false
    }
    //colisiones con los enemigos
    collidesWith(enemy) {
        if (
            this.x < enemy.x + enemy.width  &&
            this.x + this.width > enemy.x  &&
            this.y < enemy.y + enemy.height &&
            this.y + this.height > enemy.y 
        ) {
            return true;
        }
        return false
    }
}