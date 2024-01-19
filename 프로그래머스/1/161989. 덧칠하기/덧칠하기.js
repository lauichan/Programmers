function solution(n, m, section) {
    let result = 0;
    for (let i = 1; i < n + 1; i++) {
        for (let j = 0; j < section.length; j++){
            if (i === section[j]) {
                i = i + m;
                result++;
            }   
        }
    }
    return result;
}