function solution(n, lost, reserve) {
    let count = 0;
    let lost2 = lost.filter((l) => !reserve.includes(l))
    let reserve2 = reserve.filter((r) => !lost.includes(r))
    lost2.sort()
    for (let i = 0; i < lost2.length; i++) {
        if (reserve2.indexOf(lost2[i]-1) >= 0) {
            reserve2.splice(reserve2.indexOf(lost2[i]-1),1)
        } else if (reserve2.indexOf(lost2[i]+1) >= 0) {
            reserve2.splice(reserve2.indexOf(lost2[i]+1),1)
        } else {
            count++
        }
    }
    return n - count;
}