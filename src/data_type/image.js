'use strict';

/**
 * Abstract Image attribute class.
 */
module.exports = class Image {
  /**
   * Image constructor.
   *
   * @param {ArrayBuffer} content
   * @param {string} mimeType
   */
  constructor(content, mimeType) {
    if (new.target === Image) {
      throw TypeError('Image is an abstract class, so cannot be instantiated');
    }
    if (typeof mimeType === 'undefined') {
      throw TypeError(`${this.constructor.name} must pass mimeType to the Image constructor`);
    }
    this.content = content;
    this.mimeType = mimeType;
  }

  /**
   * Get the raw image content.
   *
   * @returns {ArrayBuffer}
   */
  getContent() {
    return this.content;
  }

  /**
   * Get the base64 image content.
   *
   * @returns {string}
   */
  getBase64Content() {
    const base64Content = Buffer.from(this.content).toString('base64');
    return `data:${this.getMimeType()};base64,${base64Content}`;
  }

  /**
   * Get the image mime type.
   *
   * @returns {string}
   */
  getMimeType() {
    return this.mimeType;
  }
};
