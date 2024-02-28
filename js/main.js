const PHOTO_ID_MIN = 1;
const PHOTO_ID_MAX = 25;
const LIKES_MIN = 15;
const LIKES_MAX = 200;

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
      console.error('Перебраны все числа из диапазона от ' + min + ' до ' + max);
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
      console.error('Перебраны все числа из диапазона от ' + min + ' до ' + max);
      return null;
    }
    lastGeneratedId ++;
    return lastGeneratedId - 1;
  };
}

const getRandomArrayElement = (elements) =>
elements[getRandomInteger(0, elements.length - 1)];

console.log(getRandomArrayElement(MESSAGE_SOURCE));

const getIdPhoto = createIdGenerator(PHOTO_ID_MIN,PHOTO_ID_MAX);
const getIdUrl = createIdGenerator(PHOTO_ID_MIN,PHOTO_ID_MAX);
const getIdForDescription = createIdGenerator(PHOTO_ID_MIN,PHOTO_ID_MAX);
const getLikesCount = createRandomIdFromRangeGenerator (LIKES_MIN, LIKES_MAX);
const getIndexForComments = createRandomIdFromRangeGenerator (LIKES_MIN, LIKES_MAX);

const getComments = getRandomArrayElement(MESSAGE_SOURCE);


/*Структура каждого объекта должна быть следующей:

id, число — идентификатор опубликованной фотографии. Это число от 1 до 25.
Идентификаторы не должны повторяться.

url, строка — адрес картинки вида photos/{{i}}.jpg, где {{i}} — это число от 1 до 25.
Адреса картинок не должны повторяться.

description, строка — описание фотографии. Описание придумайте самостоятельно.

likes, число — количество лайков, поставленных фотографии. Случайное число от 15 до 200.

comments, массив объектов — список комментариев, оставленных другими пользователями
 к этой фотографии.
 Количество комментариев к каждой фотографии — случайное число от 0 до 30.
 Все комментарии генерируются случайным образом.  */

const createPhotoDescription = () => ({
  id: getIdPhoto(createIdGenerator()),
  url: 'photos/' + getIdUrl(createIdGenerator()) +'.jpg',
  description: 'The description of the photo Nr. ' + getIdForDescription(createIdGenerator()),
  likes: getLikesCount(createRandomIdFromRangeGenerator()),
  comments: getRandomArrayElement(MESSAGE_SOURCE),
  //coatColor: getRandomArrayElement(COAT_COLORS),
  //eyesColor: getRandomArrayElement(EYES_COLORS),
});

const test = createPhotoDescription();
const test2 = createPhotoDescription();
const test3 = createPhotoDescription();
const test4 = createPhotoDescription();
console.log(test);
console.log(test2);
console.log(test3);
console.log(test4);
