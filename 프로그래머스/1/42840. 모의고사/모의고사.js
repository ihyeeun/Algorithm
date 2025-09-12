function solution(answers) {

    const pattern = [
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    ]
    const counts = [0,0,0];
    
    var len = answers.length;
    
    // answers 배열 길이만큼 반복하기
    for(let i=0; i< len; ++i){
        // 고민인거는 여기서 for문을 한번 더 돌게 할 것인지
        for(let j=0;j<3;++j){
            let pattern_len = pattern[j].length;
            if(answers[i] === pattern[j][i%pattern_len]){
                counts[j]++;
            }
        }
    }
    var answer = [];
    var max = Math.max(...counts);
    
    for(let i=0; i<3;++i){
        if(counts[i] === max) answer.push(i+1);
    }
    return answer;
}