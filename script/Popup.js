export class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
  }

  _handleEscKey(evt) {
    if (evt.key === 'Escape') {
      const popup = document.querySelector('.popup_opened');
      this.close();
    }
  }

  close() {
    document.removeEventListener('keydown', this._handleEscKey());
    this._popup.classList.remove('popup_opened');
  }

  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscKey());
  }

  setEventListeners() {
    this._popup.addEventListener('mousedown', (evt) => {
      if ((evt.target.classList.contains('popup_opened')) || (evt.target.classList.contains('popup__closing-icon'))) {
        this.close();
      }
    });
  }
}