function solution(s) {
    if (s.length <= 1) return 1;
    let count = 1;
    for (let i = 1; i < s.length; i++) {
        if (count === 0) return 1 + solution(s.slice(i));
        (s[0] === s[i]) ? count++ : count--;
    }
    return 1;
}
