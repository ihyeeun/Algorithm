function solution(my_string, m, c) {
    var answer = '';
    
    // 한 줄에 m글자씩 가로로 적었을 때
        // 이차원 배열을 만들어서 접근하는게 나은가? 근데 어차피 .. 일차원배열로 변경 될텐데
        // 첫번째 원소는 c - 1 번째 일거고, 다음은 + m 번째 일텐데 ?
    
    // 왼쪽부터 세로로 c번째 열에 적힌 글자들을 문자열로 return
    
    for(let i=c-1; i< my_string.length; i += m){
        answer += my_string[i];
    }
    
    return answer;
}