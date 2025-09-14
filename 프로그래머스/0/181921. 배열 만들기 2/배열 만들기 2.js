function solution(l, r) {
    var answer = [];
    
    function dfs (num) {
        if (num > r) return; //r보다 큰 값일 경우에는 중단
        if (num >= l) answer.push(num); //범위에 해당 하는 값이라면 저장
        
        dfs(num * 10);
        dfs(num * 10 + 5);
    }
    
    // dfs(5*10**parseInt(l/10));
    dfs(5);
    
    return answer.length > 0 ? answer.sort((a,b)=>a-b) : [-1];
}