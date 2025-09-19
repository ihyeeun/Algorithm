function solution(my_string) {
    var answer = new Array(52).fill(0);
    //각 문자 개수를 배열에 담아서 리턴하기, 대소문자 구분하기
    
    // 배열을 초기화 하고, 문자열 길이만큼 반복문을 돌면서 아스키 코드만큼 빼면 되지 않나 ?
    for(ch of my_string){
        if(ch <= 'Z'){
            //대문자인 경우
            answer[ch.charCodeAt(0) - 'A'.charCodeAt(0)]++;
        }
        else {
            //소문자인 경우
            answer[ch.charCodeAt(0) - 'a'.charCodeAt(0) + 26]++;
        }
    }
    
    return answer;
}