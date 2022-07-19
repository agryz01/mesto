import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(popupSelector, {handleAddCardFormSubmit}) {
    super(popupSelector);
    this._formWindowAddElement = this._popup.querySelector('.popup__container');
    this._handleAddCardFormSubmit = handleAddCardFormSubmit;
    // this._namePlace = this._popup.querySelector('.popup__input-text_input_place');
    // this._urlPlace = this._popup.querySelector('.popup__input-text_input_url');
    this._inputList = Array.from(this._formWindowAddElement.querySelectorAll('.popup__input-text'));
  }

  _getInputValues() {
    this._inputElementValue = {};
    this._inputList.forEach((inputElement) => {
      this._inputElementValue = inputElement.value;
      console.log(this._inputElementValue);
      return this._inputElementValue
    })
  }

  setEventListeners() {
    this._formWindowAddElement.addEventListener('submit', this._handleAddCardFormSubmit);
    super.setEventListeners();
  }
}