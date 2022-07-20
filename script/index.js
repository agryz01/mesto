import { initialCards, config } from "./data.js";
import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";
import { Section } from "./Section.js";
import { PopupWithImage } from "./PopupWithImage.js";
import { PopupWithForm } from "./PopupWithForm.js";
import { UserInfo } from "./UserInfo.js";

const editButton = document.querySelector('.profile__edit-button');
const nameInput = document.querySelector('.popup__input-text_input_name');
const jobInput = document.querySelector('.popup__input-text_input_activity');
const addButon = document.querySelector('.profile__add-button');
const cardSelector = '.template-element';

const popapWindowViev = new PopupWithImage('.popup_window_viev');
const popupWindowAdd = new PopupWithForm('.popup_window_add', {
  handleFormSubmit: ({ placename, placeurl }) => {
    const newCard = {
      name: placename,
      link: placeurl
    }
    const newElement = renderer(newCard);
    startCards.addItem(newElement);
    popupWindowAdd.close();
  }
})

const popupWindowAddValidator = new FormValidator(config, popupWindowAdd.popupForm);

const userInfo = new UserInfo({
  profileTitle: '.profile__title',
  profileSubtitle: '.profile__subtitle'
})

const popupWindowEdit = new PopupWithForm('.popup_window_edit', {
  handleFormSubmit: ({ yourname, yourjob }) => {
    userInfo.setUserInfo(yourname, yourjob);
    popupWindowEdit.close();
  }
});

const popupWindowEditValidator = new FormValidator(config, popupWindowEdit.popupForm);

//обработчик клика по kарточке

const handleCardClick = (name, link) => popapWindowViev.open(name, link);

editButton.addEventListener('click', () => {
  const value = userInfo.getUserInfo();
  nameInput.value = value.yourname;
  jobInput.value = value.yourjob;
  popupWindowEditValidator.resetValidation();
  popupWindowEdit.open();
});

addButon.addEventListener('click', () => {
  popupWindowAddValidator.resetValidation();
  popupWindowAdd.open();
});

// функция создания экземпляра класса

const renderer = (item) => new Card(item, cardSelector, { handleCardClick }).getTemplate();

// создание первых карточек

const startCards = new Section({ renderer }, '.elements');
startCards.renderItems(initialCards);

// слушатели закрытия по клику по оверлею или крестику

popapWindowViev.setEventListeners();
popupWindowAdd.setEventListeners();
popupWindowEdit.setEventListeners();

// включаем валидацию

popupWindowEditValidator.enableValidation();
popupWindowAddValidator.enableValidation();