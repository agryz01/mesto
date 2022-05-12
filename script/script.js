const editButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const closingIcon = document.querySelector('.popup__closing-icon');
const formElement = popup.querySelector('.popup__container');
const nameInput = popup.querySelector('.popup__input-text_input_name');
const jobInput = popup.querySelector('.popup__input-text_input_activity');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');

nameInput.value = profileTitle.textContent;
jobInput.value = profileSubtitle.textContent;

editButton.addEventListener('click', function() {
  popup.classList.add('popup_opened');
});

function closeForm() {
  popup.classList.remove('popup_opened');
}

closingIcon.addEventListener('click', closeForm);

function formSubmitHandler(evt) {
  evt.preventDefault();

  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  closeForm();
}

formElement.addEventListener('submit', formSubmitHandler);