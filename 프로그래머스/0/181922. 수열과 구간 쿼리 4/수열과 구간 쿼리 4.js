function solution(arr, queries) {
    
    //각 queries 에 접근하기
    for([s,e,k] of queries){
        //queries에 있는 s < e 인덱스 값 배열을 새로 만들기
        // 새로 만드는 것보다는 인덱스 값으로 접근해서 바로 계산해버리는게 낫지 않나 ?
        for(let i = s; i<=e;++i){
            // i값이 k의 배수라면 arr[i]에 1을 더하기
            if(i % k === 0) {
                arr[i]++;
            }
        }
    }
    
    return arr;
}