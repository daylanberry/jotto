/**
 * @method getLetterMatchCount
 * @param {string} guessedWord - guessed word
 * @param {string} secretWord - secret word.
 * @returns {number} - Number of letters matched between guessedWord and secretWord
 */

export function getLetterMatchCount(guessedWord, secretWord) {
  const secretLetterSet = new Set(secretWord);
  const guessedWordSet = new Set(guessedWord);

  return [...secretLetterSet].filter(letter => guessedWordSet.has(letter)).length
};