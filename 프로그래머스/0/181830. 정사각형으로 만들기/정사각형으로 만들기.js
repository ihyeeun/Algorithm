function solution(arr) {
    
    // arr의 행의 수가 더 많으면 열의수를 증가해서 같아지도록 행의 끝에 0을 추가하기
    // 반대로 열의 수가 더 많으면 각 열의 끝에 0을 추가한 배열을 return 하도록
    
    let row = arr.length;
    let col = arr[0].length;
    
    if(row > col){
        // col을 생성해야하니까 각 행에서 0을 push 해야할 듯.
        for(let i=0; i<row; ++i){
            for(let j=0; j<row-col; ++j){
                arr[i].push(0);
            }
        }
        return arr;
    }
    else if(row < col){
        for(let i=0; i<col-row; ++i){
            arr.push(new Array(col).fill(0));
        }
        return arr;
    }
    
    return arr;
}