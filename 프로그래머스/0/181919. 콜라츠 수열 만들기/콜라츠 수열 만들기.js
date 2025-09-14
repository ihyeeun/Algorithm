function solution(n) {
    var answer = [];
    
    while(n !== 1){
        answer.push(n);
        if(n % 2 === 0) n /= 2;
        else {
            n = 3 * n + 1;
        }
    }
    // x가 짝수이면 2로 나누기
    
    // x가 홀수이면 3 * x + 1
    
    //이걸 반복해서 x가 1이 되는지 묻는 문제
    answer.push(1);
    return answer;
}