function solution(a, b) {
    const month = [31,29,31,30,31,30,31,31,30,31,30,31];
    const day = ["FRI","SAT","SUN","MON","TUE","WED","THU"];
    let allday = 0;
    for (let i = 0; i < a - 1; i++) {
        allday += month[i];
    }
    return day[(allday + (b - 1)) % 7]
}