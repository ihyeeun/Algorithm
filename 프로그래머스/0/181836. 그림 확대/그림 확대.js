function solution(picture, k) {
    var answer = [];
    
    for(row of picture) {
        let str = '';
        for(pixel of row) {
            for(let i=0; i<k; ++i){
                str += pixel;
            }
        }
        
        for(let i=0; i<k; ++i){
            answer.push(str);
        }
    }
    
    return answer;
}