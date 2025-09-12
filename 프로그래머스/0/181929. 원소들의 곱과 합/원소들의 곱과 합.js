function solution(num_list) {
    
    // 모든 원소들의 곱 구하기
    let num1 = num_list.reduce((result, current)=>result * current);
    
    // 모든 원소들의 합의 제곱 구하기
    let num2 = num_list.reduce((result, current)=>result + current);
    
    //num1 < num2^2 == 1 : 0 return
    return num1 < num2**2 ? 1 : 0;
    
}