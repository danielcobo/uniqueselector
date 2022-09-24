/**
 * Get id of element, in case multiple
 * element with same id, will return undefined
 * @param {HTMLElement} $el
 * @returns {string|undefined} id
 */
module.exports = function getId($el) {
  if ($el.id && document.querySelectorAll(`#${$el.id}`).length === 1) {
    return $el.id;
  }
};
