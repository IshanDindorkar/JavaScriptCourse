// declaring variables to store string value
/* var firstName = "Ishan";
var lastName = "Dindorkar"

console.log("Hello ", firstName, lastName)

// decalring variable to store numeric value
var age = 30
console.log("Your age is ", age)

// decalring variable to store true or false
var fullAge = true
console.log("Is it your full age?", fullAge)

// lets see what happens when we mix up variables of different types -
console.log(firstName + lastName + age)
// this phenomenon is called type coercion 

// test undefined ...
var job
console.log("Value of job variable should be undefined ->",job)

// test variable mutation
age = "thirty six"
console.log("Changed type of value stored in age ...", age)

// use prompt ...
var isMarried = prompt("Are you married?")
console.log("Response captured ...", isMarried)

// use alert ...
if (isMarried === 'yes' || isMarried === 'Yes')  {
    alert("Congratulations!!!")
} else {
    alert("Get married soon!!!")
}

// use if-else construct
var age = prompt("Enter your age, Ishan");

if (age < 20) {
    alert("Ishan is a teenager.")
} else if (age >= 20 && age < 30) {
    alert("Ishan is a man.")
} else {
    alert("Ishan is old.")
}

// use of switch-case construct
var oocupation = "CEO" 
occupation = prompt("What do you do, Ishan?")

switch (occupation) {

    case 'teacher': {
        alert("Ishan is a teacher.")
        break;
    }
    case 'driver': {
        alert("Ishan is helping moving stuff.")
        break;    
    }
    case 'engineer': {
        alert("Ishan is helping build stuff.")
        break;
    }
    default: {
        alert("Ishan is doing something")
    } 

} 

// use functions ...

// calculating age of person
function calculateAge(yearOfBirth) {
    var age = 2018 - yearOfBirth
    return age
}

// calling previous function to calculate years left for retirement
function yearsUntilRetirement(name, yearOfBirth) {
    var age = calculateAge(yearOfBirth)
    var yearsUntilRetirement = 65 - age
    if (yearsUntilRetirement < 0) {
        alert(name + ' is retired now.')
    } else {
        alert(name + ' will retire in ' + yearsUntilRetirement + ' years.')
    }
}

var yearOfBirthIshan = prompt('Which year you was born, Ishan?')
var ageIshan = calculateAge(yearOfBirthIshan)
alert('Age of Ishan is ' + ageIshan)
yearsUntilRetirement('Ishan', yearOfBirthIshan)

// Understanding difference b/w function expression and function statement

// Function expression ...
function addNumbers(num1, num2) {
    var sum = num1 + num2
    return sum
}
var sum = addNumbers(2,3)
alert('Sum of given numbers using function expression is ' + sum)

// Function statement ...
var addGivenNos = function(num1, num2) {
    num1 + num2
}
alert('Sum of given numbers using function statement is ' + addGivenNos)

// Arrays ...
// Two ways of defining an array -
// 1. Using [] ->
// Profile comprises of first name, last name, age and profession in the order
var profileIshan = ['Ishan', 'Dindorkar', 30, 'S/W Architect']

// 2. Using keyword Array ->
// var profileIshan = new Array('Ishan', 'Dindorkar', 30, 'S/W Architect')

// to retrieve value of specific element from array
console.log('Lets print last name', profileIshan[1])
// above statement must print value as Dindorkar

// some commonly used functions ...
// adding another element to profile - 'is married?' at the end of array
profileIshan.push('true')
console.log('New profile for Ishan!', profileIshan)

// adding prefix for person at the beginning of array
profileIshan.unshift('Mr.')
console.log('Some more details for Ishan!', profileIshan)

// removing last element from the array
var lastElement = profileIshan.pop()
console.log('Ejecting last element from profile, Ishan', lastElement)

// removing first element from the array
var firstElement = profileIshan.shift()
console.log('Removing first element from profile, Ishan!', firstElement)

// finding out if Ishan is a S/W Architect
var index = profileIshan.indexOf('S/W Architect')
if (index === -1) {
    console.log('Ishan is NOT a S/W Architect.')
} else {
    console.log('Ishan is a S/W Architect.')
}

// Objects ...
// Two methods of defining objects ->
// Method 1 -
var ishan = {
    firstName: 'Ishan',
    lastName: 'Dindorkar',
    age: 30,
    designation: 'S/W Architect',
    married: true
}

// access properties of newly created object
console.log('Designation for Ishan', ishan['designation'])
console.log('Age', ishan.age)

// Method 2 -
var person = new Object()
person.firstName = 'Ishan'
person.lastName = 'Dindorkar'
person['age'] = 30
person['designation'] = 'S/W Architect'
person['married'] = true

// print values for new object created
console.log('Person profile', person)

// Load an object with function
var ishan = new Object()
ishan.firstName = 'Ishan'
ishan.lastName = 'Dindorkar'
ishan.yearOfBirth = 1988
ishan.designation = 'S/W Architect'

// Adding function a.k.a method to ishan
ishan.calculateAge = function() {
    // return 2018 - this.yearOfBirth
    // if we want to assign value of age to object instead of returning ...
    this.age = 2018 - this.yearOfBirth
}

ishan.calculateAge()
console.log("Ishan's age is", ishan.age)

// Iterative loops ...
var names = ['Name 1', 'Name 2', 'Name 3', 'Name 4', 'Name 5']

console.log('Printing names using for loop ...')
// using for loop to print names ...
for (var index = 0; index < names.length; index++) {
    console.log(names[index])
}

console.log('Printing names using while loop ...')
// using while loop to print names ...
var index = 0
while (index < names.length) {
    console.log(names[index])
    index++
}

// using break statement to stop loop ...
for (var index = 0; index < names.length; index++) {
    console.log('Printing name', names[index], '. Waiting for loop to break ...')
    if (index === 2) {
        console.log('Loop is breaking ...')
        break
    }
}

// using continue statement to skip ...
for (var index = 0; index < names.length; index++) {
    if (index === 2) {
        console.log('Skipping printing name when index is 2')
        continue
    }
    console.log('Printing name', names[index], '. Waiting for skipping an element ...')
}

// Hoisting ...

// Demonstrating hoisting with function declaration ... 
calculateAge(1988)
function calculateAge(year) { // this is function declaration ...
    console.log('Age', 2018 - year)
}

// Demonstrating hoisting with function expression ...
// retirement(1990)
// The above statement doesn't work with function expression
var retirement = function(year) { // this is function expression ...
    console.log('retirement age', 65 - (2018 - year))
}
retirement(1990)

// Demonstrating hoisting with variables ...
console.log(age) 
// if we are defining age variable in next line, output will be "undefined"
// if we are not defining age variable in next line, output will be "Reference error"
var age = 30

// Scope Chaining ...
var a = "Hey there!"
outerFunction()
function outerFunction() {
    var b = "Ishan here."
    console.log("Trying to access variable a from outerFunction!", a)
    innerFunction()
    function innerFunction() {
        var c = "This is an example of scope chaining."
        console.log(a + " " + b + " " + c)
        innermostFunction()
    } 
}

function innermostFunction() {
    // this statement will give ReferenceError since c is not within scope
    // of innermostFunction
    // console.log("Trying to access variable c from innermostFunction!", c)

    console.log("Trying to access variable a from innermostFunction!", a)
    
    // this will also not work since b is defined in a different scope
    // console.log("Trying to access variable b from innermostFunction!", b)
}

// 'this' keyword ...
// console.log('Value of this in global context.', this)

calculateAge(1988)
function calculateAge(year) {
    console.log(2018 - year)
    console.log(this)
}
*/

var ishan = {
    name: 'Ishan',
    birthYear: 1988,
    calculateAge: function() {
        console.log(2018 - this.birthYear)
        console.log(this)
    }   
}

ishan.calculateAge()