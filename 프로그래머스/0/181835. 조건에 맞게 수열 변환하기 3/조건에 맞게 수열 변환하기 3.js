function solution(arr, k) {
    var answer = [];
    
    // k가 홀수라면 모든 원소에 k를 곱하기
    if(k % 2 !== 0){
        return arr.map(num => num * k);
    }
    // k가 짝수라면 모든 원소에 k를 더하기
    else {
        return arr.map(num => num + k);
    }
    
    return answer;
}