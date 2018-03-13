/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const a = Number(x).toString().split('').reverse()
  if (a[0] === '0') a.shift()
  if (a[a.length - 1] === '-') {
    a.unshift(a[a.length - 1])
    a.pop()
  }
  const max = 2147483647
  const reversedNum = Number(a.join('').toString())
  return Math.abs(reversedNum) >= max ? 0 : reversedNum
}
