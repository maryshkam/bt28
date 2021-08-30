// // const body = document.body;
// // console.log(document);
// // console.log(body);

// const magicBtn = document.querySelector('.js-magic-btn');
// console.log(magicBtn);
// /*
//  * document.querySelector(selector) и document.querySelectorAll(selector)
//  *   selector - любой валидный CSS-селектор
//  *
//  * Что возвращают?
//  */

// const navEl = document.querySelector('.site-nav');
// console.log('navEl', navEl);

// const navLinksEl = document.querySelectorAll('.site-nav__link');
// console.log('navLinksEl', navLinksEl);

// /*
//  * Document.querySelector* и Element.querySelector*
//  */
const form = document.querySelector(".form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  // console.log('hi');
  console.log(event);
  const {
    elements: { login, password },
  } = event.currentTarget;

  if (login.value === "" && password.value === "") {
    return console.log("all fields are empty");
  }
  if (login.value === "" || password.value === "") {
    return console.log("Please fill in all the fields!");
  }

  console.log(`Login: ${login.value}, Password: ${password.value}`);
  event.currentTarget.reset();
}
