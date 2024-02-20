/*Функция для проверки длины строки.*/
const compareLength = (incomingString = '', maxLength = 1) => incomingString.length <= maxLength;


/* Функция для проверки, является ли строка палиндромом*/

function isPalindrome (testableString = ''){
  testableString = testableString.replaceAll(' ', '').toLowerCase();
  let invertedString = '';
  for (let i = testableString.length - 1; i >= 0; i--){
    invertedString += testableString[i];
  }
  return (invertedString === testableString);
}

/*Функция принимает строку, извлекает содержащиеся в ней цифры от 0 до 9
 и возвращает их в виде целого положительного числа.
 Если в строке нет ни одной цифры, функция должна вернуть NaN
 */
function extractNumbers (someInput){
  let tempResult = '';
  let result = 0;

  someInput = someInput.toString();

  for (let i = 0; i <= someInput.length - 1; i++){
    if(!isNaN(parseInt(someInput[i],10))){
      tempResult += parseInt(someInput[i],10);
    }
  }

  result = parseInt(tempResult,10);
  return result;
}

