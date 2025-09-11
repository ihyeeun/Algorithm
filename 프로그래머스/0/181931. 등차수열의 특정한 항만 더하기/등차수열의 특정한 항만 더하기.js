function solution(a, d, included) {
    var answer = 0;
    let n = included.length;
    
    for(let i=0; i< n; ++i){
        if(included[i]) {
            answer += calculate(a,d,i+1);
        }
    }
    
    return answer;
}

function calculate(a, d, n) {
    let an = a + (n-1)*d;
    return an;
}