function solution(arr, flag) {
    var answer = [];
    
    //true 라면 arr * 2번 추가하기
    //false라면 원소를 arr[i]개 만큼 제거하기
    for(let i=0; i<arr.length; ++i){
        if(flag[i]){
            answer = [
                ...answer,
                ...new Array(arr[i] * 2).fill(arr[i])
            ]
        }
        else {
            answer.splice(-arr[i]);
        }
    }
    
    return answer;
}