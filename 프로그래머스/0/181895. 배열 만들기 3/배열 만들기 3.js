function solution(arr, intervals) {
    var answer = [];
    
    for([start, end] of intervals){
        answer = [...answer,
                  ...arr.slice(start, end + 1)];
    }
    
    return answer;
}