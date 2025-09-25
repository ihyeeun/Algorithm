function solution(arr) {
    var answer = [];
    
    let cnt = 0;
    while(arr.length > 2 ** cnt){
        cnt++;
    }
    
    answer = [
        ...arr,
        ...new Array(2**cnt - arr.length).fill(0)
    ]
    
    return answer;
}