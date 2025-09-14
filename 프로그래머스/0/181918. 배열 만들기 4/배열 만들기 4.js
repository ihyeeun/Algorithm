function solution(arr) {
    var stk = [];
    
    for(let i=0; i<arr.length; ){
        // stk가 빈 배열이라면 arr[i]를 추가하기 ++i
        if(stk.length === 0) {
            stk.push(arr[i]);
            ++i;
        }
        
        //stk에 원소가 있고 마지막 원소가 arr[i]보다 작으면 stk에 arr[i]를 push
        else{
            last_num = stk.pop();
            if(last_num < arr[i]){
                stk.push(last_num);
                stk.push(arr[i]);
                ++i;
            }
        }
        //                                  크거나 같으면 stk의 마지막 원소를 제거
    }
    
    return stk;
}