// Task One

let message = "Hello, World!";

function stringLength(sentence) {
  let totalLength = sentence.length;
  return totalLength
}
console.log("Question Two Task One");
console.log(`The length of '${message}' is ${stringLength(message)}`);

// Task Two

let text = "Hello, World!";

function convertingCaseUpper(textToConvert){
  let newText = textToConvert.toUpperCase();
  return newText
}

function convertingCaseLower(textToConvert2){
  let newText2 = textToConvert2.toLowerCase();
  return newText2
}
console.log("Question Two Task Two");
console.log(`'${text}' is the original text that has now been converted by using .toUpperCase(): ${convertingCaseUpper(text)}`);
console.log(`'${text}' is the original text that has now been converted by using .toLowerCase(): ${convertingCaseLower(text)}`);

// Task Three

let sentence1 = "The quick brown fox jumps over the lazy dog";

function stringExtration(string,start,stop){
  let match = string.substring(start,stop)
  return match
}
console.log("Question Two Task Three");
console.log(`Using the .substring() method: '${stringExtration(sentence1,4,16)}' has been extracted as a substring`);

// Task Four

let sentence2 = "The quick brown fox";

function splittingString(textToSplit,whatToSplitAt) {
  let splitString = textToSplit.split(`${whatToSplitAt}`)
  return splitString
}


console.log("Question Two Task Four");
console.log(`Using the .split() method to split the text and make it into an array where we want it at: ${splittingString(sentence2," ")}. I split the text at each space`);