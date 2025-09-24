function solution(arr) {
    var answer = [];
    // 빈 배열 맨 뒤에 a번 추가하게 하라고
    for(a of arr){
        for(let i=0; i<a; ++i){
            answer.push(a);
        }
    }
    return answer;
}