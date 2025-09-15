function solution(arr1, arr2) {

    const r1_len = arr1.length;
    const c1_len = arr1[0].length;
    const r2_len = arr2.length;
    const c2_len = arr2[0].length;
    
    const answer = [];
    for(let i=0;i<r1_len;++i){
        answer.push(new Array(c2_len).fill(0));
    }
    
    for(let i=0;i<r1_len;++i){
        for(let j=0;j<c2_len;++j){
            for(let k=0;k<c1_len;++k){
                answer[i][j] += arr1[i][k] * arr2[k][j]
            }
        }
    }
    
    return answer;
}

/*
1 4   3 3
3 2   3 3
4 1
*/
