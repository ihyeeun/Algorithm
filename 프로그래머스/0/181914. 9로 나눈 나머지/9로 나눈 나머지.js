function solution(number) {
    var answer = 0;
    
    // 정수 9로 나눈 나머지와
    
    // 각 자리 숫자의 합을 9로 나눈 나머지와 같다.
    answer = BigInt(number) % BigInt(9);
    
    return answer;
}