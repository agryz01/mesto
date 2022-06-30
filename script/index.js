import { initialCards, config } from "./data.js";
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
const popapWindowViev = document.querySelector('.popup_window_viev');
const popupList = Array.from(document.querySelectorAll('.popup'));
const cardSelector = '.template-element';
let markFormAdd = false;

const popupWindowEditValidator = new FormValidator(config, popupWindowEdit);
const popupWindowAddValidator = new FormValidator(config, popupWindowAdd);

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
  popupWindowEditValidator.resetValidation();
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
  popupWindowAddValidator.resetValidation();
  openPopup(popupWindowAdd);
});

//функция вставки эл-та

function pasteElement(card) {
  if (markFormAdd) {
    cardListElements.prepend(card);
  } else {
    cardListElements.append(card);
  }
}

// функция создания экземпляра класса

const creatClass = (item) => new Card(item, cardSelector, {openPopup}).getTemplate();

function renderList(data) {
  data.forEach((item) => {
    const newElement = creatClass(item);
    pasteElement(newElement);
  });
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

popupWindowEditValidator.enableValidation();
popupWindowAddValidator.enableValidation();

export {popapContainerViev, popupTitleViev, popapWindowViev}