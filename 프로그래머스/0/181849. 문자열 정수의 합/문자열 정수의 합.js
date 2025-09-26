function solution(num_str) {
    var answer = 0;
    var answer = [...num_str].reduce((sum, num)=> sum + Number(num), 0);
    return answer;
}