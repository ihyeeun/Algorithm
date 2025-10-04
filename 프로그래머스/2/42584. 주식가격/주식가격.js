function solution(prices) {
    var answer = new Array(prices.length).fill(0);
    
    var idxStack = [0];
    var top = 0;
    
    for(let cur=1; cur<prices.length; ++cur){
        while(idxStack.length > 0 &&
             prices[cur] < prices[idxStack[top]]){
            const topIdx = idxStack.pop();
            answer[topIdx] = cur - topIdx;
            --top;
        }
        idxStack.push(cur);
        ++top;
    }
    
    while(idxStack.length > 0) {
        const topIdx = idxStack.pop();
        answer[topIdx] = prices.length - 1 - topIdx;
    }
    
    return answer;
}