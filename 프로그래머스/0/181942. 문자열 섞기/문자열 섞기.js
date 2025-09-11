function solution(str1, str2) {
    var answer = '';
    
    let strlen = str1.length;
    
    for(let i=0; i < strlen; ++i){
        answer += str1[i] + str2[i];
    }
    
    return answer;
}