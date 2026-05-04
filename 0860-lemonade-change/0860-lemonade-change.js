/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    let five = 0;
    let ten = 0;
    for(let bill of bills){
        if(bill === 5){
            five += 1
        }else if(bill === 10){
            if(five === 0){
                return false
            }
            five -= 1
            ten += 1
        }else {
            if (ten > 0 && five > 0) {
                ten -= 1;
                five -= 1;
            } 
            // 2순위: $10가 없으면 $5 3장으로 주기
            else if (five >= 3) {
                five -= 3;
            } 
            // 3순위: 거슬러 줄 돈이 부족하면 즉시 파산!
            else {
                return false;
            }
        }
    }
    return true;
}