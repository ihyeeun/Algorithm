function solution(arr, queries) {
    
    // queries에 있는 index값을 각 arr의 인덱스 값을 교체해주면 될 듯.
    //그러면 일단 queries에 있는 배열에 접근하고
    for(idx of queries){
        //arr의 해당 인덱스 값을 교체하기
        [arr[idx[0]], arr[idx[1]]] = [arr[idx[1]], arr[idx[0]]];
    }
    
    return arr;
}