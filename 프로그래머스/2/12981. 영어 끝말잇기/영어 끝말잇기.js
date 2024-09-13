function solution(n, words) {
    for (let i = 1; i < words.length; i++) {
        const prev = words[i-1];
        const curr = words[i];
        if (prev.at(-1) !== curr[0] || words.indexOf(curr) < i) {
            return [(i + 1) % n === 0 ? n : (i + 1) % n, Math.ceil((i + 1) / n)];
        }
    }
    return [0, 0];
}