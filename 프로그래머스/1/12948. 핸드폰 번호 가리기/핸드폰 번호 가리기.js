function solution(phone_number) {
    let result = [...phone_number];
    for (i = 4; i < result.length; i++) {
        result[result.length - (i + 1)] = "*"
    }
    return result.join("");
}