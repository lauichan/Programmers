function solution(s, skip, index) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    let skipped = alphabet.filter((a) => !skip.split("").includes(a))
    console.log(alphabet.length, skipped.length)
    return s.split("").map((a) => skipped[(skipped.indexOf(a) + index) % skipped.length]).join("")
}