function solution(a, b, c) {
    
    // 1. 세숫자가 모두 다른 경우 = a + b + c
    if(a !== b && b !== c && c !== a){
        return a + b + c;
    }
    
    // 3. 세숫자가 동일한 경우 =  (a + b + c) × (a2 + b2 + c2 ) × (a3 + b3 + c3 )
    if(a === b && b === c && c === a) {
        return (a + b + c) * (a**2 + b**2 + c**2 ) * (a**3 + b**3 + c**3 );
    }
    
    // 2. 두 숫자는 같고 남은 숫자가 다른 경우 = (a + b + c) × (a2 + b2 + c2 )
    return (a + b + c) * (a**2 + b**2 + c**2 );
}