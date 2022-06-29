export class Card {
  constructor(cardElement, cardSelector) {
    this._name = cardElement.name;
    this._link = cardElement.link;
    this._cardSelector = cardSelector;
  }

  _handleCardFavourites(buttonFavorit) {
    buttonFavorit.classList.toggle('element__favourites_active');
  }

  _handleCardDelete(cardElement) {
    cardElement.remove();
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
    return listElement;
  }
}
