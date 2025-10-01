function solution(s) {
    var answer = 0;
    // x만큼 회전 시켰을 때 s가 올바른 괄호 문자열이 되게하는 x의 개수를 구하시오.
    
    function successCheck(braces){
        //일단 배열 자체로 값이 넘어와지긴 할텐데. 그거를 순차적으로 스택에 넣으면서 검증하면 되겠구낭
        let braceStack = [];
        for(let brace of braces){
            if (brace === '(' || brace === '{' || brace === '[') {
                braceStack.push(brace);    
            }
            else {
                if(braceStack.length === 0) return 0;
                let openbrace = braceStack.pop();
                switch (brace) {
                    case ')': 
                        if(openbrace !== '(') return 0; break;
                    case '}':
                        if(openbrace !== '{') return 0; break;
                    case ']':
                        if(openbrace !== '[') return 0; break;
                    default:
                        return 0; 
                }
            }
        }
        return braceStack.length ? 0 : 1;
    }
    
    for(let i=0; i<s.length; ++i){
        let rotation = [
            ...s.slice(i,s.length + 1),
            ...s.slice(0,i)
        ]
        answer += successCheck(rotation);
    }
    
    return answer;
}