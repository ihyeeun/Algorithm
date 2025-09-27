function solution(order) {
    var answer = 0;
    
    // 아메리카노 4500
    // 라떼 5000
    
    // 메뉴만 적은 팀원은 ice, 아무거나라고 적은 사람은 iceamericano로 통일
    // 총 결제 금액을 구하기
    for(menu of order){
        if(menu.includes('cafelatte'))
            answer += 5000;
        else
            answer += 4500;
    }
    
    return answer;
}