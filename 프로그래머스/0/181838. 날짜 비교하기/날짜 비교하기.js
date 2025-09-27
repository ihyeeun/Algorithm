function solution(date1, date2) {
    
    var [y1, m1, d1] = date1;
    var [y2, m2, d2] = date2;
    
    // 숫자가 작을수록 더 앞선 날짜.
    if(y1 !== y2)
        return y1 < y2 ? 1 : 0;
    else if (m1 !== m2)
        return m1 < m2 ? 1 : 0;
    else 
        return d1 < d2 ? 1 : 0;
    
}