function solution(intStrs, k, s, l) {
    var answer = [];
    
    // 배열의 각 원소마다 s번 인덱스에서 시작. l길이 만큼 부분 문자열을 잘라내 정수로 변환.
    for(str of intStrs){
        let num = str.slice(s, s+l);
        Number(num);
        if(num > k) answer.push(Number(num));
    }
    
    //이때 변환한 정수 값이 k보다 큰 값들을 담은 배열을 return
    
    return answer;
}