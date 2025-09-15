function solution(my_strings, parts) {
    var answer = '';
    
    for([i, [s,e]] of parts.entries()){
        answer += my_strings[i].slice(s,e+1);
    }
    
    return answer;
}