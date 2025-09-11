function solution(code) {
    var ret = '';
    let mode = 0;
    let codeLen = code.length;
    
    for(let idx = 0; idx < codeLen; ++idx){
        // code[idx]가 1이면 mode 바꾸기 (토글 형식으로)   
        if(code[idx] === '1'){
            mode = mode === 1 ? 0 : 1;
            continue;
        }
        
        // code[idx]가 1이 아닌 문자라면
            // idx 가 짝수이면서 mode가 0일 때
            // idx 가 홀수이면서 mode가 1일 때 
        else if((idx % 2 === 0 && mode === 0) || 
               (idx % 2 === 1 && mode === 1)) {
            //ret뒤에 문자 붙이기
            ret += code[idx];
        }
    }
    
    // ret이 빈 문자열이라면 'EMPTY' 반환하기
    var answer = ret.length > 0 ? ret : 'EMPTY';
            
    return answer;
}