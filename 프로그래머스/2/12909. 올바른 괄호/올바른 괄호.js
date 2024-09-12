function solution(s){
    let count = 0

    for (let i = 0; i <= s.length; i++) {
        if (s[i] ==="(") count++;
        else if (s[i] ===")" && count > 0) count--;
        else if (s[i] ===")") count++;
    }

    return count === 0;
}