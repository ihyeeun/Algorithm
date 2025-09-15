function solution(my_string, is_suffix) {
    
    var tails = [];
    
    for(let i=0;i<my_string.length;++i){
        tails.push(my_string.slice(-i));
    }
    
    return tails.includes(is_suffix) ? 1: 0;
}