function solution(rank, attendance) {
    var answer = 0;
    
    // 학생 번호들을 순서대로 반환해야하는데
    // 딕셔너리 같은 ? Map을 사용해야하나
    var rankMap = new Map();
    rank.map((num, idx)=> rankMap.set(num, idx));
    
    var canAttenList = [];
    for(let i=0; i<attendance.length; ++i){
        if(attendance[i]){
            canAttenList.push(rank[i]);
        }
    }
    var [a, b, c] = canAttenList.sort((a,b)=>a-b).slice(0,3);
    
    return 10000* rankMap.get(a) + 100 * rankMap.get(b) + rankMap.get(c);
}