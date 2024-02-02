function solution(today, terms, privacies) {
    let [yeart, montht, dayt] = today.split(".")
    let obj = {}
    terms.forEach((term) => obj[term.split(" ")[0]] = term.split(" ")[1])
    let result = []
    for (let i = 0; i < privacies.length; i++) {
        let [year, month, day] = privacies[i].split(" ")[0].split(".")
        let type = privacies[i].split(" ")[1]
        let ymgap = ((yeart-year) * 12 + (montht-month)) * 28 + (dayt-day)
        let gap = (dayt-day === 0) ? ymgap + 1 : ymgap;
        if (gap/28 >= obj[type]) result.push(i+1)
    }
    return result;
}