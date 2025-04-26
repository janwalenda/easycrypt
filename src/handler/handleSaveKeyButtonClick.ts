import { Key } from "../class/Key";
import { elements } from "../elements";

export function handleSaveKeyButtonClick(): void {
  Key.set(elements.getKeyInput()!.value);
}
