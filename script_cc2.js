// Coding Challenege 2 ->
// Trying to make use of object concept for this challenge. But not necessary to use it.
var codingChallenge2 = new Object()

codingChallenge2.birthYears = new Array(3)
codingChallenge2.ages = new Array(3)

// method to get birth year of all persons
codingChallenge2.getBirthYear = function() {
    var index = 0
    while (index < this.birthYears.length) {
        this.birthYears[index] = prompt('Enter birth year of person ' + (index + 1) )
        index++
    }
}

// method to compute age of a person based on year of birth
codingChallenge2.calculateAge = function(birthYear) {
    return 2018 - birthYear
}

// method to print ages of all persons
codingChallenge2.printAges = function() {
    var index = 0
    while (index < this.birthYears.length) {
        var personAge = this.calculateAge(this.birthYears[index])
        this.ages[index] = personAge
        console.log('Age of person', index + 1, personAge)
        index++
    }
}

// method to determine if a person is of full age?
codingChallenge2.printFullAge = function() {
    var isFullAge = new Array(this.ages.length)
    var index = 0
    while (index < this.ages.length) {
        if (this.ages[index] >= 18) {
            isFullAge[index] = true
        } else {
            isFullAge[index] = false
        }
        index++
    }

    return isFullAge
}

codingChallenge2.getBirthYear()
codingChallenge2.printAges()
console.log(codingChallenge2.printFullAge(this.birthYears))