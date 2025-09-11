function solution(a, b) {
    
    // a + b 만들기
    let num1 = Number(`${a}${b}`);
    
    // 2 * a * b 만들기
    let num2 = 2 * a * b;
    
    //비교문 작성해서 return 되게 만들기
    let answer = num1 > num2 ? num1 : num2;
    
    return answer;
}