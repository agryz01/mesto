import './index.css';
import { config } from "../script/data.js";
import { Card } from "../script/components/Card.js";
import { FormValidator } from "../script/components/FormValidator.js";
import { Section } from "../script/components/Section.js";
import { PopupWithImage } from "../script/components/PopupWithImage.js";
import { PopupWithForm } from "../script/components/PopupWithForm.js";
import { PopupWithConfirmation } from '../script/components/PopupWithConfirmation.js';
import { UserInfo } from "../script/components/UserInfo.js";
import { Api } from '../script/components/Api.js';

const editButton = document.querySelector('.profile__edit-button');
const nameInput = document.querySelector('.popup__input-text_input_name');
const jobInput = document.querySelector('.popup__input-text_input_activity');
const addButon = document.querySelector('.profile__add-button');
const cardSelector = '.template-element';

const popupWindowViev = new PopupWithImage('.popup_window_viev');
const popupWindowAdd = new PopupWithForm('.popup_window_add', {
  handleFormSubmit: ({ placename, placeurl }) => {
    api.addCard(placename, placeurl)
      .then(res => res.json())
      .then((result) => {
        const newElement = creatCard(result);
        startCards.addItem(newElement.getTemplate());
      })
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      });
    popupWindowAdd.close();
  }
})

const popupWindowConfirmation = new PopupWithConfirmation('.popup_window_confirmation', {
  handleWindowConfirmation: (id, target) => {
    api.deletCard(id)
      .then(res => {
        if (res.ok) {
          const icon = target;
          const cardElement = icon.closest('.element');
          cardElement.remove();
        }
      })
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      });
    popupWindowConfirmation.close();
  }
});

const popupWindowAddValidator = new FormValidator(config, popupWindowAdd.popupForm);

const userInfo = new UserInfo('.profile__title', '.profile__subtitle');

const popupWindowEdit = new PopupWithForm('.popup_window_edit', {
  handleFormSubmit: ({ yourname, yourjob }) => {
    api.setUserInformation(yourname, yourjob)
      .then((res) => {
        userInfo.setUserInfo(yourname, yourjob);
      })
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      });
    popupWindowEdit.close();
  }
});

const popupWindowEditValidator = new FormValidator(config, popupWindowEdit.popupForm);

//обработчик клика по kарточке

const handleCardClick = (name, link) => popupWindowViev.open(name, link);

const openWindowsConfirmation = (idCard, target) => {
  popupWindowConfirmation.open(idCard, target);
}

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

// // функция создания экземпляра класса

const creatCard = (item) => new Card(item, cardSelector, { handleCardClick, openWindowsConfirmation });

const startCards = new Section({
  renderer: (item) => {
    const newCard = creatCard(item);
    startCards.addItem(newCard.getTemplate(), false);
  }
}, '.elements');

// слушатели закрытия по клику по оверлею или крестику

popupWindowViev.setEventListeners();
popupWindowAdd.setEventListeners();
popupWindowEdit.setEventListeners();
popupWindowConfirmation.setEventListeners();

// включаем валидацию

popupWindowEditValidator.enableValidation();
popupWindowAddValidator.enableValidation();

const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-46/',
  headers: {
    authorization: '7db7170a-ac3c-4dc5-8594-c4340cfc9c1b',
    'Content-Type': 'application/json; charset=UTF-8'
  },
  response: res => {
    if (res.ok) {
      return res;
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }
});

api.getUserInformation()
  .then(data => {
    userInfo.setUserInfo(data.name, data.about, data._id, data.avatar);
  });

// создание первых карточек

api.getCards()
  .then((data => {
    startCards.renderItems(data);
  }))

console.log(userInfo);