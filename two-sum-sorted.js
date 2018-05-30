
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const hash = new Map()

  for (let i = 0; i < nums.length; i++) {
    hash.set(`${nums[i]}`, i)
  }

  for (let i = 0; i < nums.length; i++) {
    if (!hash.has(`${target - nums[i]}`)) {
      continue
    } else {
      return [i + 1, hash.get(`${target - nums[i]}`) + 1]
    }
  }
}
