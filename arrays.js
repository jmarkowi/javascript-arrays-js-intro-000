var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, newString) {
  return [newString, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, newString) {
  array = [newString, ...array]
  return array
}
