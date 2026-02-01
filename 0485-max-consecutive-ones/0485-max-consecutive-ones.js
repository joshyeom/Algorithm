/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let current = 0;
    let max = 0;

    for(let num of nums){
        if(num === 1){
            current += 1
            max = Math.max(current, max)
        }else{
            current = 0;
        }
    }

    return max
};