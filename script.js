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
*/

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