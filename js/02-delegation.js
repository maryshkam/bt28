/*
 * Делегирование событий
 * - общий слушатель
 * - фильтр цели клика
 */

const container = document.querySelector(".js-container");
const addBtn = document.querySelector(".js-add-btn");

container.addEventListener("click", buttonHeandler);

function buttonHeandler(e) {
  if(e.target.nodeName === "BUTTON") {
    console.log("click", e.target.outerText);
  }
}
let countBtn = 6;
function addButtonHeandler(e) {
  const btn = document.createElement('button');
  btn.textContent = `Кнопка ${countBtn}`;
  // const markup = `<button type="button">Кнопка ${countBtn}</button>`
  // container.append(btn);
  // container.insertAdjacentElement("beforeend", btn )
  container.insertAdjacentHTML;
  ++countBtn;
}

addBtn.addEventListener("click", addButtonHeandler);
// const container = document.querySelector('.js-container');
// container.addEventListener('click', onClick);
// function onClick(evt) {
//   if (evt.target.nodeName !== 'BUTTON') {
//     return;
//   }

//   console.log(evt.target.textContent);
// }

// /*
//  * Код добавления кнопок
//  */
// const addBtn = document.querySelector('.js-add-btn');
// let labelCounter = 6;

// addBtn.addEventListener('click', onAddBtnClick);

// function onAddBtnClick() {
//   const btn = document.createElement('button');
//   btn.textContent = `Кнопка ${labelCounter}`;
//   btn.type = 'button';

//   container.appendChild(btn);
//   labelCounter += 1;
// }
