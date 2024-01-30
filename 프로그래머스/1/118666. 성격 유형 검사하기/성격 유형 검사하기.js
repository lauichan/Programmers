function solution(survey, choices) {
    const type = ["R","T","C","F","J","M","A","N"];
    let count = new Array(8).fill(0)
    for (let i = 0; i < survey.length; i++) {
        if (choices[i] > 4) {
            count[type.indexOf(survey[i][1])]+=Math.abs(choices[i] - 4)
        } else if (choices[i] < 4) {
            count[type.indexOf(survey[i][0])]+=Math.abs(choices[i] - 4)
        }
    }
    let result = ""
    for (let j = 0; j < 4; j++) {
        let a = count.slice(2 * j,2 * j + 2);
        console.log(a)
        if (a[0] >= a[1]) {
            result+=type[j*2]
        } else {
            result+=type[j*2+1]
        }
    }
    return result;
}