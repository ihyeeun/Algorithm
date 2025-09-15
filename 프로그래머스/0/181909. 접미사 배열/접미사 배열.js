function solution(my_string) {
    var answer = [];
    
    //모든 접미사 구하기 및 사전순으로 정렬하기
    for(let i=0;i<my_string.length;++i){
        answer.push(my_string.slice(-i));
    }
    
    return answer.sort();
}