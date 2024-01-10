function solution(n) {
    let nf3 = n.toString(3);
    let result = "";
    for(let i = 0; i < nf3.length; i++) {
        result += nf3[nf3.length - i - 1];
    };
    return parseInt(result, 3);
}