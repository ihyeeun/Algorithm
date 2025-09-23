function solution(myString) {
    var answer = '';
    // l 보다 앞선 모든 문자는 l로 바꾼 문자열로 바꾸기.
    
    var arr = [...myString];
    for(ch of arr){
        if(ch.charCodeAt() < 'l'.charCodeAt()){
            answer += 'l';
        }
        else {
            answer += ch;
        }
    }
    
    return answer;
}