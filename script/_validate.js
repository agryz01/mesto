export class FormValidator {
  constructor(configElement, formElement) {
    this._formElement = formElement;
    this._configElement = configElement;
  }

  _hideInputError() {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._configElement.inputErrorClass);
    errorElement.classList.remove(this._configElement.errorClass);
    errorElement.textContent = '';
  }

  _showInputError() {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._configElement.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._configElement.errorClass);
  }

  _checkInputValidity() {
    if (!inputElement.validity.valid) {
      this._showInputError(this._formElement, inputElement, inputElement.validationMessage, this._configElement);
    } else {
      this._hideInputError(this._formElement, inputElement, this._configElement);
    }
  }

  _hasInvalidInput() {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    })
  }
  
  _toggleButtonState() {
    if (hasInvalidInput(inputList)) {
      buttonElement.classList.add(this._configElement.inactiveButtonClass);
      buttonElement.disabled = 'disabled';
    } else {
      buttonElement.classList.remove(this._configElement.inactiveButtonClass);
      buttonElement.disabled = '';
    }
  }

  enableValidation() {
    const inputList = Array.from(this._formElement.querySelectorAll(this._configElement.inputSelector));
    const buttonElement = this._formElement.querySelector(this._configElement.submitButtonSelector);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function () {
        this._toggleButtonState(inputList, buttonElement, this._configElement);
        this._checkInputValidity(this._formElement, inputElement, this._configElement);
      });
    });
  }
}