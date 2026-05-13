function solution(s) {
    let binaryTime = 0;
    let removeZero = 0;
    while(s.length > 1){
        console.log('before', s)
        if(s.includes('0')){
            const zeroCount = s.split('').filter(v => v === '0').length
            s = s.replaceAll('0', '')
            console.log('replaced', s)
            removeZero += zeroCount
        }
            s = s.length.toString(2)
            binaryTime++
            console.log('after', s)
    }
    return [binaryTime, removeZero]
}