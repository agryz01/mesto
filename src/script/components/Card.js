export class Card {
  constructor(cardElement, cardSelector, { handleCardClick, openWindowsConfirmation, isOwner, isFavourites, toggleLikes}) {
    this._name = cardElement.name;
    this._link = cardElement.link;
    this._likes = cardElement.likes;
    this._id = cardElement._id;
    this._idOwner = cardElement.owner._id
    this._listElement = document.querySelector(cardSelector).content;
    this._cardElement = this._listElement.querySelector('.element').cloneNode(true);
    this._buttonFavorit = this._cardElement.querySelector('.element__favourites');
    this._namberOfFavorites = this._cardElement.querySelector('.element__namber-of-favourites');
    this._handleCardClick = handleCardClick;
    this._openWindowsConfirmation = openWindowsConfirmation;
    this._isOwner = isOwner;
    this._isFavourites = isFavourites(this._likes);
    this._toggleLikes = toggleLikes;
  }

  handleCardFavourites(data) {
    this._buttonFavorit.classList.toggle('element__favourites_active');
    this._isFavourites = !this._isFavourites;
    this._namberOfFavorites.textContent = data.likes.length;
  }

  getTemplate() {
    const titleElement = this._cardElement.querySelector('.element__title');
    const imageElement = this._cardElement.querySelector('.element__image');
    if (this._isOwner(this._idOwner)) {
      const buttonDeletIcon = this._cardElement.querySelector('.element__delet-icon');
      buttonDeletIcon.addEventListener('click', (evt) => {
        this._openWindowsConfirmation(this._id, evt.target);
      });
    } else {
      this._cardElement.querySelector('.element__delet-icon').remove();
    }
    titleElement.textContent = this._name;
    imageElement.style = `background-image: url(${this._link});`;
    if (this._isFavourites) {
      this._buttonFavorit.classList.add('element__favourites_active');
    }
    this._namberOfFavorites.textContent = this._likes.length;
    this._buttonFavorit.addEventListener('click', () => {
      this._toggleLikes(this._isFavourites, this._id);;
    });
    imageElement.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    });
    return this._cardElement;
  }
}