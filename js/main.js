// Функция, возвращающая случайное целое число из переданного диапазона включительно.

function getNum(a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  return Math.floor(Math.random() * (upper - lower + 1) + lower);
}

// Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно с указанием знаков после запятой

const generateCoordinates = (a, b, decimalPoint = 1) => {
  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));
  return +(Math.random() * (upper - lower) + lower).toFixed(decimalPoint)
}

// Массивы констант

const TITLE= [
  "Аппартаменты у Невы",
  "Квартира в центре города",
  "Пентхаус в Кастроме",
  "Домик рядом с озером",
];

const TYPE = [
  "palace",
  "flat",
  "house",
  "bungalow",
  "hotel",
  ];

const CHECKIN = [
  "12:00",
  "13:00",
  "14:00"
];

const CHECKOUT = [
  "12:00",
  "13:00",
  "14:00"
];

const FEATURES = [
  "wifi",
  "dishwasher",
  "parking",
  "washer",
  "elevator",
  "conditioner"
]

const DESCRIPTION = [
  "Просторное помещение",
  "Уютный домик",
  "Отличные кровати",
  "Прекрасный вид из окна",
  "Чудесный район",
];

const PHOTOS = [
  "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg",
  "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg",
  "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg"
];

// Вспомогательные функции

const getRandomElements = (elements) => {
  return elements[getNum(0, elements.length - 1)];
};

const createUniqueArray = (elements) => {
  const newArray = [];
  let arrLength = getNum(1, elements.length);
  for (let i = 0; i < arrLength; i++) {
    const g = elements[getNum(0, elements.length - 1)];
    if (!newArray.includes(g)) {
      newArray.push(g);
    } else {
      i--;
    }
  }
  return newArray;
}

let avatars = [];

const createAvatars = () => {
  let randomAvatarNumber = getNum(1, 10);
  while (randomAvatarNumber!==0) {
    if (!avatars.includes(randomAvatarNumber)) {
      avatars.push(randomAvatarNumber)
      if (randomAvatarNumber<10) {
        randomAvatarNumber = "0"+randomAvatarNumber.toString();
      }
    return randomAvatarNumber;
    }
    else {
      randomAvatarNumber = getNum(1, 10);
    }
  }

}

// Функция создания объявления

const createAdvertisement = () => {
  const locationLat = generateCoordinates(35.65,35.7, 5);
  const locationLng = generateCoordinates(139.7, 139.8, 5);

  return {
    author: {
      avatar: "img/avatars/user" + createAvatars() + ".png",
    },
    offer: {
      title: getRandomElements(TITLE),
      address: locationLat + ", " + locationLng,
      price: getNum(1, 1000000),
      type: getRandomElements(TYPE),
      rooms: getNum(1, 5),
      guests: getNum(1, 10),
      checkin: getRandomElements(CHECKIN),
      checkout: getRandomElements(CHECKOUT),
      features: createUniqueArray(FEATURES),
      description: getRandomElements(DESCRIPTION),
      photos: createUniqueArray(PHOTOS),
    },
    location: {
      lat: locationLat,
      lng: locationLng,
    }
  }
};

// console.log(createAdvertisement());

const advertisements = Array.from({length: 10}, createAdvertisement)
console.log(advertisements);



