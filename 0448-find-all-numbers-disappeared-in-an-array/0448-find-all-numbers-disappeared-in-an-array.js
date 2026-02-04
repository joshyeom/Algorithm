/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    const arr = new Array(nums.length).fill(0);
    const answer = []

    for(num of nums){
        arr[num - 1] = 1;
    }

    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] === 0){
            answer.push(i + 1)
        }
    }

    return answer;  
};