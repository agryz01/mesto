export class UserInfo {
  constructor({profileTitle, profileSubtitle}) {
    this._profileTitle = document.querySelector(profileTitle);
    this._profileSubtitle = document.querySelector(profileSubtitle);
  }

  getUserInfo() {
    this._userInfo = {
      yourname: this._profileTitle.textContent,
      yourjob: this._profileSubtitle.textContent
    }
    return this._userInfo
  }

  setUserInfo(yourname, yourjob) {
    this._profileTitle.textContent = yourname;
    this._profileSubtitle.textContent = yourjob;
  }
}