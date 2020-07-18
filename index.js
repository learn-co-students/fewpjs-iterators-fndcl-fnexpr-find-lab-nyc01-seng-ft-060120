const testVar = {};

function testFunc() {
  return "hi";
}

const superbowlWin = (objectsArray) => {
  let result = objectsArray.find(superbowl => superbowl.result === "W")
  if(result) return result.year
  return undefined
};
