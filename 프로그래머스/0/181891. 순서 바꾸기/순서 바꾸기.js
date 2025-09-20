function solution(num_list, n) {
    var answer = [];
    
    // num_list를 n번째 원소 이후의 원소들과 n번째 원소들로 나누고
    
    // 이 둘의 위치를 바꾸는 리스트를 return 하도록하기 
    
    answer = [
        ...num_list.slice(n, num_list.length + 1),
        ...num_list.slice(0, n)
    ];
    
    return answer;
}