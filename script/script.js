const editButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const closingIcon = document.querySelector('.popup__closing-icon');
const button = document.querySelector('.popup__button');

editButton.addEventListener('click', function (event) {
  console.log('нажатие кнопки edit');
  popup.classList.add('popup__opened');
});
closingIcon.addEventListener('click', function (event) {
  console.log('нажатие крестика');
  popup.classList.remove('popup__opened');
});

let formElement = popup.querySelector('.popup__container');
let nameInput = popup.querySelector('.popup__input-text_input_name');
let jobInput = popup.querySelector('.popup__input-text_input_activity');

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