/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs[0].length === 0) return ''

    for(let i = 0 ; i < strs[0].length ; i++){
        for(j = 1 ; j < strs.length ; j++)
            if(strs[0][i] !== strs[j][i]){
                console.log('j', j)
                console.log('strs[0][i]', strs[0][i])
                console.log('strs[j][i]', strs[j][i])
                return strs[0].slice(0, i)
            }
    }

    return strs[0]
};