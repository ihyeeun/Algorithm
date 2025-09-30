function solution(n, left, right) {    
    
    // 근데 여기서 n자체가 이미 1000만 이기에 O(N)으로 풀어야하거나 줄여야할 거 같다.
    var answer = [];
    
    for(let i=left; i<=right; ++i){
        let row = Math.trunc(i/n);
        let col = i % n;
        
        let cur = Math.max(row, col) + 1;
        
        answer.push(cur);
    }
    // 이 문제에서 핵심은 i로 채운다는 것인 거 같다.
    // 결국에는 인덱스 값으로 값을 채운다는 거니까 인덱스에 접근해서 풀면 간단하게 풀리는 문제였음.
    
    // 배열을 채워야하는데 이거를 어떻게 채워야할까?
    // 일차원 배열로 채운다고 생각해보자
    
    // 1 2 3
    // 2 2 3
    // 3 3 3
    
    // 0 1 2
    // 1 1 2
    // 2 2 2
    
    return answer;
}