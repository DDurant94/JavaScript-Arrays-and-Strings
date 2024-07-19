
// Task One
console.log("Question One Task One");

let fruits = ['apple', 'banana', 'orange'];

// original
console.log(`Original Arry: ${fruits}`);

function addingFruit (fruit) {
  fruits.push(fruit);
}
// added to
addingFruit("blue berry")
console.log(`adding element to the end .push() method ${fruits}`);

function removingFruit() {
  fruits.pop();
}
// removing last element
removingFruit()
console.log(`removing last element .pop() method${fruits}`);






// Task Two
console.log("Question One Task Two");

let numbers = [3, 1, 5, 2, 4];

// Sorting numbers in ascending order 
function sortingNums() {
  let sortedList = numbers.sort((a,b) => a-b);
  return sortedList
}
console.log(`.sort() method: ${sortingNums()} Sorting numbers in ascending order`);



// Taking each number and multiplying it by 2 
function mappingNums(){
  return numbers.map(num => num * 2)

}
console.log(`.map() method: ${mappingNums()} Taking each number and multiplying it by 2 `);


// Filtering out all the even number and leaving odd numbers
function filteringNums(){
  return numbers.filter(num => num % 2 != 0)
  
}
console.log(`.filter() method: ${filteringNums()} Filtering out all the even number and leaving odd numbers`);

function reducingNums(){
  return numbers.reduce((valueHold,nextNum) => valueHold + nextNum, 0)
}
console.log(`Total of all numbers in Arry ${reducingNums()} original Arry ${numbers} .reduce() method`);
