function solution(num_list) {
    var oddNum = 0;
    var evenNum = 0;
    
    for(n of num_list){
        if(n%2 === 1){
            oddNum *= 10;
            oddNum += n;
        }
        else {
            evenNum *= 10;
            evenNum += n;
        }
    }
    return oddNum + evenNum;
}