import {getRandomInteger, createRandomIdFromRangeGenerator, getRandomArrayElement} from './utils.js';
import {getArraysForDescriprions} from './arrays-for-descriptions.js';

const PHOTO_ID_MIN = 1;
const PHOTO_ID_MAX = 25;
const LIKES_MIN = 15;
const LIKES_MAX = 200;
const COMMENTS_COUNT_MIN = 0;
const COMMENTS_COUNT_MAX = 30;
const DESCRIPTIONS_COUNT = 25;
const AVATAR_ID_MIN = 1;
const AVATAR_ID_MAX = 6;
const {MESSAGE_SOURCE, NAMES} = getArraysForDescriprions();

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

const getIdPhoto = createIdGenerator(PHOTO_ID_MIN,PHOTO_ID_MAX);
const getIdUrl = createIdGenerator(PHOTO_ID_MIN,PHOTO_ID_MAX);
const getIdForDescription = createIdGenerator(PHOTO_ID_MIN,PHOTO_ID_MAX);
const getCommentsID = createRandomIdFromRangeGenerator(COMMENTS_COUNT_MIN, COMMENTS_COUNT_MAX);

const createComments = () => ({
  id: getCommentsID(),
  avatar: `img/avatar-${getRandomInteger(AVATAR_ID_MIN,AVATAR_ID_MAX)}.svg`,
  message: getRandomArrayElement(MESSAGE_SOURCE),
  name: getRandomArrayElement(NAMES),
});

const createPhotoDescription = () => ({
  id: getIdPhoto(),
  url: `photos/${getIdUrl()}.jpg`,
  description: `The description of the photo Nr.${getIdForDescription()}.`,
  likes: getRandomInteger(LIKES_MIN, LIKES_MAX),
  comments: Array.from({length:getRandomInteger(COMMENTS_COUNT_MIN,COMMENTS_COUNT_MAX)}, createComments),
});

const photoDescriptions = Array.from({length: DESCRIPTIONS_COUNT}, createPhotoDescription);

export {photoDescriptions};
