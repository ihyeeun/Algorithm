function solution(arr1, arr2) {

    let sum1 = arr1.reduce((sum, cur)=> sum + cur);
    let sum2 = arr2.reduce((sum, cur)=> sum + cur);
    let len1 = arr1.length;
    let len2 = arr2.length;
    
    // 길이와 합이 같으면 0을 return. 1 0 -1
    if(len1 === len2 && sum1 === sum2) 
        return 0;
    
    // 길이가 같으면 원소의 합을 비교해서 더 큰쪽이 큰 것.
    if(len1 === len2){
        return sum1 > sum2 ? 1 : -1; 
    }
    
    // 두 배열의 길이가 다를 경우, 길이가 더 긴게 큼.
    if(len1 !== len2){
        return len1 > len2 ? 1 : -1;
    }
}