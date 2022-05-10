class Apple {
    draw (level) {
        this.position.drawImg(level,"apple")
    }
    move (snake) {
        let randomCol = Math.floor(Math.random() * (widthInBlocks - 2)) + 1
        let randomRow = Math.floor(Math.random() * (heightInBlocks - 2)) + 1
        this.position = new Block(randomCol, randomRow)

        let isAppleOnSnake = false;
        for (let i = 0; i < snake.segments.length; i++) {
            if (this.position.equal(snake.segments[i])) {
                isAppleOnSnake = true;
            }
        }
        if(isAppleOnSnake === true){
            this.move(snake);
        }
    }
}