/**
 * Get nth-child position of element
 * @param {HTMLElement} $el
 * @returns {number} nth position
 */
module.exports = function getNth($el) {
  let nth;
  [...$el.parentElement.children].find(function ($child, i) {
    nth = i + 1;
    return $child === $el;
  });
  return nth;
};
