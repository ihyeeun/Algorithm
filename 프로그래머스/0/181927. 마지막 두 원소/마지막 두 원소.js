function solution(num_list) {   
    var list_len = num_list.length;
    
    var n = num_list[list_len - 1];
    var prev_n = num_list[list_len - 2];
    
    // 1. 마지막 원소가 전 원소보다 크다면
    if(n > prev_n){
        //1.1 마지막 원소에서 전 원소의 뺀 값을 배열에 추가
        num_list.push(n - prev_n);
    }
    
    // 2. 마지막 원소가 전 원소보다 크지 않다면
    else {
        //2.1 마지막 원소를 두배 한 값을 배열에 추가
        num_list.push(n*2);
    }
    return num_list;
}