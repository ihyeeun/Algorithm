function solution(ineq, eq, n, m) {
    var answer = 0;
    
    // 1. eq 가 = 일 때,
    if(eq === '=' && n === m){
        return 1;
    }
    
    // 2. ineq가 > 일 때,
    if(ineq === '>') {
        return n > m ? 1 : 0;
    }
    
    // 3. ineq가 < 일 때,
    if(ineq === '<'){
        return n < m ? 1 : 0;
    }
    
    return answer;
}