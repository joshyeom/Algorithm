/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length === 1){
        return false
    }
    const array = s.split('')
    
    const map = {
        ')': '(',
        ']': '[',
        '}': '{'
    }

    const stack = []

    if(map[array[0]]){
        return false
    }

    for(let string of array){
        if(!map[string]){
            stack.push(string)
        }else{
            const top = stack.pop();
            if(top !== map[string]){
                return false
            }
        }
    }

    if(stack.length === 0){
        return true
    }

    return false
};