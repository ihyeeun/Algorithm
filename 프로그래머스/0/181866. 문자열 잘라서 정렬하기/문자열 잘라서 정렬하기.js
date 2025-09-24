function solution(myString) {
    var answer = [];
    
    answer = myString.split('x');
    answer.sort();

    return answer.filter((str,_)=> str !== "");
}