function solution(arr, n) {
    
    // arr 길이가 홀수라면, 모든 짝수 인덱스 위치에 n을 더한 배열을
    // 길이가 짝수라면, 홀수 인덱스 위치에 n을 더한 배열을 
    
    return arr.length % 2 !== 0 ? calculate(arr,n,0) : calculate(arr,n,1);
}

function calculate(arr, n, startN){
    for(let i=startN; i<arr.length; i+=2){
        arr[i] += n;
    }
    return arr;
}