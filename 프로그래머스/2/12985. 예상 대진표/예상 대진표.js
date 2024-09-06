function solution(n,a,b) {
    let aNum = a;
    let bNum = b;
    let round = 1;
    while (round < n) {
        aNum = Math.ceil(aNum / 2);
        bNum = Math.ceil(bNum / 2);
        if (aNum === bNum) break;
        round++;
    }
    return round;
}