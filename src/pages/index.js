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
const editAvatarButton = document.querySelector('.profile__avatar');
const cardSelector = '.template-element';

const popupWindowViev = new PopupWithImage('.popup_window_viev');
const popupWindowAdd = new PopupWithForm('.popup_window_add', {
  handleFormSubmit: ({ placename, placeurl }) => {
    popupWindowAdd.button.textContent = 'Сохранение...';
    api.addCard(placename, placeurl)
      .then((result) => {
        const newElement = creatCard(result);
        cardsContainer.addItem(newElement.getTemplate());
        popupWindowAdd.close();
      })
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      })
      .finally(() => {
        popupWindowAdd.button.textContent = 'Создать';
      })
  }
})

const popupWindowAddValidator = new FormValidator(config, popupWindowAdd.popupForm);

const userInfo = new UserInfo('.profile__title', '.profile__subtitle', '.profile__avatar');

const popupWindowEdit = new PopupWithForm('.popup_window_edit', {
  handleFormSubmit: (data) => {
    popupWindowEdit.button.textContent = 'Сохранение...';
    api.setUserInformation(data.name, data.about)
      .then((res) => {
        userInfo.setUserInfo(res);
        popupWindowEdit.close();
      })
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      })
      .finally(() => {
        popupWindowEdit.button.textContent = 'Сохранить';
      })
  }
});

const popupWindowEditValidator = new FormValidator(config, popupWindowEdit.popupForm);

const popupWindowAvatar = new PopupWithForm('.popup_window_edit-avatar', {
  handleFormSubmit: (data) => {
    popupWindowAvatar.button.textContent = 'Сохранение...';
    api.setAvatar(data.avatar)
      .then((res) => {
        userInfo.setUserInfo(res);
        popupWindowAvatar.close();
      })
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      })
      .finally(() => {
        popupWindowAvatar.button.textContent = 'Сохранить';
      })
  }
})

const popupWindowAvatarValidator = new FormValidator(config, popupWindowAvatar.popupForm);

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

editAvatarButton.addEventListener('click', () => {
  popupWindowAvatarValidator.resetValidation();
  popupWindowAvatar.open();
})

const isFavourites = (likes) => {
  return likes.some(item => item._id === userInfo.id)
}

const creatCard = (item) => {
  const card = new Card(item, cardSelector, {
    handleCardClick,
    openWindowsConfirmation: (idCard) => {
      const popupWindowConfirmation = new PopupWithConfirmation('.popup_window_confirmation', {
        handleWindowConfirmation: (id) => {
          api.deletCard(id)
            .then(res => {
              card.handleCardDelet();
              popupWindowConfirmation.close();
            })
            .catch((err) => {
              console.log(err); // выведем ошибку в консоль
            })
        }
      });
      popupWindowConfirmation.setEventListeners();
      popupWindowConfirmation.open(idCard);
    },
    isOwner,
    isFavourites,
    toggleLikes: (isFavourites, idCard) => {
      api.toggleCardLikes(isFavourites, idCard)
        .then((data) => {
          card.handleCardFavourites(data);
        }
        )
        .catch((err) => {
          console.log(err); // выведем ошибку в консоль
        });
    }
  });
  return card;
}

const cardsContainer = new Section({
  renderer: (item) => {
    const newCard = creatCard(item);
    cardsContainer.addItem(newCard.getTemplate(), false);
  }
}, '.elements');

const isOwner = (idOwner) => idOwner === userInfo.id;

// слушатели закрытия по клику по оверлею или крестику

popupWindowViev.setEventListeners();
popupWindowAdd.setEventListeners();
popupWindowEdit.setEventListeners();
popupWindowAvatar.setEventListeners();

// включаем валидацию

popupWindowEditValidator.enableValidation();
popupWindowAddValidator.enableValidation();
popupWindowAvatarValidator.enableValidation();

const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-46/',
  headers: {
    authorization: '7db7170a-ac3c-4dc5-8594-c4340cfc9c1b',
    'Content-Type': 'application/json; charset=UTF-8'
  },
  response: res => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }
});

Promise.all([
  api.getUserInformation(),
  api.getCards()
])
  .then(([userData, cardData]) => {
    userInfo.setUserInfo(userData);
    cardsContainer.renderItems(cardData);
  })