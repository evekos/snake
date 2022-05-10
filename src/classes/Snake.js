class Snake {
    constructor(params) {
        this.apple = params.apple
        this.board = params.board
        this.onCatchApple = params.onCatchApple
        this.segments = [
            new Block(7, 5),
            new Block(6, 5),
            new Block(5, 5),
            new Block(4, 5),
            new Block(3, 5),
            new Block(2, 5)
        ];
        this.direction = "right"
        this.nextDirection = "right"

    }

    getTailDirection(){
        const tail = this.segments[this.segments.length - 1]
        const last = this.segments[this.segments.length - 2]

        if(last.col===tail.col){
            if(last.row<tail.row){
                return 'down'
            }else{
                return 'up'
            }
        }
        if(last.row===tail.row){
            if(last.col<tail.col){
                return 'right'
            }else{
                return 'left'
            }
        }
    }
    draw(level) {
        this.segments[0].drawImg(level, 'snake/head-'+this.direction)
        this.segments[this.segments.length - 1].drawImg(level, 'snake/tail-'+this.getTailDirection())


        for (let i = 1; i < this.segments.length - 1; i++) {
            if (i % 3 === 0) {
                this.segments[i].drawImg(level,"snake/body0")
            } else if (i % 2 === 0) {
                this.segments[i].drawImg(level, "snake/body1")
            } else {
                this.segments[i].drawImg(level,"snake/body2")
            }

        }
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
            this.onCatchApple()
            this.apple.move(this)
        } else {
            this.segments.pop()
        }
    }

    checkCollision(head) {
        let leftCollision = (head.col <= 0)
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