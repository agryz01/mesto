let editButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let closingIcon = popup.querySelector('.popup__closing-icon');
let button = document.querySelector('.popup__button');

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
  console.log('нажатие кнопки "Сохранить"');
  evt.preventDefault();

  let profileTitle = document.querySelector('.profile__title');
  let profileSubtitle = document.querySelector('.profile__subtitle');


  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  popup.classList.remove('popup__opened');
}
formElement.addEventListener('submit', formSubmitHandler);
