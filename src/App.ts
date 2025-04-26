import { handleCopyKeyButtonClick } from "./handler/handleCopyKeyButtonClick";
import { handleCopyOutputButtonClick } from "./handler/handleCopyOutputButtonClick";
import { handleKeyInput } from "./handler/handleKeyInput";
import { handleSaveKeyButtonClick } from "./handler/handleSaveKeyButtonClick";
import { handleShuffleButtonClick } from "./handler/handleShuffleButtonClick";
import { handleSwitchChange } from "./handler/handleSwitchChange";
import { handleTextareaInput } from "./handler/handleTextareaInput";
import { elements } from "./elements";

export function App() {
  const keyInput = elements.getKeyInput();
  const textarea = elements.getTextarea();
  const switcherCheckbox = elements.getSwitcherCheckbox();
  const shuffleButton = elements.getShuffleButton();
  const copyKeyButton = elements.getCopyKeyButton();
  const copyOutputButton = elements.getCopyOutputButton();
  const saveKeyButton = elements.getSaveKeyButton();

  if (!keyInput ||
    !textarea ||
    !switcherCheckbox ||
    !shuffleButton ||
    !copyKeyButton ||
    !copyOutputButton ||
    !saveKeyButton) {
    return;
  }

  keyInput.oninput = handleKeyInput;
  keyInput.onchange = handleKeyInput;
  textarea.oninput = handleTextareaInput;
  switcherCheckbox.onchange = handleSwitchChange;
  shuffleButton.onclick = handleShuffleButtonClick;
  copyKeyButton.onclick = handleCopyKeyButtonClick;
  copyOutputButton.onclick = handleCopyOutputButtonClick;
  saveKeyButton.onclick = handleSaveKeyButtonClick;
}
