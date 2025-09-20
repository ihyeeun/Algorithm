function solution(str_list) {
    var answer = [];
    
    // "l"이나 "r"이 없다면 빈 리스트
    if(!str_list.includes("l") && !str_list.includes("r")){
        return [];
    }
    
    // "l"과 "r" 중 먼저 나오는 문자열
        // "l"이라면 왼쪽에 있는 문자열들을 순서대로 담은 리스트
    var l_idx = str_list.indexOf("l");
    var r_idx = str_list.indexOf("r");
    
    if(l_idx < 0) l_idx = Infinity;
    if(r_idx < 0) r_idx = Infinity;
        
    if(l_idx < r_idx){
        answer = str_list.slice(0, l_idx);
    }
    
    // "r"이라면 해당 문자열을 기준으로 오른쪽에 있는 문자열들을 순서대로 담은 리스트   
    else {
        answer = str_list.slice(r_idx + 1, str_list.length + 1);
    }
    
    return answer;
}