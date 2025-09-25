function solution(str_list, ex) {
    var answer = '';
    // 모든 문자열들을 순서대로 합칠건데
    // 특정문자열이 들어간 문자열은 제외하고 꼬리 문자열 만들기
    for(str of str_list){
        if(!str.includes(ex)){
            answer += str;
        }
    }
    
    return answer;
}