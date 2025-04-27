import { elements } from "../elements";
import { updateOutput } from "../helper/updateOutput";

export function handleSwitchChange(): void {
  const labelSpan = elements.getLabelSpan();
  const switcherCheckbox = elements.getSwitcherCheckbox();

  if (!labelSpan || !switcherCheckbox) return;

  labelSpan.textContent = switcherCheckbox.checked ? "Encrypt" : "Decrypt";
  updateOutput();
}
