const testVar = {}

const record = [
  { year: "2018", result: "L" },
  { year: "2017", result: "L" },
  { year: "2016", result: "N/A" }

]
superbowlWin = (record) => {
   const result = record.find(record => record.result === 'W')
   return result ? result.year : undefined
}

console.log(superbowlWin(record))