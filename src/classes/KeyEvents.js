class KeyEvents{
    constructor(snake) {
        const directions = {
            37: "left",
            38: 'up',
            39: 'right',
            40: 'down'

        }
        $('body').keydown(function (event) {
            let newDirection = directions[event.keyCode]
            if (newDirection !== undefined) {
                snake.setDirection(newDirection)
            }
        })
    }

}
