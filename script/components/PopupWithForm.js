import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(popupSelector, { handleFormSubmit }) {
    super(popupSelector);
    this.popupForm = this._popup.querySelector('.popup__container');
    this._handleFormSubmit = handleFormSubmit;
    this._inputList = Array.from(this.popupForm.querySelectorAll('.popup__input-text'));
  }

  _getInputValues() {
    this._inputElementValues = {};
    this._inputList.forEach((inputElement) => {
      this._inputElementValues[inputElement.name] = inputElement.value;
    })
    return this._inputElementValues;
  }

  setEventListeners() {
    this.popupForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues())
    });
    super.setEventListeners();
  }

  close() {
    this.popupForm.reset();
    super.close();
  }
}