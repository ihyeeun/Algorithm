function solution(myString, pat) {
    
    // 대소문자를 구분하지 않고 존재하는지 판별하기
    return myString.toUpperCase().includes(pat.toUpperCase()) ? 1 : 0;
}