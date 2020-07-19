const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(arrayOfObjects) {
  let winner = arrayOfObjects.find((object) => {return object.result === "W"});
  return (winner) ? winner.year : undefined;
}
