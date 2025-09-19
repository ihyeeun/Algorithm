function solution(arr) {
    var answer = [];
    
    //2가 포함된 가장 작은 연속된 부분 배열을 반환
    let start = arr.indexOf(2);
    let end = arr.lastIndexOf(2);
    
    answer = [...arr.slice(start, end + 1)];
    
    //없으면 [-1] 반환
    return answer.length ? answer : [-1];
}