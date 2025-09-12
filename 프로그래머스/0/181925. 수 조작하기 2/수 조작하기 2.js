function solution(numLog) {
    var answer = "";
    // 두개의 원소를 비교해서 어디로 이동했는지를 계산하는 문제인거네?
    // 그러면 그냥 배열을 순회하면서 푸는 것도 나쁘지는 않을지도 .. 
    for(let i=1 ; i<numLog.length; ++i){
        let step = numLog[i] - numLog[i-1];
        
        switch(step) {
            case 1:
                answer += "w";
                break;
            case -1:
                answer += "s";
                break;
            case 10:
                answer += "d";
                break;
            case -10:
                answer += "a";
                break;
            default:
        }
    }
    return answer;
}