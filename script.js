////////////////////////////////
/////// TASKS NUMBER 1 /////////
//////////////////////////////// 

//// 1. Question: Reverse a string without using the built-in reverse() method.
function reverse1(str) {
    let value = "";
    for (let i = str.length - 1; i >= 0; i--) {
        value += str[i];
    }
    return value;
}
console.log(reverse1("idiraF niassuH rarsI"));


////////////////////////////////
/////// TASKS NUMBER 2 /////////
//////////////////////////////// 

//// 2. Question: Count the number of vowels in a given string.
function Vowelnumber(str) {
    let vowelCounter = 0;

    let string= str.toString();


    for(i=0; i<=string.length-1; i++){

        if (string.charAt(i) == "a" || string.charAt(i) == "e" || string.charAt(i) == "i" || string.charAt(i) == "o" || string.charAt(i) == "u") {
            vowelCounter += 1;
        }
    }
return vowelCounter;
}

console.log(Vowelnumber("israr"));




////////////////////////////////
/////// TASKS NUMBER 3 /////////
//////////////////////////////// 

//// 3. Question: Convert the first letter of each word in a sentence to uppercase.
function firstWordUpperCase(str) {
    let word = str.toLowerCase().split(' ');

    for (let i = 0; i < word.length; i++) {
        word[i] = word[i].charAt(0).toUpperCase() + word[i].substring(1);
    }
    return word.join(' ');
}
console.log(firstWordUpperCase("hi my name is israr hussain faridi"));




////////////////////////////////
/////// TASKS NUMBER 4 /////////
//////////////////////////////// 

//// 4. Question: Check if a string is a palindrome.
let value = 121;

const check = () => {
    var resvalue = value.toString().split('').reverse().join('');
    var strValue = value.toString();

    if (resvalue == strValue) {
        return "Palindrome";
    } else {
        return "Not Palindrome"
    }
}

console.log(check());






////////////////////////////////
/////// TASKS NUMBER 5 /////////
//////////////////////////////// 

//// 5. Question: Find the sum of all positive numbers in an array.
function sumPositiveNumber(arr) {
    let sum = 0;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum += arr[i];
        }
    }
    return sum;
}

let allNumber = [2, 5, -2, 9, -4, -9, 0, 1];
let total = sumPositiveNumber(allNumber);
console.log(total);




////////////////////////////////
/////// TASKS NUMBER 6 /////////
//////////////////////////////// 

//// 6. Question: Find the index of the first occurrence of a specific element in an array.
const FirstIndexNumArray = [10, 20, 30, 20, 40];
const index = FirstIndexNumArray.indexOf(10); 
console.log(index);





////////////////////////////////
/////// TASKS NUMBER 7 /////////
//////////////////////////////// 

//// 7. Question: Remove all duplicates from an array without built-in methods.

let arr=[1,1,3,4,5,5,7,7,11,11,6,6,55];

let uniarr=[...new Set(arr)];

console.log(uniarr);






////////////////////////////////
/////// TASKS NUMBER 8 /////////
//////////////////////////////// 

//// 8. Question: Sort the array in ascending and descending without built-in methods.
let num=[200,100,2,3,55,10,4]
function sorter(array) {
    var swap, done = false, swapped;
    //is it done?
    while (!done) {
        swapped = 0;
        for (i = 1; i < array.length; i++) {
            //Compare
            if (array[i - 1] > array[i]) {
                //swap
                swap = array[i];
                array[i] = array[i - 1];
                array[i - 1] = swap;
                swapped = 1;
            };
            if (swapped == 0) {
                done = true;
            }
        };
    };
    return array;
};
console.log(sorter(num));




////////////////////////////////
/////// TASKS NUMBER 9 /////////
//////////////////////////////// 

//// 9. Question: Print all even numbers between 1 and 20 using a while loop.

const count = { index: 0, n1: 20 }

while(count.index < count.n1) {
  console.log('Even', count.index += 2)
}



//////////////////////////////////
/////// TASKS NUMBER 10 /////////
//////////////////////////////// 

////10. Question: Calculate the factorial of a number using a do-while loop.

function calculateFactorial(number) {
    if (number < 0) {
        return "Factorial is not defined for negative numbers.";
    }

    // Initialize variables
    let factorial = 1;
    let i = 1;

    do {
        factorial *= i;
        i++;
    } while (i <= number);

    return factorial;
}

const inputNumber = 5;
const result = calculateFactorial(inputNumber);
console.log(`The factorial of ${inputNumber} is: ${result}`);








//////////////////////////////////
/////// TASKS NUMBER 11 /////////
//////////////////////////////// 
//// 11. Question: Iterate through the properties of an object using a for-in loop.
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    email: 'john.doe@example.com'
};

for (let property in person) {
    if (person.hasOwnProperty(property)) {
        console.log(`${property}: ${person[property]}`);
    }
}


//////////////////////////////////
/////// TASKS NUMBER 12 /////////
//////////////////////////////// 

//// 12. Question: Loop through an array using a for-of loop and double each element.

const numbers = [1, 2, 3, 4, 5];

for (let number of numbers) {
    let doubledValue = number * 2;
    console.log(`Original: ${number}, Doubled: ${doubledValue}`);
}








//////////////////////////////////
/////// TASKS NUMBER 13 /////////
//////////////////////////////// 
//// Question: Check if a number is even or odd and return a corresponding message.

function checkEvenOrOdd(number) {
    if (number % 2 == 0) {
        return `${number} is even.`
    } else {
        return `${number} is odd.`
    }
}

const testNumber = 8;
const resultMessage = checkEvenOrOdd(testNumber);
console.log(resultMessage);







//////////////////////////////////
/////// TASKS NUMBER 14 /////////
//////////////////////////////// 
//// 14. Question: Find the maximum of three numbers using nested ternary operators.
function findMax(a, b, c) {
    const max = (a > b) ? (a > c) ? a : c : (b > c) ? b : c;

    return `The maximum of ${a}, ${b}, and ${c} is: ${max}`;
}

const num1 = 25;
const num2 = 18;
const num3 = 36;

const maxResult = findMax(num1, num2, num3);
console.log(maxResult);




//////////////////////////////////
/////// TASKS NUMBER 15 /////////
//////////////////////////////// 
//// 15. Question: Determine if a year is a leap year or not.
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
const yearToCheck = 2024;
if (isLeapYear(yearToCheck)) {
    console.log(`${yearToCheck} is a leap year.`);
} else {
    console.log(`${yearToCheck} is not a leap year.`);
}