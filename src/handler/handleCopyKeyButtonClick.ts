import { copyTextToClipboard } from "../helper/copyTextToClipboard";
import { elements } from "../elements";

export function handleCopyKeyButtonClick(): void {
  copyTextToClipboard(elements.getKeyInput()!.value);
}
