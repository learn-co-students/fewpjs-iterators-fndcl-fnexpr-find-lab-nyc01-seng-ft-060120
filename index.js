const testVar = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
]


let superbowlWin = (array) => {
  let firstWinner = array.find(e => e.result === 'W')
  if (!!firstWinner) {return firstWinner.year}
  else {return undefined}
}

superbowlWin(testVar)