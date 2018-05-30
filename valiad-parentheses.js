/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = []
  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case '(':
      case '{':
      case '[':
        stack.push(s[i])
        break
      case '}':
        if (!stack.length || stack.pop() !== '{') {
          return false
        }
        break
      case ']':
        if (!stack.length || stack.pop() !== '[') {
          return false
        }
        break
      case ')':
        if (!stack.length || stack.pop() !== '(') {
          return false
        }
        break
    }
  }
  if (!stack.length) return true
  else return false
}
