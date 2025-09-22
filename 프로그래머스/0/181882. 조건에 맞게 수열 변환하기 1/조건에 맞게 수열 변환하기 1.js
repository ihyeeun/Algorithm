function solution(arr) {
    var answer = [];
    
    // 원소가 50보다 크거나 같은 짝수라면  2로 나누기
    
    // 50보다 작은 홀수라면 2를 곱하기
    
    for(num of arr){
        if(num >= 50 && num % 2 === 0){
            answer.push(num/2);
        }
        else if(num < 50 && num % 2 !== 0){
            answer.push(num * 2);
        }
        else {
            answer.push(num);
        }
    }
    
    return answer;
}