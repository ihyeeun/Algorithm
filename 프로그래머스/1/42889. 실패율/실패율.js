function solution(N, stages) {
    var answer = [];
    
    // 실패율 : 현재 스테이지의 플레이어 수 / 스테이지 정수보다 같거나 큰 사람들
    let status = new Array(N+2).fill(0);
    for(stage of stages){
        status[stage]++;
    }
    
    let fail = [];
    let player = status.reduce((sum,cur)=>sum+cur,0);
    
    for(let i=1; i<=N; ++i){
        fail.push([i ,status[i] / player]);
        player -= status[i];
    }
    
    fail.sort((a,b)=>b[1] - a[1]);
    answer = fail.map((cur,_)=>cur[0]);
    
    return answer;
}