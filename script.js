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

} */

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



