/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    const arr = new Array(nums.length).fill(0);

    for(let i = 0 ; i < nums.length ; i++){
        arr[nums[i] - 1] += 1
    }

    return [arr.findIndex((v) => v === 2) + 1, arr.findIndex((v) => v === 0) + 1]
};