function solution(numbers) {
    var answer = 0;
    answer = numbers.reduce((sum,cur)=>sum+cur) / numbers.length;
    return answer;
}