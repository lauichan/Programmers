function solution(s) {
    const strdata = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    let result = s
    for (let i = 0; i < strdata.length; i++) {
        result = result.replaceAll(strdata[i],i)
    }
    return parseInt(result);
}