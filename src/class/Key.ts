export class Key {
  static get() {
    return window.localStorage.getItem("key");
  }

  static set(text: string) {
    window.localStorage.setItem("key", text);
  }
}
