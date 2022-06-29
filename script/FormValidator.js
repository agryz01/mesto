export class FormValidator {
  constructor(configElement, formElement) {
    this._formElement = formElement;
    this._formSelector = configElement.formSelector;
    this._inputSelector = configElement.inputSelector;
    this._submitButtonSelector = configElement.submitButtonSelector;
    this._inactiveButtonClass = configElement.inactiveButtonClass;
    this._inputErrorClass = configElement.inputErrorClass;
    this._errorClass = configElement.errorClass;
    this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);
  }

  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = '';
  }

  _showInputError(inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    })
  }

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._buttonElement.classList.add(this._inactiveButtonClass);
      this._buttonElement.disabled = 'disabled';
    } else {
      this._buttonElement.classList.remove(this._inactiveButtonClass);
      this._buttonElement.disabled = '';
    }
  }

  static resetValidation(popup, obj) {
    const errorList = Array.from(popup.querySelectorAll(obj.errorClass));
    console.log(errorList);
    errorList.forEach((errorElement) => {
      errorElement.classList.remove(obj.errorClass);
    });
    const inputList = Array.from(popup.querySelectorAll(obj.inputSelector));
    // console.log(inputList);
    inputList.forEach((inputElement) => {
      //console.log(inputElement);
      inputElement.classList.remove(obj.inputErrorClass);
    });
  }

  // static resetValidation(configElement, formElement) {
  //   console.log(configElement, formElement);
  // }

  enableValidation() {
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  }
}