function solution(s){
    let arr = []
    
    for (let i = 0; i <= s.length; i++) {
        if (s[i] ==="(") arr.push("(")
        else if (s[i] ===")" && arr.at(-1) === "(") arr.pop()
        else if (s[i] ===")") arr.push(")")
    }
    
    return arr.length === 0;
}