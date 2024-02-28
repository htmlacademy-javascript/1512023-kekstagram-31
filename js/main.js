const PHOTO_ID_MIN = 1;
const PHOTO_ID_MAX = 25;
const LIKES_MIN = 15;
const LIKES_MAX = 200;
const COMMENTS_COUNT_MIN = 0;
const COMMENTS_COUNT_MAX = 30;
const DESCRIPTIONS_COUNT = 25;

const MESSAGE_SOURCE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.',
  'В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.',
  'Как можно было поймать такой неудачный момент?!'
];

function getRandomInteger (min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

function createRandomIdFromRangeGenerator (min, max) {
  const previousValues = [];
  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

function createIdGenerator (min, max) {
  let lastGeneratedId = min;
  return function () {
    if (lastGeneratedId > max){
      return null;
    }
    lastGeneratedId ++;
    return lastGeneratedId - 1;
  };
}

function getComments (elements) {
  const randomIndex = getRandomInteger(COMMENTS_COUNT_MIN, COMMENTS_COUNT_MAX);
  const commentsArray = [];
  for (let i = 1; i <= randomIndex;i++){
    commentsArray.push(elements[getRandomInteger(0, elements.length - 1)]);
  }
  return commentsArray;
}


const getIdPhoto = createIdGenerator(PHOTO_ID_MIN,PHOTO_ID_MAX);
const getIdUrl = createIdGenerator(PHOTO_ID_MIN,PHOTO_ID_MAX);
const getIdForDescription = createIdGenerator(PHOTO_ID_MIN,PHOTO_ID_MAX);
const getLikesCount = createRandomIdFromRangeGenerator (LIKES_MIN, LIKES_MAX);

const createPhotoDescription = () => ({
  id: getIdPhoto(createIdGenerator()),
  url: `photos/${getIdUrl(createIdGenerator())}.jpg`,
  description: `The description of the photo Nr.${getIdForDescription(createIdGenerator())}.`,
  likes: getLikesCount(createRandomIdFromRangeGenerator()),
  comments: getComments(MESSAGE_SOURCE),
  //coatColor: getRandomArrayElement(COAT_COLORS),
  //eyesColor: getRandomArrayElement(EYES_COLORS),
});


const photoDescriptions = Array.from({length: DESCRIPTIONS_COUNT}, createPhotoDescription);

photoDescriptions();
