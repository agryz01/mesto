import { popapContainerViev, popupTitleViev, popapWindowViev } from "./index.js";
export class Card {
  constructor(cardElement, cardSelector, { openPopup }) {
    this._name = cardElement.name;
    this._link = cardElement.link;
    this._listElement = document.querySelector(cardSelector).content;
    this._openPopup = openPopup;
  }

  _handleCardFavourites(buttonFavorit) {
    buttonFavorit.classList.toggle('element__favourites_active');
  }

  _handleCardDelete(cardElement) {
    cardElement.remove();
  }

  _handleWindowViev() {
    popupTitleViev.textContent = this._name;
    popapContainerViev.src = this._link;
    popapContainerViev.alt = `картинка "${this._name}" в полный размер.`;
    this._openPopup(popapWindowViev);
  }

  getTemplate() {
    const cardElement = this._listElement.querySelector('.element').cloneNode(true);
    const titleElement = cardElement.querySelector('.element__title');
    const imageElement = cardElement.querySelector('.element__image');
    const buttonFavorit = cardElement.querySelector('.element__favourites');
    const buttonDeletIcon = cardElement.querySelector('.element__delet-icon');
    titleElement.textContent = this._name;
    imageElement.style = `background-image: url(${this._link});`;
    buttonFavorit.addEventListener('click', () => {
      this._handleCardFavourites(buttonFavorit);
    });
    buttonDeletIcon.addEventListener('click', () => {
      this._handleCardDelete(cardElement);
    });
    imageElement.addEventListener('click', () => {
      this._handleWindowViev();
    });
    return cardElement;
  }
}
