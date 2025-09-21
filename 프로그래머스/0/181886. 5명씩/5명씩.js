function solution(names) {
    var answer = [];
    
    // 5명씩 묶은 그룹에서 맨 앞에 서있는 사람의 이름을 반환
    for(let i=0; i<names.length; i += 5){
        answer.push(names[i]);
    }
    
    return answer;
}