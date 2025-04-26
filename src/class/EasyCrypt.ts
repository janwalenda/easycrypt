/**
 * A class to encrypt and decrypt text using a custom character set.
 */
export class EasyCrypt {
  /**
   * The character set used for encryption and decryption.
   * @type {string[]}
   */
  private key: string = ".,!?:;abcdefghijklmnopqrstuvwxyzäöü ()€&-/#";

  constructor(key?: string) {
    if (typeof key !== "string") {
      return;
    }

    this.key = key;
  }

  getKey(): string {
    return this.key;
  }

  setKey(key: string): void {
    if (typeof key !== "string") {
      throw new TypeError("key must be a string");
    }
    this.key = key;
  }

  /**
   * Splits the character set into smaller arrays with a specified chunk size.
   * @param {number} chunkSize - The maximum size of each chunk.
   * @returns {string[][]} An array of smaller arrays containing the characters.
   */
  splitArrayIntoChunks(chunkSize: number) {
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
  encrypt(text: string) {
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
  decrypt(text: string) {
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
      if (arrayIndex >= this.chunks.length ||
        charIndex >= this.chunks[arrayIndex].length) {
        throw new Error(`Invalid index in encrypted text: ${pair}`);
      }
      out += this.chunks[arrayIndex][charIndex];
    }
    return out;
  }
}
