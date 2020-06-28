/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = function (numRows) {

	// step1: initialize number[][]
	let pascal_triangle = []

	// step2: initialize elements to Array.fill(1)

	for (let i = 0; i < numRows; i++) {
		let init_array = []
		for (let j = 0; j < i + 1; j++) {
			init_array.push(1)
		}
		pascal_triangle.push(init_array)
	}

	// step3: modify specific elements: [ [1,1],[1,2,1],[1,3,3,1],<...>,[1,<...>,1] ]

	for (let i = 2; i < numRows; i++) {
		for (let j = 1; j < pascal_triangle[i].length - 1; j++) {
			pascal_triangle[i].fill(pascal_triangle[i - 1][j - 1] + pascal_triangle[i - 1][j], j, j + 1)
		}
	}

	return pascal_triangle
}

generate(5)