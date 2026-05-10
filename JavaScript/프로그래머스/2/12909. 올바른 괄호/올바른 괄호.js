function solution(s){
    let stack = 0;
    if(s[0] === ')'){
        return false;
    }
    
    for(let i = 0 ; i < s.length; i++){
        if(s[i] === '('){
            stack++
        }else if(s[i] === ')'){
            if(stack === 0){
                return false;
            }
            stack--
        }
    }
    
    if(stack > 0){
      return false
    }
    return true;
}
