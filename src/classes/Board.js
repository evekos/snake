class Board {
    constructor(onGameOver) {
       this.onGameOver=onGameOver
    }
    drawBg(level){
        const baseImage = new Image();
        baseImage.src = 'src/img/default/level'+level+'/bg.jpg';
        ctx.drawImage(baseImage, 0, 0);
    }
    drawBorder() {
        ctx.fillStyle = "rgb(255,255,255)"
        ctx.fillRect(0, 0, width, blockSize)
        ctx.fillRect(0, height - blockSize, width, blockSize)
        ctx.fillRect(0, 0, blockSize, height)
        ctx.fillRect(width - blockSize, 0, blockSize, height)
    }
    drawScore() {
        ctx.font = '30px IMPACT'
        ctx.fillStyle = "rgb(255,255,255)"
        ctx.textAlign = "left"
        ctx.textBaseline = 'top'
        ctx.fillText("Рахунок: " + score, blockSize, blockSize)
    }

    gameOver() {
        ctx.font = "60px IMPACT"
        ctx.fillStyle = "rgb(255,255,255)"
        ctx.textAlign = "center"
        ctx.textBaseline = "middle"
        ctx.fillText("Кінець гри", width / 2, height / 2)
        this.onGameOver()
    }
}
