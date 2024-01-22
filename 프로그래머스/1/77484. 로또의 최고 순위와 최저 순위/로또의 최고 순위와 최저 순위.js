function solution(lottos, win_nums) {
    let min = lottos.filter((i) => win_nums.includes(i)).length;
    let max = min + lottos.filter((i) => i === 0).length;
    min = (min === 0) ? 1 : min;
    max = (max === 0) ? 1 : max;
    return [7-max, 7- min]
}