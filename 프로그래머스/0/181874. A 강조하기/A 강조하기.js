function solution(myString) {
    var answer = '';
    
    // 'a' 가 등장하면 대문자로 'A'로 바꾸기
    // "A" 가 아닌 모든 대문자 알파벳은 소문자 알파벳으로 변환하기
    for(ch of myString){
        if(ch === 'a'){
            answer += 'A';
        }
        else if(ch.charCodeAt() > "A".charCodeAt() && ch.charCodeAt() <= "Z".charCodeAt()){
            answer += ch.toLowerCase();
        }
        else {
            answer += ch;
        }
    }
    
    return answer;
}