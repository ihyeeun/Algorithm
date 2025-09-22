function solution(arr) {
    var answer = 0;
    
    // 이러한 작업을 x번 반복한 결과의 배열을 arr(x)라고 한다면
    // 항상 arr(x) = arr(x+1) 을 만족하는 x가 항상 존재한다. 이 x 중 가장 작은 값을 return 하도록 하기
    
    let x = 0;
    while(true){
        var arr2 = calculate(arr);
        if(JSON.stringify(arr) === JSON.stringify(arr2)){
            return x;
        }
        x++;
        arr = arr2;
    }
    
    return answer;
}

function calculate(arr) {
    var answer = [];
    //각 원소에 대해 50보다 크거나 같고 짝수라면 2로 나누기    
    //각 원소가 50보다 작은 홀수라면 2를 곱하고 다시 1을 더한다.
    for(n of arr){
        if(n >= 50 && n % 2 === 0){
            answer.push(n / 2);
        }
        else if (n < 50 && n % 2 !== 0){
            answer.push(n*2 + 1);
        }
        else {
            answer.push(n);
        }
    }
    return answer;
}