import { EasyCrypt } from "./class/EasyCrypt";
import "./style.scss";
import { Key } from "./class/Key";
import { App } from "./App";

window.onload = function () {
  const keyElement = document.getElementById("key");
  if (keyElement instanceof HTMLInputElement) {
    keyElement.value = Key.get() || new EasyCrypt().getKey();
  }
};

document.addEventListener("DOMContentLoaded", App);
