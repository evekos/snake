class Game {
    constructor(){
        this.keyEvents = new KeyEvents()
        this.isPlay = false

    }
    newGame(){
        this.animationTime = 200
        this.board = new Board(this.gameOver.bind(this))
        this.apple = new Apple()
        this.isPlay = true
        this.snake = new Snake({
            board: this.board,
            apple: this.apple,
            animationTime: this.animationTime
        })
        score = 0
        this.keyEvents.setSnake(this.snake)
        this.apple.move(this.snake)
        this.loop()
        this.showKeyboard()
    }

    loop() {
        ctx.clearRect(0, 0, width, height)
        this.snake.draw()
        this.apple.draw()
        this.board.drawBorder()
        this.board.drawScore()
        this.snake.move()
        setTimeout(()=>{
                if(this.isPlay===true){
                    this.loop()
                }
        }, this.animationTime)
    }
    showKeyboard(){
        $('#keyboard').show()
        $('#start').hide()
    }
    hideKeyboard(){
        $('#keyboard').hide()
        $('#start').show()
    }
    gameOver(){
        this.isPlay = false
        this.hideKeyboard()
    }
}