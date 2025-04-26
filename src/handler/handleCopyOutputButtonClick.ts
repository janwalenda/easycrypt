import { copyTextToClipboard } from "../helper/copyTextToClipboard";
import { elements } from "../elements";

export function handleCopyOutputButtonClick(): void {
  copyTextToClipboard(elements.getOutput()!.textContent!);
}
