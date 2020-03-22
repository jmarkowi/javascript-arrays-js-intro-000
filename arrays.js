var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, newString) {
  return [newString, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, newString) {
  array.unshift(newString)
  return array
}

function addElementToEndOfArray(array, newString) {
  return [...array, newString]
}

function destructivelyAddElementToEndOfArray(array, newString) {
  array.push(newString)
  return array
}

function accessElementInArray(array, i) {
  return array[i]
}
