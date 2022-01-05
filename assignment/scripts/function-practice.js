console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  console.log('Hello,', name, '!');
  return;
}
helloName('Brant');
// Remember to call the function to test


// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber,secondNumber){
  answer = firstNumber + secondNumber;
  return answer;
} // return firstNumber + secondNumber;

console.log('running addNumbers:', addNumbers(4,20));

// 4. Function to multiply three numbers & return the result
function multiplyThree( num1, num2, num3 ){
  answer = num1 * num2 * num3;
  return answer;
}

console.log('running muliplyThree:', multiplyThree(4,5,6));


// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  }
  else {
    return false;
  }
}
// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.

function getLast( array ) {
lastItem = array[array.length - 1]
return lastItem;
}

let sandwich = [ 'bottom bun', 'turkey', 'ham', 'cheese', 'tomato', 'mayo', 'top bun' ]
console.log('last item in array is:', getLast(sandwich) );


// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find

let planets = [ 'mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune' ];
let numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function find( value, array ){
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value){
      return true;
    }
  }
  return false; // Not sure why the return needs to be outside of the for loop?
}               // This does work though (with thanks to Brandon!)

console.log('is neptune a planet?:', find('neptune', planets));
console.log('is pluto a planet?:', find('pluto', planets));
console.log('is 5 in my list?:', find(5, numbers));
console.log('is 0 in my list?:', find(0, numbers));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise

function isFirstLetter(letter, string) {
  if(letter === string.charAt(0)){  // also could use .substr(0, 1)
    return true;
  }
  else {
    return false;
  }

}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array

function sumAll( array ) {
  let sum = 0;
  for( i in array ){
    sum += array[i];
    i++;
  }
  return sum;
}

console.log('sum of all numbers in array', sumAll(numbers));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.

let randomNum1 = [4, -2, 0, 69, 0.5, -10]   // mix of positives
let randomNum2 = [-2, -40, -55, 0]          // only negatives
let positiveNum = []                        // blank array for function

function bePositive(array1, array2) {
  for (x in array1){
    if (array1[x] > 0){
      array2.push(array1[x])  // pushes positive numbers to new array
      x++;
    }
    else {
      x++;                  // skips to next number in array
    }
  }
  console.log(array2);      // reports positive numbers in new array
  array2.length = 0;        // clears out array to be used again
}

bePositive(randomNum1, positiveNum)
bePositive(randomNum2, positiveNum)


// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!

//////// Edabit - Find the Perimeter of a Rectangle ////////
////// https://edabit.com/challenge/XnJ24rWW7iJkNrtsh //////

// Create a function that takes length and width and finds the perimeter of a rectangle.

function findPerimiter (h, w) {
  return 2 * ( h + w );
}

console.log('Perimiter of a 4" x 6" rectangle is:', findPerimiter(4, 6), 'inches!');        // 20
console.log('Perimiter of a 10" x 0.5" rectangle is:', findPerimiter(10, 0.5), 'inches!');  // 21
console.log('Perimiter of a 420" x 69" rectangle is:', findPerimiter(420, 69), 'inches!');  // 978
