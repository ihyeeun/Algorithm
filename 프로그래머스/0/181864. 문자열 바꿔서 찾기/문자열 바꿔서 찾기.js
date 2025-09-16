function solution(myString, pat) {
    var answer = 0;
    
    // a 와 b를 바꾼 문자열에서 pat이 있으면 1을 return 하도록
    myString = myString.replaceAll("A", "x");
    myString = myString.replaceAll("B", "A");
    myString = myString.replaceAll("x", "B");
    
    console.log(myString);
    
    return myString.includes(pat) ? 1 : 0;
}