function solution(n_str) {
    var answer = '';
    let i = 0;
    while(n_str[i] === "0"){
        ++i;
    }
    answer = n_str.slice(i, n_str.length);
    return answer;
}