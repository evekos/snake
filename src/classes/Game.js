class Game {
    constructor(){
        this.animationTime = 200
        this.board = new Board()
        this.apple = new Apple()
        this.snake = new Snake({
            board: this.board,
            apple: this.apple,
            animationTime: this.animationTime
        })
        this.apple.move(this.snake)
        this.keyEvents = new KeyEvents(this.snake)


    }

    loop() {
        ctx.clearRect(0, 0, width, height)
        this.snake.draw()
        this.apple.draw()
        this.board.drawBorder()
        this.board.drawScore()
        this.snake.move()
        setTimeout(()=>{
            this.loop()
        }, this.animationTime)
    }
}