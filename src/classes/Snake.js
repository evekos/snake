class Snake {
    constructor(params) {
        this.apple = params.apple
        this.board = params.board
        this.animationTime = params.animationTime
        this.segments = [
            new Block(7, 5),
            new Block(6, 5),
            new Block(5, 5)
        ];
        this.direction = "right"
        this.nextDirection = "right"

    }

    draw() {
        for (let i = 1; i < this.segments.length; i++) {
            if (i % 2 === 0) {
                this.segments[i].drawSquare("Blue")
            } else {
                this.segments[i].drawSquare("Yellow")

            }
        }
        this.segments[0].drawSquare('#afe800')
    }

    move() {
        let head = this.segments[0]
        let newHead;
        this.direction = this.nextDirection
        if (this.direction === "right") {
            newHead = new Block(head.col + 1, head.row)
        } else if (this.direction === "down") {
            newHead = new Block(head.col, head.row + 1)
        } else if (this.direction === "left") {
            newHead = new Block(head.col - 1, head.row)
        } else if (this.direction === "up") {
            newHead = new Block(head.col, head.row - 1)
        }
        if (this.checkCollision(newHead)) {
            this.board.gameOver()
            return;
        }
        this.segments.unshift(newHead)
        if (newHead.equal(this.apple.position)) {
            score++
            this.apple.move(this)
            if (this.animationTime > 50) {
                this.animationTime -= 5
            }
        } else {
            this.segments.pop()
        }
    }

    checkCollision(head) {
        let leftCollision = (head.col <=0)
        let topCollision = (head.row <= 0)
        let rightCollision = (head.col >= widthInBlocks - 1)
        let bottomCollision = (head.row >= heightInBlocks - 1)
        let wallCollision = leftCollision || topCollision || rightCollision || bottomCollision
        let selfCollision = false;
        for (let i = 0; i < this.segments.length; i++) {
            if (head.equal(this.segments[i])) {
                selfCollision = true;
            }
        }
        return wallCollision || selfCollision
    }

    setDirection(newDirection) {
        if (this.direction === "up" && newDirection === "down") {
            return;
        } else if (this.direction === "right" && newDirection === "left") {
            return;
        } else if (this.direction === "down" && newDirection === "up") {
            return;
        } else if (this.direction === "left" && newDirection === "right") {
            return;
        }
        this.nextDirection = newDirection;
    };

}