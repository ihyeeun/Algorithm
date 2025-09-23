function solution(strArr) {
    var answer = [];
    //홀수번째 인덱스 문자열은 대문자로
    //짝수번째 인덱스 문자열은 소문자로  
    
    for(let i=0; i<strArr.length; ++i){
        if(i % 2 !== 0){
            answer.push(strArr[i].toUpperCase());
        }
        else {
            answer.push(strArr[i].toLowerCase());
        }
    }
    
    return answer;
}