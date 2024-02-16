function solution(brown, yellow) {
    const sum = brown + yellow;
    let sqrt = Math.ceil(Math.sqrt(brown + yellow));
    while (true) {
        if (sum % sqrt === 0 && (sqrt >= sum / sqrt)) {
            if ((sqrt - 2) * (sum / sqrt - 2) === yellow) {
                return [sqrt, sum / sqrt];
            }
        }
        sqrt++;
    }
}