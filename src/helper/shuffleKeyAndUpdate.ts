import { shuffleArray } from "./shuffleArray";
import { elements } from "../elements";
import { updateOutput } from "./updateOutput";

export function shuffleKeyAndUpdate(): void {
  const keyInput = elements.getKeyInput();

  if (!keyInput) return;

  keyInput.value = shuffleArray(keyInput.value.split("")).join("");
  updateOutput();
}
