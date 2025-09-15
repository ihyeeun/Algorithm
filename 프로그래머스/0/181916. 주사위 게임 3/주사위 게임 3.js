function solution(a, b, c, d) {
    
    let dice = Array(6).fill(0);
    //아니면 주사위니까.. [1~6]에 넣고 값을 체크하면 되려나 ?
    dice[a-1]++;
    dice[b-1]++;
    dice[c-1]++;
    dice[d-1]++;
    
    // 4개의 주사위가 모두 동일하다면 1111 * p
    if(dice.indexOf(4) !== -1) 
        return 1111*a;
    
    // 3개만 동일(p)하다면 (10 × p + q)**2
    else if(dice.indexOf(3) !== -1){
        let p = dice.indexOf(3) + 1;
        let q = dice.indexOf(1) + 1;
            
        return (10*p + q)**2;
    }
    
    // 2개가 동일하고 각각 다른 p, q, r 일때 q*r 을 얻는다.
    else if(dice.indexOf(2) !== -1 && dice.indexOf(1) !== -1){
        let q = dice.indexOf(1) + 1;
        let r = dice.lastIndexOf(1) + 1;
        
        return q*r;
    }
    
    // 모두 다르다면 가장 작은 숫자
    else if (new Set([a,b,c,d]).size === 4) 
        return Math.min(a,b,c,d);
    
    // 2개씩 동일하고 각각 p,q (p + q) × |p - q|
    else {
        let p = dice.indexOf(2) + 1;
        let q = dice.lastIndexOf(2) + 1;
        
        return (p+q)*Math.abs(p-q);
    }
}