let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

/**
 * Generates a secret target number between 0 and 9.
 * @return {number} - The secret target.
 */
const generateTarget = () => {
    return Math.floor(Math.random() * 10);
}

/**
 * Compares the human and computer guesses to the secret target.
 * @param {number} humanGuess - The human's guess.
 * @param {number} computerGuess - The computer's guess.
 * @param {number} secretTarget - The secret target.
 * @return {boolean} - True if the human wins, false if the computer wins.
 */
const compareGuesses = (humanGuess, computerGuess, secretTarget) => {
    return getAbsoluteDistance(secretTarget, humanGuess) < getAbsoluteDistance(secretTarget, computerGuess);
}

/**
 * Updates the human and computer scores.
 * @param {string} winner - The winner of the round, either 'human' or 'computer'.
 */
const updateScore = (winner) => {
    // If the human wins, increment the human score.
    if (winner === 'human') {
        humanScore++;
    }
    // If the computer wins, increment the computer score.
    if (winner === 'computer') {
        computerScore++;
    }
}

/**
 * Increments the current round number.
 * @return {void}
 */
const advanceRound = () => {
    // Increment the current round number.
    currentRoundNumber++;
}

/**
 * Calculates the absolute distance between two numbers.
 * @param {number} num1 - The first number.
 * @param {number} num2 - The second number.
 * @return {number} - The absolute distance between num1 and num2.
 */
const getAbsoluteDistance = (num1, num2) => {
    return Math.abs(num1 - num2);
}

