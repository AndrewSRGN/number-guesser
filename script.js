let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
return Math.floor(Math.random() * 10);
}

const compareGuesses = (humanGuess, computerGuess, secretTarget) => {
    return getAbsoluteDistance(secretTarget - humanGuess) < getAbsoluteDistance(secretTarget - computerGuess);
}

const updateScore = (winner) => {
    if (winner === 'human') {
        humanScore++;
    } else if (winner === 'computer') {
        computerScore++;
    }
}

const advanceRound = () => {
    currentRoundNumber++;
}

const getAbsoluteDistance = (num1, num2) => {
    return Math.abs(num1 - num2);
}

