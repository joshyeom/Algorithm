/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function(target, n) {
    let index = 0;
    const answer = [];
    
    for(let i = 1; i < n + 1 ; i++){
        if(index === target.length){
            return answer;
        }

        answer.push("Push")
        if(target[index] === i){
            index += 1
        }else{
            answer.push('Pop')
        }

    }

    return answer
}