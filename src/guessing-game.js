class GuessingGame {
	constructor(number) {
		this.number = number;
	}
	setRange(min, max) {
		this.min = min;
		this.max = max;
	}

	guess() {
		this.mid = Math.round((this.max + this.min) / 2);

		let x = Math.floor(Math.random() * (this.max - this.min) + this.min);

		if (this.mid < this.number) {
			this.greater();
		} else if (this.mid > this.number) {
			this.lower();
		}
		x = Math.ceil((this.max + this.min) / 2);
		return x;
	}

	lower() {
		this.max = this.mid;
	}

	greater() {
		this.min = this.mid;
	}
}

module.exports = GuessingGame;
