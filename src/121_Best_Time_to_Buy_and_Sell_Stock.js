/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
	// console.log(`original array is ${prices}`)
	let rest = [], temp, temp_max = 0, profit

	// step1: separate @prices into 2 parts: the i-th element, and the latter elements
	for (let i = 1; i < prices.length; i++) {
		rest = prices.slice(i)
		// console.log(`the ${i-1}-th element: ${prices[i-1]}, the rest is ${rest}`)

		// step2: find the max value in the latter part
		// 	if @prices[i] > @max, i++
		// 	else @temp_profit = @max-@prices[i]
		// 	if @current value <= @next value, update @temp_profit

		let max = rest.sort((a, b) => a - b).pop()
		if (prices[i] > max) i++
		else temp = max - prices[i-1]
		if (temp_max <= temp) temp_max =temp

		// console.log(`temp max profit: ${temp_max}`)
	}

	// step3: find the @max_profit = @temp_profit
	profit = temp_max

	// return @max_profit {number}
	return profit
}

maxProfit([7,1,5,3,6,4])