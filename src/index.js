const getId = require('./getId.js');
const getNth = require('./getNth.js');
const rmTrailing = require('@danielcobo/rmtrailing');

/**
 * Get unique selector for element
 * @public
 * @param {HTML element} $el
 * @param {undefined|boolean} [options.id=true]
 * @returns {string} unique selector
 */
module.exports = function uniqueSelector($el, options = { id: true }) {
  let selector = '';

  const toCheck = [$el];
  for (let i = 0; i < toCheck.length; ++i) {
    $item = toCheck[i];
    let id = getId($el);
    if (options?.id && id) {
      selector = `#${id} > ${selector}`;
      break;
    } else {
      const tag = $item.tagName.toLowerCase();
      const nth = getNth($item);
      if (tag !== 'body') {
        selector = `${tag}:nth-child(${nth}) > ${selector}`;
        toCheck.push($item.parentElement);
      }
    }
  }

  return rmTrailing(selector, ' > ');
};
