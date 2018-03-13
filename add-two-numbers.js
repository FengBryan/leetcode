/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 *     return this
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const fc = (list) => {
    let listArr = []
    const travelList = (list) => {
      if (list.next) {
        listArr.push(list.val)
        return travelList(list.next)
      } else {
        listArr.push(list.val)
      }
    }
    travelList(list)
    return listArr
  }

  let arr1 = fc(l1)
  let arr2 = fc(l2)

  let long = arr1.length > arr2.length ? arr1 : arr2
  let short = arr1.length > arr2.length ? arr2 : arr1
  for (let index = 0; index < long.length; index++) {
    let carry = false
    let c = long[index] + (short[index] || 0)
    c = (carry = c > 9) ? c % 10 : c
    if (carry) {
      long[index + 1] = long[index + 1] ? long[index + 1] : 0
      long[index + 1] += 1
    }
    long[index] = c
  }

  return long
}
