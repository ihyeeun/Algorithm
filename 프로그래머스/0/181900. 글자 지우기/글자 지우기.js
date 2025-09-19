function solution(my_string, indices) {
    var answer = "";
    let j = 0;
    
    indices.sort((a,b)=>a-b); // 오름차순 정렬

    for(let i=0; i<my_string.length; ++i){
        if(i===indices[j]){
            j++;
            continue;
        }
        else {
            answer+=my_string[i];
        }
    }
    return answer;
}