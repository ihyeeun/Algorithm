function solution(q, r, code) {
    var answer = '';
    // code의 각 인덱스를 q로 나누었을때 나머지가 r이랑 같을때
        //인덱스 값을 순서대로 이어붙인 문자열 return
    for(let i=0;i<code.length;++i){
        if(i%q === r){
            answer+=code[i];
        }
    }
    
    return answer;
}