/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const totalLength = nums1.length + nums2.length
  const isEvenNumbers = ((totalLength % 2) === 0)

  const halfLength = isEvenNumbers ? totalLength / 2 + 1 : Math.ceil(totalLength / 2)

  let i = 0
  let j1 = 0
  let j2 = 0
  let finalArray = new Array(halfLength)
  while (i < halfLength) {
    if (nums1[j1] === undefined) {
      finalArray[i] = nums2[j2]
      j2++
      i++
    }

    if (nums2[j2] === undefined) {
      finalArray[i] = nums1[j1]
      j1++
      i++
    }
    if (nums1[j1] >= nums2[j2]) {
      finalArray[i] = nums2[j2]
      j2++
      i++
    } else {
      finalArray[i] = nums1[j1]
      j1++
      i++
    }
  }
  if (isEvenNumbers) {
    return (finalArray[halfLength - 1] + finalArray[halfLength - 2]) / 2
  } else {
    return finalArray[halfLength - 1]
  }
}
