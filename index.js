const testVar = {}

function testFunc() {
    return "hi"
}

const record = [
    { year: "2018", result: "L" },
    { year: "2017", result: "W" },
    { year: "2016", result: "N/A" }
]
const superbowlWin = aoo => {
    const winningYear = aoo.find(obj => obj.result === "W")
    return winningYear ? winningYear.year : undefined
}

console.log(superbowlWin(record))