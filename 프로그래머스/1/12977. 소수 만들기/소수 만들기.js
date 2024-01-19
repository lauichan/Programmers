function solution(nums) {
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                let num = nums[i] + nums[j] + nums[k];
                let count = 0;
                for (let l = 0; l < num; l++) {
                    if (num % l === 0) count++;
                }
                if (count === 1) result++;
            }
        }
    }
    return result
}