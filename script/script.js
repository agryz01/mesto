//console.log('привет мир!');
let editButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let closingIcon = popup.querySelector('.popup__closing-icon');
let button = document.querySelector('.popup__button');

//console.log(button, editButton, popup, closingIcon, form, nameInput, activity);

editButton.addEventListener('click', function () {
  console.log('нажатие кнопки edit');
  popup.classList.add('popup__opened');
})
closingIcon.addEventListener('click', function () {
  console.log('нажатие крестика');
  popup.classList.remove('popup__opened');
})


let formElement = popup.querySelector('.popup__container');
let nameInput = popup.querySelector('.popup_input_name');
let jobInput = popup.querySelector('.popup_input_activity');

function formSubmitHandler(evt) {
  evt.preventDefault();

  let profileTitle = document.querySelector('.profile__title');
  let profileSubtitle = document.querySelector('.profile__subtitle');


  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
}
formElement.addEventListener('submit', formSubmitHandler);
