function solution(n) {
    var answer = 0;
    
    // 1. n이 홀수라면
    if(n%2==1){
        // 1.1 홀수 정수의 합
        for(let i=1;i<=n;i+=2){
            answer += i;
        }
    }
    
    // 2. n이 짝수라면
    else {
        // 2.1 짝수인 정수 제곱의 합
        answer = n * (n+1) * (n+2) / 6;
    }
    
    return answer;
}