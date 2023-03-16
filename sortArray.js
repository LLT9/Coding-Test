function sortArray(nums) {
  if (nums.length < 2) return nums
  const mid = Math.floor(nums.length / 2)
  const left = nums.slice(0, mid)

  const right = nums.slice(mid)

  return merge(sortArray(left), sortArray(right))
}

function merge(left, right) {
  const result = []
  const leftLength = left.length
  const rightLength = right.length
  let l = 0
  let r = 0
  while (l < leftLength && r < rightLength) {
    if (left[l] < right[r]) {
      result.push(left[l++])
    } else {
      result.push(right[r++])
    }
  }

  return result.concat(left.slice(l)).concat(right.slice(r))
}

module.exports = { sortArray }
