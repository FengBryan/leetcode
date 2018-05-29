/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const charArr = s.split('')
  function makeHash (start, arr, subArr = []) {
    
  }
  const map = charArr.reduce((hash, ele, index) => {
    hash[ele] = (hash[ele] || 0) + 1
    makeIndexForHashMap(index, charArr.length - 1, charArr, hash)
    return hash
  }, {})

  const result = Object
    .keys(map)
    .map(key => {
      return map[key] === 1 ? key : null
    })
    .filter(key => !!key)
    .map(key => {
      const charMap = key.split('').reduce((dict, ele, index) => {
        dict[ele] = (dict[ele] || 0) + 1
      }, {})
      let hasRepeatChar = false
      for (let f in charMap) {
        hasRepeatChar = charMap[f] > 1
        if (hasRepeatChar) break
      }

      if (hasRepeatChar) return null
    })
    .filter(ele => !!ele)

  console.log(result)
}
