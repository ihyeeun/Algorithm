function solution(num_list) {
    var answer = 0;
    let list_len = num_list.length;
    
    // 리스트의 길이가 11이상이면, 리스트에 있는 모든 원소들의 합을 반환
    if(list_len > 10){
        answer = num_list.reduce((sum, cur)=> sum + cur, 0);
    }
    
    // 길이가 10이하라면 모든 원소들의 곱을 return
    else {
        answer = num_list.reduce((multi, cur)=> multi * cur, 1);
    }
    
    return answer;
}