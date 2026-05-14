function solution(n) {
    let condition = true;
    const oneCount = n.toString(2).split('').filter(v => v === '1').length;
    while(condition){
        n += 1
        nOneCount = n.toString(2).split('').filter(v => v === '1').length;
        
        if(oneCount === nOneCount){
            condition = false;
        }
    }
    return n
}