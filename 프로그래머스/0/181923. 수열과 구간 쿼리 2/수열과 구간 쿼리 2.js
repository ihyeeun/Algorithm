function solution(arr, queries) {
    var answer = [];
    // arr의 각 원소에서 s<=i<=e 인 모든 i 구하기 / arr의 범위를 새로 정하는 것
    for([s,e,k] of queries) {
        // 1. s <=  <= e 범위의 arr 새로 만들기
        let slice_arr = arr.slice(s,e+1);

        // 2. 가장 작은 arr[i]를 찾기 위해 오름차순 정렬
        slice_arr.sort((a,b)=>a-b);
        
        // 3. 조건에 맞는 값 찾기
            //3-1 조건에 맞는 값 있다면 answer 배열에 추가
            //3-2 조건에 맞지 않다면 answer 배열에 -1 추가
        answer.push(slice_arr.find(n => n > k) || -1);

    }
    return answer;
}