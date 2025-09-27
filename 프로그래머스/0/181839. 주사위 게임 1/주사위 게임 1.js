function solution(a, b) {
    var answer = 0;
    
    // a,b 모두 홀수라면 a2 + b2
    
    // a or b 중 하나만 홀수라면 2 × (a + b)
    
    // a,b 짝수라면 |a - b|
    if(a%2 !== 0 && b%2 !== 0){
        return a**2 + b**2;
    }
    else if(a%2 === 0 && b%2 === 0){
        return Math.abs(a-b);
    }
    else {
        return 2*(a+b);
    }
    
    return answer;
}