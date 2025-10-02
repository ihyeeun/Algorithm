function solution(s) {
    let stack = [];
    
    for(let ch of s){
        if(stack.length === 0){
            stack.push(ch);
            continue;
        }
        
        let popCh = stack.pop();
        if(ch !== popCh) {
            stack.push(popCh);
            stack.push(ch);
        }
    }

    return stack.length === 0 ? 1 : 0;
}