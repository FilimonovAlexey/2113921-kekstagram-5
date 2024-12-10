import {photos} from "./data.js";
import {renderPictures} from "./pictures.js";

renderPictures(photos);

// console.log(photos);

//Структура обьекта который надо сгенерировать
// {
//   id: число от 1 до 25
//   url: адрес картинки вида photos/{{i}}.jpg, где {{i}} — это число от 1 до 25
//   description: случайно из DESCRIPTIONS
//   likes: Случайное число от 15 до 200
//   comments: Количество комментариев к каждой фотографии — случайное число от 0 до 30
// }

//Пример комментария
// comments = {
//   id: 135, //любое число
//   avatar: 'img/avatar-6.svg', //img/avatar-{{случайное число от 1 до 6}}.svg
//   message: 'В целом всё неплохо. Но не всё.', //случайно из MASSAGES
//   name: 'Артём', //случайно из NAMES
// }
