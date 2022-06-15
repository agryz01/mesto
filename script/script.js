const editButton = document.querySelector('.profile__edit-button');
const popupWindowEdit = document.querySelector('.popup_window_edit');
const formWindowEditElement = popupWindowEdit.querySelector('.popup__container');
const nameInput = popupWindowEdit.querySelector('.popup__input-text_input_name');
const jobInput = popupWindowEdit.querySelector('.popup__input-text_input_activity');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const popupWindowAdd = document.querySelector('.popup_window_add');
const addButon = document.querySelector('.profile__add-button');
const namePlace = popupWindowAdd.querySelector('.popup__input-text_input_place');
const urlPlace = popupWindowAdd.querySelector('.popup__input-text_input_url');
const formWindowAddElement = popupWindowAdd.querySelector('.popup__container');
const cardListElements = document.querySelector('.elements');
const popupWindowViev = document.querySelector('.popup_window_viev');
const templateElement = document.querySelector('.template-element').content;
const popapContainerViev = document.querySelector('.popup__image');
const popupTitleViev = document.querySelector('.popup__title-viev');
const openPopupViev = document.querySelector('.popup_window_viev');
const popupList = Array.from(document.querySelectorAll('.popup'));
let markFormAdd = 0;
const config = {
  formSelector: '.popup__container',
  inputSelector: '.popup__input-text',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input-text_error',
  errorClass: 'popup__input-error_active'
};

// сброс отображения валидации полей

function resetValidation(popup) {
  const errorList = Array.from(popup.querySelectorAll('.popup__input-error'));
  errorList.forEach((errorElement) => {
    errorElement.textContent = '';
  });
  const inputList = Array.from(popup.querySelectorAll('.popup__input-text'));
  inputList.forEach((inputElement) => {
    inputElement.classList.remove('popup__input-text_error');
  });
}

//функция закрытия popup

function closePopup(popup) {
  document.removeEventListener('keydown', handleEscKey);
  popup.classList.remove('popup_opened');
}

//обработка нажатия клавиши Escap

function handleEscKey(evt) {
  if (evt.key === 'Escape') {
    const popup = document.querySelector('.popup_opened');
    closePopup(popup);
  }
}

//функция открытия popup

function openPopup(popup) {
  popup.classList.add('popup_opened');
  // const inputList = Array.from(popup.querySelectorAll('.popup__input-text'));
  // const buttonElement = popup.querySelector('.popup__button');
  // toggleButtonState(inputList, buttonElement, config);
  document.addEventListener('keydown', handleEscKey);
}

//editpopup

editButton.addEventListener('click', function () {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
  openPopup(popupWindowEdit);
  resetValidation(popupWindowEdit);
});

// редактирование профиля

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  closePopup(popupWindowEdit);
}

//addpopup

addButon.addEventListener('click', function () {
  formWindowAddElement.reset();
  const inputList = Array.from(popupWindowAdd.querySelectorAll('.popup__input-text'));
  const buttonElement = popupWindowAdd.querySelector('.popup__button');
  toggleButtonState(inputList, buttonElement, config);
  openPopup(popupWindowAdd);
  resetValidation(popupWindowAdd);
});

//просмотр картинок popup

function openWindowViev(element) {
  popupTitleViev.textContent = element.name;
  popapContainerViev.src = element.link
  popapContainerViev.alt = `картинка "${element.name}" в полный размер.`;
  openPopup(openPopupViev);
}

//функция вставки эл-та

function pasteElement(card) {
  const newElement = renderItem(card);
  if (markFormAdd !== 0) {
    cardListElements.prepend(newElement);
  } else {
    cardListElements.append(newElement);
  }
}

//реализация лайков

function handleCardFavourites(evt) {
  const button = evt.target;
  button.classList.toggle('element__favourites_active');
}

//функционал удаления карточек

function handleCardDelete(evt) {
  const button = evt.target;
  const cardDeletElement = button.closest('.element');
  cardDeletElement.remove();
}

//рендеринг

function renderItem(element) {
  const listElement = templateElement.cloneNode(true);
  const titleElement = listElement.querySelector('.element__title');
  const imageElement = listElement.querySelector('.element__image');
  const buttonFavorit = listElement.querySelector('.element__favourites');
  const buttonDeletIcon = listElement.querySelector('.element__delet-icon');
  titleElement.textContent = element.name;
  imageElement.style = `background-image: url(${element.link});`;
  buttonFavorit.addEventListener('click', handleCardFavourites);
  buttonDeletIcon.addEventListener('click', handleCardDelete);
  imageElement.addEventListener('click', () => openWindowViev(element));
  return listElement;
}

function renderList(data) {
  data.forEach(pasteElement);
}

//функционал добавления карточки

function handleAddCardFormSubmit(evt) {
  evt.preventDefault();
  const newCard = [
    {
      name: namePlace.value,
      link: urlPlace.value
    }
  ];
  markFormAdd = 1;
  renderList(newCard);
  closePopup(popupWindowAdd);
}

renderList(initialCards);
formWindowEditElement.addEventListener('submit', handleProfileFormSubmit);
formWindowAddElement.addEventListener('submit', handleAddCardFormSubmit);

//слушатели закрытия по клику по оверлею или крестику всех попапов

popupList.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if ((evt.target.classList.contains('popup_opened')) || (evt.target.classList.contains('popup__closing-icon'))) {
      closePopup(popup);
    }
  });
})

enableValidation(config);