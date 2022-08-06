export class Api {
  constructor(options) {
    this._url = options.url;
    this._headers = options.headers;
    this._response = options.response;
  }

  getUserInformation() {
    return fetch(`${this._url}users/me`, {
      method: 'GET',
      headers: this._headers
    })
      .then(res => this._response(res));
  }

  setUserInformation(yourname, yourjob) {
    return fetch(`${this._url}users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: yourname,
        about: yourjob
      })
    })
      .then(res => this._response(res));
  }

  getCards() {
    return fetch(`${this._url}cards`, {
      method: 'GET',
      headers: this._headers
    })
    .then(res => this._response(res));
  }

  addCard(placename, placeurl) {
    return fetch(`${this._url}cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: placename,
        link: placeurl
      })
    })
      .then(res => this._response(res));
  }

  deletCard(idCard) {
    return fetch(`${this._url}cards/${idCard}`, {
      method: 'DELETE',
      headers: this._headers
    })
      .then(res => this._response(res));
  }

  toggleCardLikes(isFavourites, idCard) {
    return fetch(`${this._url}cards/${idCard}/likes`, {
      method: isFavourites
        ? 'DELETE'
        : 'PUT',
      headers: this._headers
    })
      .then(res => this._response(res));
  }

  setAvatar(url) {
    return fetch(`${this._url}users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: url
      })
    })
      .then(res => this._response(res));
  }
}
