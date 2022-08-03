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
      .then(res => res.json())
      //.then(info => console.log(info))
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
  }

  getCards() {
    return fetch(`${this._url}cards`, {
      method: 'GET',
      headers: this._headers
    })
      .then(res => res.json())
      //.then(data => console.log(data))
  }

}
