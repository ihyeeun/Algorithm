function solution(num_list, n) {
    var answer = [];
    
    // 첫번째 원소부터 마지막 원소까지 n개 간격으로 원소들을 담아서 반환
    
    for(let i=0; i<num_list.length; i += n){
        answer.push(num_list[i]);
    }
    
    return answer;
}