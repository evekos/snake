class Animal {
	constructor() {
		this.isLive = true
	}

}

class Cat extends Animal {
	constructor() {
		super();
		this.countOfPaw = 4
		this.countOfEyes = 2
		this.countOfNails = 14
		this.isSleep = true
		this.isRun = false
		this.isPlay = false
	}

	sleep(sleep) {
		this.isSleep = sleep
	}

	run(run) {
		if(run){
			this.isSleep=false
			this.isPlay=false
		}
		this.isRun = run
	}

	play(play) {
		this.isPlay = play
	}
}

class IllCat extends Cat{
	constructor() {
		super();
		this.countOfNails = 13
	}
}

const dashka = new Cat()
const ill = new IllCat()


