function solution(num_list) {
    var answer = 0;
    
    // 배열에서 처음으로 음수가오는 인덱스를 return
    
    answer = num_list.findIndex(num => num < 0);
    
    return answer;
}