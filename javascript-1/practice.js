//////////////////PROBLEM 1////////////////////

// Create a variable called 'myName' that's value is your name

// Code here
let myName = 'bryce';

//////////////////PROBLEM 2////////////////////

// Create a variable called 'faveNum' that's value is your favorite number

//Code here
let faveNum = 22;

//////////////////PROBLEM 3////////////////////

// Create a variable called 'lovesCode' and set it to true

//Code here
let lovesCode = true;

//////////////////PROBLEM 4////////////////////

// Create a function called 'sum' that takes in two parameters, num1 and num2, and returns the sum of those two parameters.

//Code here
function sum(num1, num2) {
	return num1 + num2;
}

//////////////////PROBLEM 5////////////////////

// Create a function called 'lovesCodeChecker' that takes in a single parameter called x. Check to see if x is equal to true.
// If it is, return true as a boolean. If x does not equal true, return false as a boolean

//Code here
function lovesCodeChecker(x){
	if (x === true){
		return true;
	} else {
		return false;
	}
};

//////////////////PROBLEM 6////////////////////

// Create a function called 'oddChecker' that takes in one parameter, num.
// Check to see if the number is even or odd. If it is odd, 
//return 'the number is odd' or return 'the number is even' if it is even.

//Code here
function oddChecker(num) {
	if (num % 2 === 0){
		return 'the number is even';
	} else if (num % 2 !== 0) {
		return 'the number is odd';
  }
};

//////////////////PROBLEM 7////////////////////

// Create a function called 'iLove' that takes in two parameters, name which will be a string 
// and love which will be a string of something you love. Have the function take the 
//two parameters and return a string that says "NAMEPARAM loves LOVEPARAM" with the
// appropriate parameters in the string. e.g. "Bryan loves skateboarding"

//Code Here
function iLove(name, love) {
	return `${name} loves ${love}`
};

//////////////////PROBLEM 8////////////////////

// Create a copy of the faveColors array called 'colorCopy' using slice
const faveColors = ['red', 'green', 'black']

//Code Here
let colorCopy = faveColors.slice();

//////////////////PROBLEM 9////////////////////

// Add a fourth color to the end of the 'colorCopy' array using push

//Code Here
colorCopy.push('blue');

//////////////////PROBLEM 10////////////////////

// Create a new array called 'middleNums' from the numbers array that will capture only the middle numbers (2, 3, 4).
const numbers = [1, 2, 3, 4, 5]

//Code Here
let middleNums = numbers.slice(1,4);

//////////////////PROBLEM 11////////////////////

// Create an object called 'me' that has the following keys: firstName, state, age, and greeter. The value of the firstName key should be your name as a string. The value of the property state should be your current state or providence of residence as a string. The value of age should be your age as a number. greeter should be a method that returns the string 'Hello! My name is NAMEVALUE and I live in STATEVALUE' with the corresponding values. 

//Code Here
let me = {
	firstName: 'bryce',
	state: 'utah',
	age: 22,
	greeter: function(){
		return `Hello! My name is ${this.firstName} and I live in ${this.state}`;
	}
};

//////////////////PROBLEM 12////////////////////

// Create a function called 'bigOrSmall' that takes in one parameter, 'arr', which will be an array of numbers. Inside of the bigOrSmall function, create a new array called 'answers'. Then, loop over the passed in arr parameter, and check to see if the number in the array is GREATER than 100. If it is, push 'big' as a string to the answers array. If the number is LESS than or EQUAL to 100, push 'small' as a string to the answers array. Return the answers array inside of the function.

// Code here
function bigOrSmall(arr){
	let answers = [];
	for (let i = 0; i < arr.length; i++){
		if(arr[i] > 100){
			answers.push('big');
		} else if(arr[i] <= 100){
			answers.push('small');
		}
	} return answers;
};

//////////////////PROBLEM 13////////////////////

// Create a function called 'arrayReverser' that takes in one parameter, 'arr'. Inside of arrayReverser, create an empty array called 'reversed'. Using a for loop, loop over the passed in array IN REVERSE (this means your counter should decrement), and then add each item to the 'reversed' array variable you created. Finally, return the 'reversed' array variable. 

//Code Here
function arrayReverser(arr){
	let reversed = [];
	for(let i = arr.length - 1; i >= 0; i--){
		reversed.push(arr[i]);
	}
	return reversed;
}

//////////////////PROBLEM 14 - 18 Setup////////////////////

// Below is an array, myNumbers. You will be using .map, .filter, .reduce and .forEach to manipulate the array in the following problems.
const myNumbers = [3, 55, 788, 2, 1]


//////////////////PROBLEM 14////////////////////

// First, use .map to create a new array that doubles each number. Call the new array 'doubled'.

// Code Here
let doubled = myNumbers.map(doubledFun)
function doubledFun(num){
	return num * 2;
};
//////////////////PROBLEM 15////////////////////

// Now, use .filter to create a new array containing any numbers that are greater than 100. Call the new array 'filtered'. 

// Code Here
let filtered = myNumbers.filter(filterOneHunna);
function filterOneHunna(num){
	return num > 100;
};
//////////////////PROBLEM 16////////////////////

// Next, use reduce to get the total of the numbers in the array summed together. Store the total in a new variable named 'total'. 

// Code Here
let total = myNumbers.reduce(addFunc);
function addFunc(total, num){
	return total + num;
};

//////////////////PROBLEM 17////////////////////

// Finally, use .forEach to find the index of each item in the array. To begin, create an empty array called 'myNumbersIndex'. Then, use forEach to push each item's index from the myNumbers array into the newly created myNumbersIndex array. 

// Code Here
let myNumbersIndex = [];
myNumbers.forEach(indexFunc);
function indexFunc(){
	for (let i = 0; i < myNumbers.length; i++){
		myNumbersIndex.push([i]);
	}
	return myNumbersIndex;
};

//////////////////PROBLEM 18////////////////////

// Did you know that George Foreman has five sons named George? Go ahead and change everyone's name in the notGeorge array to George using .map. Store the resulting array in a variable named 'forTheLoveOfGeorge'.
const notGeorge = ['Louis', 'Ted', 'Bill', 'Sharon', 'Mark', 'Angela']

// Code Here
let forTheLoveOfGeorge = notGeorge.map(gfunc);
function gfunc(){
	for (let i = 0; i < notGeorge.length; i++){
		if ([i] !== 'george'){
			return 'george';
		}
	}
	return forTheLoveOfGeorge[i];
}

//////////////////PROBLEM 19////////////////////

// Using the people array, filter out everyone that isn't a friend into a new array called 'enemies'. Use .filter(). 
const people = [
	{ name: 'Matt', friend: true, awesomeLevel: 10 },
	{ name: 'Matias', friend: true, awesomeLevel: 10 },
	{ name: 'Catie', friend: false, awesomeLevel: 3 },
	{ name: 'Samantha', friend: false, awesomeLevel: 4 },
	{ name: 'Jonathan', friend: true, awesomeLevel: 8 },
	{ name: 'Josh', friend: true, awesomeLevel: 7 }
]

// Code Here
let enemies = people.filter(foeFunc);
function foeFunc(){
	if (people.friend == false){
		enemies.push(people.friend)
	}
	return enemies
}

//////////////////PROBLEM 20////////////////////

// Using the people array above, get a total of the awesomeLevel from all the people, and store that value in a variable named 'totallyAwesome'. Use .reduce().

// Code Here
let totallyAwesome = people.reduce(howAwesome)
function howAwesome(total, num){
	return total + num;
}