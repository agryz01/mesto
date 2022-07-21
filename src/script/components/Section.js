export class Section {
  constructor({ renderer }, containerSelector) {
    this._renderer = renderer;
    this._element = document.querySelector(containerSelector);
  }

  renderItems(items) {
    items.forEach(item => this._renderer(item));
  }

  addItem(card, prepend = true) {
    if (prepend) {
      this._element.prepend(card);
    } else {
      this._element.append(card);
    }
  }
}