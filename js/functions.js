/*Функция для проверки длины строки.*/

function compareLength (incomingString, maxLength){
  return (incomingString.length <= maxLength);
}

/* Функция для проверки, является ли строка палиндромом*/

function isPalindrome (testableString){
  const normalisedString = testableString.replaceAll(' ', '').toLowerCase();
  let invertedString = '';
  for (let i = normalisedString.length - 1; i >= 0; i--){
    invertedString += normalisedString[i];
  }
  return (invertedString === normalisedString);
}

