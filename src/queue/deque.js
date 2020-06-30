export default class Deque { // Take Care of this, maybe wrong
	constructor() {
		this.count = 0
		this.lowestCount = 0
		this.items = {}
	}

	addFront(element) {
		if (this.isEmpty()) {
			this.addBack(element)
		} else if (this.lowestCount > 0) {
			this.items[this.lowestCount--] = element
		} else {
			for (let i = this.count; i > 0; i--) {
				this.items[i] = this.items[i - 1]
			}
			this.count++
			this.lowestCount = 0
			this.items[0] = element
		}
	}

	addBack(element) {
		this.items[this.lowestCount++] = element
		this.count++
	}

	removeFront() {
		if (this.isEmpty()) {
			return undefined
		}
		const result = this.items[this.lowestCount]
		delete this.items[this.lowestCount++]
		return result
	}

	removeBack() {
		if (this.isEmpty()) return undefined

		this.count--
		const result = this.items[this.count]
		delete this.items[this.count]

		return result
	}

	isEmpty() {
		return this.count - this.lowestCount === 0
	}

	size() {
		return this.count - this.lowestCount
	}
}