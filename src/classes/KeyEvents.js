class KeyEvents {
    constructor({newGame}) {
        const directions = {
            37: "left",
            38: 'up',
            39: 'right',
            40: 'down'

        }
        $('body').keydown((event) => {
            let newDirection = directions[event.keyCode]
            if (newDirection !== undefined) {
                this.setDirection(newDirection)
            }
            if(event.keyCode===32){
                newGame()
            }
        })
        for (const dir of ['left', 'right', 'up', 'down']) {
            document.getElementById(dir).addEventListener('click', () => {
                this.setDirection(dir)
            })
            document.getElementById(dir).addEventListener('touchstart', () => {
                this.setDirection(dir)
            })
        }

    }

    setDirection(d) {
        this.snake.setDirection(d)
    }

    setSnake(snake) {
        this.snake = snake
    }
}
