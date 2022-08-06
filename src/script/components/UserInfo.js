export class UserInfo {
  constructor(profileTitle, profileSubtitle, profileAvatar) {
    this._profileTitle = document.querySelector(profileTitle);
    this._profileSubtitle = document.querySelector(profileSubtitle);
    this.profileAvatar = document.querySelector(profileAvatar);
  }

  getUserInfo() {
    this._userInfo = {
      yourname: this._profileTitle.textContent,
      yourjob: this._profileSubtitle.textContent,
    }
    return this._userInfo
  }

  setUserInfo({ name, about, _id, avatar}) {
    this._profileTitle.textContent = name;
    this._profileSubtitle.textContent = about;
    this.id = _id;
    this.profileAvatar.style = `background-image: url(${avatar});`;
  }
}