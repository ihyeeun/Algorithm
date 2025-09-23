function solution(arr, delete_list) {
    var answer = [];
    
    // 이거는 filter 메서드를 이용해야할 거 같긴한데
    answer = arr.filter((num, _) => !delete_list.includes(num));
    
    return answer;
}