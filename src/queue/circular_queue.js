// Hot Potato Game

import Queue from "./queue.js";

function hotPotato(elementsList, num) {
	const queue = new Queue()
	const elimitatedList = []

	elementsList.forEach(element => queue.enqueue(element))

	while (queue.size() > 1) {
		for (let i = 0; i < num; i++) {
			queue.enqueue(queue.dequeue())
		}
		elimitatedList.push(queue.dequeue())
	}

	return ({
		eliminated: elimitatedList,
		winner: queue.dequeue()
	})
}

export default hotPotato