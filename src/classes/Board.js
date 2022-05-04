class Board {
    constructor() {
        this.intervalId = null
    }

    drawBorder() {
        ctx.fillStyle = '#fff'
        ctx.fillRect(0, 0, width, blockSize)
        ctx.fillRect(0, height - blockSize, width, blockSize)
        ctx.fillRect(0, 0, blockSize, height)
        ctx.fillRect(width - blockSize, 0, blockSize, height)
    }
    drawScore() {
        ctx.font = '30px IMPACT'
        ctx.fillStyle = "#fff"
        ctx.textAlign = "left"
        ctx.textBaseline = 'top'
        ctx.fillText("Рахунок: " + score, blockSize, blockSize)
    }

    gameOver() {
        if (this.intervalId !== null) {
            clearInterval(this.intervalId)
        }

        ctx.font = "60px IMPACT"
        ctx.fillStyle = "#FFF"
        ctx.textAlign = "center"
        ctx.textBaseline = "middle"
        ctx.fillText("Кінець гри", width / 2, height / 2)
    }
}
