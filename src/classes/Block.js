class Block extends Draw{
    constructor(col, row) {
        super()
        this.col = col
        this.row = row
    }
    drawSquare (color) {
        let x = this.col * blockSize
        let y = this.row * blockSize
        ctx.fillStyle = color
        ctx.fillRect(x, y, blockSize, blockSize)
    }

    drawCircle (color) {
        let centerX = this.col * blockSize + blockSize / 2
        let centerY = this.row * blockSize + blockSize / 2
        ctx.fillStyle = color
        this.circle(centerX, centerY, blockSize / 2, true)
    }
    drawImg(name)    {
        let centerX = this.col * blockSize
        let centerY = this.row * blockSize
        const baseImage = new Image();

        baseImage.src = 'src/img/default/'+name+'.png';
        ctx.drawImage(baseImage, centerX, centerY);
    }

    equal (otherBlock) {
        return this.col === otherBlock.col && this.row === otherBlock.row
    }
}