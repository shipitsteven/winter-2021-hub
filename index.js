'use strict';
/**
 * Not used at the moment
 */
(function () {
  window.addEventListener('load', init);

  function init() {}

  /**
   * Returns a new element with the given id
   * @param {string} idName HTML id for the desired DOM element.
   * @return {object} DOM element with the corresponding HTML ID.
   */
  function id(idName) {
    return document.getElementById(idName);
  }

  /**
   * Returns a new element with the given tag name.
   * @param {string} tagName - HTML tag name for new DOM element.
   * @returns {object} New DOM object for given HTML tag.
   */
  function gen(tagName) {
    return document.createElement(tagName);
  }

  /**
   * Returns all element with the given tag
   * @param {string} element HTML tag name for desired DOM element
   * @returns {object} array of DOM objects
   */
  function qsa(element) {
    return document.querySelectorAll(element);
  }

  /**
   * Returns a element with the given tag
   * @param {string} element DOM object with the given tag
   * @returns {object} DOM object
   */
  function qs(element) {
    return document.querySelector(element);
  }
})();
