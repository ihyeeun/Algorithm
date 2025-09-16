function solution(my_string, s, e) {
    var answer = [...my_string];
    //일단 문자열을 배열로 만들기
    answer = [
        ...answer.slice(0,s),
        ...answer.slice(s,e+1).reverse(),
        ...answer.slice(e+1, my_string.length)
    ];
    
    return answer.join("");
}