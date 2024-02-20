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

/*Функция принимает строку, извлекает содержащиеся в ней цифры от 0 до 9
 и возвращает их в виде целого положительного числа.
 Если в строке нет ни одной цифры, функция должна вернуть NaN
 */

function extractNumbers (charSet){
  let stringSet = '';
  let tempResult = '';
  let result = 0;

  if (isNaN(charSet)){
    stringSet = charSet;
  }else {
    stringSet = charSet.toString();
  }

  for (let i = 0; i <= stringSet.length - 1; i++){
    if(!isNaN(parseInt(stringSet[i],10))){
      tempResult += parseInt(stringSet[i],10);
    }
  }

  result = parseInt(tempResult,10);
  return result;
}

