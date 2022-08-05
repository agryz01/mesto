export class Popup {
  constructor(popupSelector) {
    this._linkHandleEscKey = this._handleEscKey.bind(this);
    this._popup = document.querySelector(popupSelector);
    this.button = this._popup.querySelector('.popup__button');
  }

  _handleEscKey(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  close() {
    document.removeEventListener('keydown', this._linkHandleEscKey);
    this._popup.classList.remove('popup_opened');
  }

  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._linkHandleEscKey);
  }

  setEventListeners() {
    this._popup.addEventListener('mousedown', (evt) => {
      if ((evt.target.classList.contains('popup_opened')) || (evt.target.classList.contains('popup__closing-icon'))) {
        this.close();
      }
    });
  }
}