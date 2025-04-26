import { EasyCrypt } from "../class/EasyCrypt";
import { elements } from "../elements";


export function updateOutput(): void {
  const keyInput = elements.getKeyInput();
  const textarea = elements.getTextarea();
  const switcherCheckbox = elements.getSwitcherCheckbox();
  const output = elements.getOutput();

  if (!keyInput || !textarea || !switcherCheckbox || !output) return;

  const crypt = new EasyCrypt(keyInput.value);
  output.textContent = switcherCheckbox.checked
    ? crypt.encrypt(textarea.value)
    : crypt.decrypt(textarea.value);
}
