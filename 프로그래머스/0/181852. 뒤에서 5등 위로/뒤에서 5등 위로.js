function solution(num_list) {
    var answer = [];
    
    // 가장 작은 5개를 제외한 수들을 오름차순으로 반환
    answer = num_list.sort((a,b)=>a-b).slice(5, num_list.length+1);
    
    return answer;
}