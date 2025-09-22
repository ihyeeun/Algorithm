function solution(num_list) {
    var answer = 0;
    
    // 리스트의 모든 원소를 1로 만들기 위해서 필요한 나누기 연산의 횟수를 구하기
    for(num of num_list){
        answer += countToOne(num);
    }
    
    return answer;
}

function countToOne(num){
    // 짝수라면 반으로 나누기
    // 홀수라면 1을 뺀 뒤 반으로 나누기
    let count = 0;
    while(num !== 1){
        if(num % 2 === 0){
            num /= 2;
        }
        else{
            num -= 1;
            num /= 2;
        }
        ++count;
    }
    return count;
}