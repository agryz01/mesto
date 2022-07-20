import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._name = this._popup.querySelector('.popup__title-viev');
    this._link = this._popup.querySelector('.popup__image');
  }

  open(name, link) {
    this._name.textContent = name;
    this._link.src = link;
    this._link.alt = `картинка "${name}" в полный размер.`;
    super.open();
  }
}