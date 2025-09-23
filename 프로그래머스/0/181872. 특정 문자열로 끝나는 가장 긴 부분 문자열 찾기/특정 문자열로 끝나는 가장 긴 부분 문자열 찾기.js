function solution(myString, pat) {
    // pat으로 끝나는 가장 긴 부분 문자열 찾아서 반환하기
    
    return myString.slice(0, myString.lastIndexOf(pat)) + pat;
}