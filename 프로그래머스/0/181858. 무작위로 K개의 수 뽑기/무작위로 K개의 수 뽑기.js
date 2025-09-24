function solution(arr, k) {
    var answer = [];
    
    // 지금까지 나온적 없는 수라면 배열 맨뒤에 추가하는 방식으로 만들기
    
    // 만약 완성될 배열의 길이가 k보다 작으면 나머지 값을 전부 -1로 채우기
    
    answer = [...new Set(arr)];
    if(answer.length > k){
        while(answer.length > k){
            answer.pop();
        }
    }
    else {
        answer = [
            ...answer,
            ...new Array(k - answer.length).fill(-1)
        ];
    }
    
    return answer;
}