function solution(numbers) {
    var answer = [];
    var len = numbers.length;
    
    // for문을 두번 돌면서 배열에 저장
    for(let i=0;i<len-1;++i){
        for(let j=i+1; j<len;++j){
            answer.push(numbers[i] + numbers[j]);
        }
    }
    
    // 중복요소를 제거하기 위해서 set 메서드 사용하기
    // 오름차순으로 정렬하기 위해서 sort 이용하기
    return [...new Set(answer)].sort((a,b)=>a-b);
}