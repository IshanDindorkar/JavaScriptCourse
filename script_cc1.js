// Coding Challenge 1 ->
// Accept height and age of 3 players
// Player having highest value for combination -> height + 5 * age, wins

// accepting age values for all players
var agePlayer1 = prompt('Enter age of player 1')
var agePlayer2 = prompt('Enter age of player 2')
var agePlayer3 = prompt('Enter age of player 3')

// accepting height value for all players
var heightPlayer1 = prompt('Enter height of player 1')
var heightPlayer2 = prompt('Enter height of player 2')
var heightPlayer3 = prompt('Enter height of player 3')

// Computing magic figures for all players
var magicValPlayer1 = heightPlayer1 + 5 * agePlayer1
var magicValPlayer2 = heightPlayer2 + 5 * agePlayer2
var magicValPlayer3 = heightPlayer3 + 5 * agePlayer3

// Mutual comparison of magic figures for all players

if (magicValPlayer1 > magicValPlayer2 && magicValPlayer1 > magicValPlayer3) {
    alert('Player 1 is winner!!!')
} else if (magicValPlayer2 > magicValPlayer1 && magicValPlayer2 > magicValPlayer3) {
    alert('Player 2 is winner!!!') 
} else {
    alert('Player 3 is winner!!!')
}