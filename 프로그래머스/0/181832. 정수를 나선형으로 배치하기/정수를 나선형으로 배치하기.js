function solution(n) {
    var answer = new Array(n).fill(null).map(()=>new Array(n).fill(0));
    
    // 맨 처음에는 열의 값이 증가. 만약 열의 값이 최대라면 행의 값 증가. 둘 다 최대라면 열의 값 감소, 열의 값이 
    let left = 0, right = n-1;
    let top = 0, bottom = n-1;
    let cur = 1;
    
    while(top<=bottom && left<=right){
        
        for(let i=left; i<=right; ++i)
            answer[top][i] = cur++;
        top++;
        
        for(let i=top; i<=bottom; ++i)
            answer[i][right] = cur++;
        right--;
        
        if(top<=bottom){
            for(let i=right; i>=left; --i)
                answer[bottom][i] = cur++;
            bottom--;
        }
        
        if(left<=right){
            for(let i=bottom; i>=top; --i)
                answer[i][left] = cur++;
            left++;
        }
    }
    
    return answer;
}