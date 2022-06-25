class Card {
  constructor(cardElement, cardSelector) {
    this._name = cardElement.name;
    this._link = cardElement.link;
    this._cardSelector = cardSelector;
  }
  _getTemplate() {
    const listElement = document.querySelector(this._cardSelector).content.cloneNode(true);
    const titleElement = listElement.querySelector('.element__title');
    const imageElement = listElement.querySelector('.element__image');
    titleElement.textContent = this._name;
    imageElement.style = `background-image: url(${this._link});`;
  }

}