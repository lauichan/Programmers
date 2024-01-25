function solution(s) {
    if (s.length <= 1) return 1;
    let xcount = 1;
    let ocount = 0;
    for (let i = 1; i < s.length; i++) {
        if (xcount === ocount) {
            console.log(xcount, ocount, i)
            return 1 + solution(s.slice(i))
        }
        (s[0] === s[i]) ? xcount++ : ocount++;
    }
    return 1;
}
