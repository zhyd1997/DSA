/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const nextGreaterElement = function (nums1, nums2) {
	const x = []
	// console.log(`num1.length = ${nums1.length}\n`)
	// 找 num2 中 num1 元素对应的索引 index = num2Copy.indexOf(num1 元素)
	for (let i = 0; i < nums1.length; i++) {
		const temp = [...nums2]
		// console.log(temp)
		const index = temp.indexOf(nums1[i])

		// console.log(`${i}. num1[${i}] = ${nums1[i]}, index = ${index}`)

		// 如果是索引值为 num2.length-1，push(-1)
		if (index === temp.length-1) {
			// console.log(`index 是最大索引 ${temp.length-1}，push(-1)`)
			x.push(-1)
		} else {
			//
			// // 如果不是，遍历 num2Copy[index+1]，push(比 num1 元素大的第一个数)
			// console.log(`index 不是最大索引 ${temp.length-1}，开始遍历后面元素...`)
			let flag = 0
			for (let j = index+1; j < temp.length; j++) {
				// console.log(`num1[${i}] = ${nums1[i]}, temp[${j}] = ${temp[j]}`)
				if (nums1[i] < temp[j]) {
					// console.log(`可以 push temp[${j}]，停止遍历`)
					x.push(temp[j])
					flag = 1
					break
				}
			}
			//
			// 	// 没有的话就 push(-1)
			if (flag === 0) {
				// console.log(`遍历之后都没有比 num[${i}] 更大的， 只能 push(-1)`)
				x.push(-1)
			}
		}
	// console.log('')
	}

	return x
};

let nums1 = [4,1,2]
let nums2 = [1,2,3,4]
nums2 = [1,3,4,2]
nums1 = [2,4]
nums1 = [1,3,5,2,4]
nums2 = [5,4,3,2,1]
nums2 = [6,5,4,3,2,1,7]
console.log(nextGreaterElement(nums1, nums2))