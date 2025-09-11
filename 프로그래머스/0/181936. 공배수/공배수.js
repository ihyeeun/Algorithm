function solution(number, n, m) {
    var answer = 0;
    
//  이렇게 되면 차라리 함수를 하나 만들어서 거기에 넣고 배수를 체크하는 걸 만드는 게 낫지 않나?
    
    answer = multiple(number, n) * multiple(number, m);
    
    return answer;
}

function multiple(number, num) {
    return number % num == 0 ? 1 : 0;
}