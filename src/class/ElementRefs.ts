export class ElementRefs {
  private static instance: ElementRefs;

  // Singleton pattern to ensure only one instance of ElementRefs is created
  public static getInstance(): ElementRefs {
    if (!ElementRefs.instance) {
      ElementRefs.instance = new ElementRefs();
    }
    return ElementRefs.instance;
  }

  private constructor() { }

  getKeyInput(): HTMLInputElement | null {
    const element = document.getElementById('key');
    return element instanceof HTMLInputElement ? element : null;
  }

  getTextarea(): HTMLTextAreaElement | null {
    const element = document.getElementById('text');
    return element instanceof HTMLTextAreaElement ? element : null;
  }

  getSwitcherCheckbox(): HTMLInputElement | null {
    const element = document.getElementById('switcher');
    return element instanceof HTMLInputElement && element.type === 'checkbox' ? element : null;
  }

  getLabelSpan(): HTMLElement | null {
    const element = document.getElementById('label');
    return element instanceof HTMLElement ? element : null;
  }

  getOutput(): HTMLOutputElement | null {
    const element = document.getElementById('output');
    return element instanceof HTMLOutputElement ? element : null;
  }

  getShuffleButton(): HTMLButtonElement | null {
    const element = document.getElementById('shuffle_button');
    return element instanceof HTMLButtonElement ? element : null;
  }

  getCopyKeyButton(): HTMLButtonElement | null {
    const element = document.getElementById('copy_key');
    return element instanceof HTMLButtonElement ? element : null;
  }

  getCopyOutputButton(): HTMLButtonElement | null {
    const element = document.getElementById('copy_output');
    return element instanceof HTMLButtonElement ? element : null;
  }

  getSaveKeyButton(): HTMLButtonElement | null {
    const element = document.getElementById('save');
    return element instanceof HTMLButtonElement ? element : null;
  }
}
