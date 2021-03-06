export class Card {
  constructor(cardElement, cardSelector, { handleCardClick }) {
    this._name = cardElement.name;
    this._link = cardElement.link;
    this._listElement = document.querySelector(cardSelector).content;
    this._cardElement = this._listElement.querySelector('.element').cloneNode(true);
    this._buttonFavorit = this._cardElement.querySelector('.element__favourites');
    this._handleCardClick = handleCardClick;
  }

  _handleCardFavourites() {
    this._buttonFavorit.classList.toggle('element__favourites_active');
  }

  _handleCardDelete() {
    this._cardElement.remove();
  }

  getTemplate() {
    const titleElement = this._cardElement.querySelector('.element__title');
    const imageElement = this._cardElement.querySelector('.element__image');
    const buttonDeletIcon = this._cardElement.querySelector('.element__delet-icon');
    titleElement.textContent = this._name;
    imageElement.style = `background-image: url(${this._link});`;
    this._buttonFavorit.addEventListener('click', () => {
      this._handleCardFavourites();
    });
    buttonDeletIcon.addEventListener('click', () => {
      this._handleCardDelete();
    });
    imageElement.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    });
    return this._cardElement;
  }
}
