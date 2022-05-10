class Game {
    constructor(){
        this.keyEvents = new KeyEvents({
            newGame: this.newGame.bind(this)
        })
        this.isPlay = false

    }
    newGame(){
        if(this.isPlay){
            return
        }
        this.animationTime = 150
        this.board = new Board(this.gameOver.bind(this))
        this.apple = new Apple()
        this.isPlay = true
        this.snake = new Snake({
            board: this.board,
            apple: this.apple,
            onCatchApple:()=>{
                if (score % 2 ===0 && score > 0) {
                    this.level++
                    if (this.level >= 4) {
                        this.level = 0
                    }
                }
                if (this.animationTime > 30) {
                    this.animationTime -= 5
                }
            }
        })
        this.level = 0
        score = 0
        this.keyEvents.setSnake(this.snake)
        this.apple.move(this.snake)
        this.loop()
        this.showKeyboard()
    }

    loop() {
        ctx.clearRect(0, 0, width, height)
        if(score>=6){
            this.board.drawBg(this.level)
        }else if(score>=4){
            this.board.drawBg(this.level)
        }else if(score>=2){
            this.board.drawBg(this.level)
        }else{
            this.board.drawBg(this.level)
        }
        this.snake.draw(this.level)
        this.apple.draw(this.level)
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