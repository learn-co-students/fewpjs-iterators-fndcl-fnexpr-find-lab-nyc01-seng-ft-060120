const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
  let winner = array.find(team => team.result=== "W")
  return winner ? winner.year : undefined
}
