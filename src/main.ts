import "./style.scss";

/**
 * A class to encrypt and decrypt text using a custom character set.
 */
class EasyCrypt {
  /**
   * The character set used for encryption and decryption.
   * @type {string[]}
   */
  private key: string = ".,!?:;abcdefghijklmnopqrstuvwxyzäöü ()€&-/#";

  constructor(key) {
    if (typeof key !== "string") {
      return this;
    }

    this.key = key;
  }

  /**
   * Splits the character set into smaller arrays with a specified chunk size.
   * @param {number} chunkSize - The maximum size of each chunk.
   * @returns {string[][]} An array of smaller arrays containing the characters.
   */
  splitArrayIntoChunks(chunkSize) {
    if (typeof chunkSize !== "number" || chunkSize <= 0) {
      throw new TypeError("chunkSize must be a positive number");
    }
    const result: string[] = [];
    for (let i = 0; i < this.key.length; i += chunkSize) {
      result.push(this.key.slice(i, i + chunkSize));
    }
    return result;
  }

  /**
   * Gets the character chunks with a chunk size of 9.
   * @returns {string[][]} An array of smaller arrays containing the characters.
   */
  get chunks() {
    return this.splitArrayIntoChunks(9);
  }

  /**
   * Encrypts the given text using a custom character set.
   * @param {string} text - The text to be encrypted.
   * @returns {string} The encrypted text.
   */
  encrypt(text) {
    if (typeof text !== "string") {
      throw new TypeError("text must be a string");
    }
    let out = "";

    for (const char of text.split("")) {
      let found = false;
      for (let i = 0; i < this.chunks.length; i++) {
        const chunk = this.chunks[i];
        if (chunk.includes(char)) {
          const index = chunk.indexOf(char);
          out += `${i}${index}`;
          found = true;
          break;
        }
      }
      if (!found) {
        continue;
      }
    }

    return out;
  }

  /**
   * Decrypts the given encrypted text.
   * @param {string} text - The encrypted text to be decrypted.
   * @returns {string} The decrypted text.
   */
  decrypt(text) {
    if (typeof text !== "string") {
      throw new TypeError("text must be a string");
    }
    const split = text.match(/([0-9]{2})/gm);
    if (!split) {
      throw new Error("Invalid encrypted text format");
    }
    let out = "";
    for (const pair of split) {
      const arrayIndex = parseInt(pair.slice(0, 1), 10);
      const charIndex = parseInt(pair.slice(1), 10);
      if (
        arrayIndex >= this.chunks.length ||
        charIndex >= this.chunks[arrayIndex].length
      ) {
        throw new Error(`Invalid index in encrypted text: ${pair}`);
      }
      out += this.chunks[arrayIndex][charIndex];
    }
    return out;
  }
}

function shuffleArray(array) {
  // Create a copy of the array to avoid mutating the original array
  const shuffledArray = array.slice();

  for (let i = shuffledArray.length - 1; i > 0; i--) {
    // Generate a random index between 0 and i
    const j = Math.floor(Math.random() * (i + 1));

    // Swap elements at indices i and j
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  return shuffledArray;
}

function fallbackCopyTextToClipboard(text) {
  var textArea = document.createElement("textarea");
  textArea.value = text;

  // Avoid scrolling to bottom
  textArea.style.top = "0";
  textArea.style.left = "0";
  textArea.style.position = "fixed";

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    const successful = document.execCommand('copy');
    const msg = successful ? 'successful' : 'unsuccessful';
    console.log('Fallback: Copying text command was ' + msg);
  } catch (err) {
    console.error('Fallback: Oops, unable to copy', err);
  }

  document.body.removeChild(textArea);
}

function copyTextToClipboard(text) {
  if (!navigator.clipboard) {
    fallbackCopyTextToClipboard(text);
    return;
  }
  navigator.clipboard.writeText(text).then(function () {
    console.log('Async: Copying to clipboard was successful!');
  }, function (err) {
    console.error('Async: Could not copy text: ', err);
  });
}

Object.defineProperty(window, 'EasyCrypt', {
  value: EasyCrypt,
});

Object.defineProperty(window, 'shuffleArray', {
  value: shuffleArray,
});

Object.defineProperty(window, 'copyTextToClipboard', {
  value: copyTextToClipboard,
});
