const editButton = document.querySelector('.profile__edit-button');
const popup = document.querySelectorAll('.popup');
const closingIcon = document.querySelector('.popup__closing-icon');
const formElementEdit = document.querySelector('.popup__container_type_profileedit');
const nameInput = document.querySelector('.popup__input-text_input_name');
const jobInput = document.querySelector('.popup__input-text_input_activity');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');

const popup_type_mestoadd = document.querySelector('.popup_type_mestoadd');
const popup_type_profileedit = document.querySelector('.popup_type_profileedit');
const addButton = document.querySelector('.profile__add-button');

editButton.addEventListener('click', function () {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
  popup_type_profileedit.classList.add('popup_opened');
});

addButton.addEventListener('click', function () {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
  popup_type_mestoadd.classList.add('popup_opened');
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

formElementEdit.addEventListener('submit', formSubmitHandler);