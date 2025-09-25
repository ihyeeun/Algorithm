function solution(strArr) {
    var answer = 0;
    // 길이가 같은 문자열끼리 그룹을 묶었을 때 가장 개수가 많은 그룹의 크기를 return
    var lenArr = new Array(30).fill(0);
    
    strArr.map((str, _)=> lenArr[str.length - 1]++);
    
    console.log(lenArr);
    
    return Math.max(...lenArr);
}