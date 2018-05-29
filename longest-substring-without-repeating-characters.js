/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const set = new Set()
  let pre = 0
  let last = 0
  let maxLength = 0
  while (last < s.length) {
    if (!set.has(s[last])) {
      set.add(s[last])
      last++
      maxLength = Math.max(maxLength, last - pre)
    } else {
      set.delete(s[pre])
      pre++
    }
  }
}
