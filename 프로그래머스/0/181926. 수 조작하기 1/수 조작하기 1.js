function solution(n, control) {
    
    for( ch of control ) {
        switch(ch) {
            case "w":
                n += 1;
                break;
            case "s":
                n -= 1;
                break;
            case "d":
                n += 10;
                break;
            case "a":
                n -= 10;
                break;
            default:
        }
    }
    return n;
    
}