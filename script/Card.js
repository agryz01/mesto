export class Card {
  constructor(cardElement, cardSelector, {openWindowViev}) {
    this._name = cardElement.name;
    this._link = cardElement.link;
    this._cardSelector = cardSelector;
    this._openWindowViev = openWindowViev;
  }

  _handleCardFavourites(buttonFavorit) {
    buttonFavorit.classList.toggle('element__favourites_active');
  }

  _handleCardDelete(cardElement) {
    cardElement.remove();
  }

  _handleWindowViev() {
    const popapContainerViev = document.querySelector('.popup__image');
    const popupTitleViev = document.querySelector('.popup__title-viev');
    const popapWindowViev = document.querySelector('.popup_window_viev');
    popupTitleViev.textContent = this._name;
    popapContainerViev.src = this._link;
    popapContainerViev.alt = `картинка "${this._name}" в полный размер.`;
    openPopup(popapWindowViev);
  }

  getTemplate() {
    const listElement = document.querySelector(this._cardSelector).content.cloneNode(true);
    const titleElement = listElement.querySelector('.element__title');
    const imageElement = listElement.querySelector('.element__image');
    const buttonFavorit = listElement.querySelector('.element__favourites');
    const buttonDeletIcon = listElement.querySelector('.element__delet-icon');
    const cardElement = listElement.querySelector('.element');
    titleElement.textContent = this._name;
    imageElement.style = `background-image: url(${this._link});`;
    buttonFavorit.addEventListener('click', () => {
      this._handleCardFavourites(buttonFavorit);
    });
    buttonDeletIcon.addEventListener('click', () => {
      this._handleCardDelete(cardElement);
    });
    imageElement.addEventListener('click', () => {
      this._openWindowViev(this._name, this._link);
    });
    return listElement;
  }
}
