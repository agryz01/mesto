import './index.css';
import { initialCards, config } from "../script/data.js";
import { Card } from "../script/components/Card.js";
import { FormValidator } from "../script/components/FormValidator.js";
import { Section } from "../script/components/Section.js";
import { PopupWithImage } from "../script/components/PopupWithImage.js";
import { PopupWithForm } from "../script/components/PopupWithForm.js";
import { UserInfo } from "../script/components/UserInfo.js";

const editButton = document.querySelector('.profile__edit-button');
const nameInput = document.querySelector('.popup__input-text_input_name');
const jobInput = document.querySelector('.popup__input-text_input_activity');
const addButon = document.querySelector('.profile__add-button');
const cardSelector = '.template-element';

const popupWindowViev = new PopupWithImage('.popup_window_viev');
const popupWindowAdd = new PopupWithForm('.popup_window_add', {
  handleFormSubmit: ({ placename, placeurl }) => {
    const newCard = {
      name: placename,
      link: placeurl
    }
    const newElement = creatCard(newCard);
    startCards.addItem(newElement.getTemplate());
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

const handleCardClick = (name, link) => popupWindowViev.open(name, link);

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

const creatCard = (item) => new Card(item, cardSelector, { handleCardClick });

// создание первых карточек

const startCards = new Section({
  renderer: (item) => {
    const newCard = creatCard(item);
    startCards.addItem(newCard.getTemplate(), false);
  }
}, '.elements');
startCards.renderItems(initialCards);

// слушатели закрытия по клику по оверлею или крестику

popupWindowViev.setEventListeners();
popupWindowAdd.setEventListeners();
popupWindowEdit.setEventListeners();

// включаем валидацию

popupWindowEditValidator.enableValidation();
popupWindowAddValidator.enableValidation();