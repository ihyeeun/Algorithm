function solution(n, slicer, num_list) {
    var answer = [];
    
    let [a,b,c] = slicer;
    
    // slicer = [a,b,c]
    // n = 1인 경우 : 0 ~ b
    if(n === 1){
        answer = num_list.slice(0, b + 1);
    }
    
    // n = 2인 경우 : a ~ last
    else if(n === 2){
        answer = num_list.slice(a, num_list.length + 1);
    }
    
    // n = 3인 경우 : a ~ b
    else if(n === 3){
        answer = num_list.slice(a, b + 1);
    }
    
    // n = 4인 경우 : a ~ b까지 c간격으로
    else if(n === 4){
        for(let i = a; i < num_list.length && i < b + 1; i += c){
            answer.push(num_list[i]);
        }
    }
    
    return answer;
}