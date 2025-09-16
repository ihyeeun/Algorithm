function solution(strArr) {
    var answer = [];
    
    for(str of strArr){
        if(str.includes("ad")) continue;
        answer.push(str);
    }
    
    return answer;
}