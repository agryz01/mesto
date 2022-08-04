import { Popup } from "./Popup.js";

export class PopupWithConfirmation extends Popup {
  constructor( popupSelector, {handleWindowConfirmation} ) {
    super( popupSelector );
    this._button = this._popup.querySelector('.popup__button');
    this._handleWindowConfirmation = handleWindowConfirmation;
  }

  setEventListeners() {
    this._button.addEventListener('mousedown', () => {
      this._handleWindowConfirmation(this._id, this._target);
    });
    super.setEventListeners();
  }

  open(id, target) {
    this._id = id;
    this._target = target;
    //console.log('PWC' + this._id)
    super.open();

  }
}