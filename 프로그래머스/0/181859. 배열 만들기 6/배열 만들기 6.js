function solution(arr) {
    var stk = [];
    let i = 0;
    
    while(i < arr.length){
        // stk가 빈 배열이라면 arr[i]를 추가하고 i++
        if(stk.length === 0) stk.push(arr[i++]);
        
        // 빈 배열이 아니고, 마지막 원소가 arr[i]와 같으면,
        // 마지막 원소 제거하고 i++
        else {
            let last = stk.pop();
            if(last === arr[i]) ++i;
            else {
                stk.push(last);
                stk.push(arr[i++]);
            }
        }
    }
    
    return stk.length ? stk : [-1];
}