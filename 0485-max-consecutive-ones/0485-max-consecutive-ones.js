/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    const strs = nums.map(v => v.toString()).join('').split('0')
    const maxNum = Math.max(...strs.map(v => v.length))
    return maxNum
};