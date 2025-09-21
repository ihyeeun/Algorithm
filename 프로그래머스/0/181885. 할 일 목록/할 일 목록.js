function solution(todo_list, finished) {
    var answer = [];
    
    // 아직 못 마친 할 일들을 순서대로
    for(let i=0; i<finished.length; ++i){
        if(!finished[i]){
            answer.push(todo_list[i]);
        }
    }
    
    return answer;
}