import { popapContainerViev, popupTitleViev, popapWindowViev } from "./index.js";
export class Card {
  constructor(cardElement, cardSelector, {openPopup}) {
    this._name = cardElement.name;
    this._link = cardElement.link;
    this._listElement = document.querySelector(cardSelector).content.cloneNode(true);
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
    const titleElement = this._listElement.querySelector('.element__title');
    const imageElement = this._listElement.querySelector('.element__image');
    const buttonFavorit = this._listElement.querySelector('.element__favourites');
    const buttonDeletIcon = this._listElement.querySelector('.element__delet-icon');
    const cardElement = this._listElement.querySelector('.element');
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
    return this._listElement;
  }
}
