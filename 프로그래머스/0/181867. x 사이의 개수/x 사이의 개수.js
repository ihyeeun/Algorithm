function solution(myString) {
    var answer = [];
    var str = '';
    for(ch of myString){
        if(ch !== 'x'){
            str += ch;
        }
        else{
            answer.push(str.length);
            str = '';
        }
    }
    answer.push(str.length);
    
    return answer;
}