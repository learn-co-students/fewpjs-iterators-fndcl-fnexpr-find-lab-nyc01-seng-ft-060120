const testVar = {};

function testFunc() {
  return "hi";
}

const superbowlWin = (objectsArray) => {
  let result = objectsArray.find(superbowl => superbowl.result === "W")
  return !!result ? result.year : undefined
};
