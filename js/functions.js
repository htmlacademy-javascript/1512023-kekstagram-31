
const compareLength = (incomingString = '', maxLength = 1) => incomingString.length <= maxLength;

function isPalindrome (testableString = ''){
  testableString = testableString.replaceAll(' ', '').toLowerCase();
  let invertedString = '';
  for (let i = testableString.length - 1; i >= 0; i--){
    invertedString += testableString[i];
  }
  return (invertedString === testableString);
}

function extractNumbers (someInput = ''){
  let tempResult = '';
  let result = 0;

  for (let i = 0; i <= someInput.toString().length - 1; i++){
    if(!isNaN(parseInt(someInput[i],10))){
      tempResult += parseInt(someInput[i],10);
    }
  }
  result = parseInt(tempResult,10);
  return result;
}

const convertTimeStrToMinutes = (timeInStr = '') => {
  const [hours, minutes] = timeInStr.split(':').map(Number);
  return hours * 60 + minutes;
};

function isWithinWorkTime (startDayTimeStr, endDayTimeStr, startMeetingTimeStr, meetingDurationNum){
  const startDayMinutes = convertTimeStrToMinutes(startDayTimeStr);
  const endDayMinutes = convertTimeStrToMinutes(endDayTimeStr);
  const startMeetingMinutes = convertTimeStrToMinutes(startMeetingTimeStr);
  const endMeetingMinutes = startMeetingMinutes + meetingDurationNum;
  return (startMeetingMinutes >= startDayMinutes && endMeetingMinutes <= endDayMinutes);
}

compareLength();
isPalindrome();
extractNumbers();
isWithinWorkTime();
