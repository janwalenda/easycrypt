import { EasyCrypt } from "./class/EasyCrypt";
import "./style.scss";
import { Key } from "./class/Key";
import { App } from "./App";
import { injectSpeedInsights } from "@vercel/speed-insights"

injectSpeedInsights();

function isLightMode(): boolean {
  return (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: light)").matches
  );
}

window.onload = function () {
  const keyElement = document.getElementById("key");
  if (keyElement instanceof HTMLInputElement) {
    keyElement.value = Key.get() || new EasyCrypt().getKey();
  }

  const themeSwitch = document.querySelector(
    ".theme-switch input[type=checkbox]"
  );

  if (!(themeSwitch instanceof HTMLInputElement)) {
    return;
  }

  if (isLightMode()) {
    themeSwitch.checked = true;
  } else {
    themeSwitch.checked = false;
  }
};

document.addEventListener("DOMContentLoaded", App);
