function solution(binomial) {
    var [a, op, b] = binomial.split(" ");
    switch (op){
        case '+':
            return Number(a) + Number(b);
        case '-':
            return a - b;
        case '*':
            return a * b;
        default:
            return;
    }
}