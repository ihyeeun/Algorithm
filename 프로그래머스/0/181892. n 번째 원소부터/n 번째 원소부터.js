function solution(num_list, n) {
    var answer = [];
    
    answer = num_list.slice(n - 1, num_list.length + 1);
    
    return answer;
}