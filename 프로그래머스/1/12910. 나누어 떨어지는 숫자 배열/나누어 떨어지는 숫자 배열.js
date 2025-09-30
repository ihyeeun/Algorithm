function solution(arr, divisor) {
    var answer = [];
    
    // 나누어 떨어지는 숫자 배열 넣기
    for(num of arr){
        if(num % divisor === 0){
            answer.push(num);
        }
    }
    
    return answer.length ? answer.sort((a,b)=>a-b) : [-1];
}