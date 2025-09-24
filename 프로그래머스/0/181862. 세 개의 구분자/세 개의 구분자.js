function solution(myStr) {
    var answer = [];
    
    // 구분자의 문자열을 하나로 합치는게 나을거같은데
    myStr = myStr.replaceAll('b', 'a');
    myStr = myStr.replaceAll('c', 'a');
    
    // a로 나누고, 공백 없애기
    answer = myStr.split('a').filter((str, _)=> str !== '');
    
    return answer.length ? answer : ["EMPTY"];
}