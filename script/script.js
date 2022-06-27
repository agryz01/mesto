import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";

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
const popapContainerViev = document.querySelector('.popup__image');
const popupTitleViev = document.querySelector('.popup__title-viev');
const openPopupViev = document.querySelector('.popup_window_viev');
const popupList = Array.from(document.querySelectorAll('.popup'));
const cardSelector = '.template-element';
let markFormAdd = false;

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

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
  formWindowAddElement.reset(); // сбросили поля
  const buttonElement = popupWindowAdd.querySelector('.popup__button');
  buttonElement.classList.add('popup__button_disabled');
  buttonElement.disabled = 'disabled'; // отключили кнопку
  openPopup(popupWindowAdd);
  resetValidation(popupWindowAdd);
});

// открытие попапа просмотра

document.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('element__image')) {
    const button = evt.target;
    const element = button.closest('.element');
    popapContainerViev.src = element.querySelector('.element__image').style.backgroundImage.slice(5, -2);
    const elementTitle =  element.querySelector('.element__title').textContent;
    popupTitleViev.textContent = elementTitle;
    popapContainerViev.alt = `картинка "${elementTitle}" в полный размер.`;
    openPopup(openPopupViev);
  }
})

//функция вставки эл-та

function pasteElement(card) {
  const newElement = new Card(card, cardSelector).getTemplate();
  if (markFormAdd) {
    cardListElements.prepend(newElement);
  } else {
    cardListElements.append(newElement);
  }
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
  markFormAdd = true;
  renderList(newCard);
  closePopup(popupWindowAdd);
}

// создание первых карточек

renderList(initialCards);

// слушатели кнопок форм

formWindowEditElement.addEventListener('submit', handleProfileFormSubmit);
formWindowAddElement.addEventListener('submit', handleAddCardFormSubmit);

//слушатели закрытия по клику по оверлею или крестику всех попапов

popupList.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if ((evt.target.classList.contains('popup_opened')) || (evt.target.classList.contains('popup__closing-icon'))) {
      closePopup(popup);
    }
  });
});

// включаем валидацию

  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElement) => {
   const formValidator = new FormValidator(config, formElement).enableValidation();
   console.log(formValidator);
  });