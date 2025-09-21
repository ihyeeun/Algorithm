function solution(numbers, n) {
    var answer = 0;
    
    // 원소를 하나씩 더하다가 합이 n보다 커지는 순간 더했던 원소들의 합을 return 하는 함수
    for(num of numbers){
        answer += num;
        if(answer > n) break;
    }
    
    return answer;
}