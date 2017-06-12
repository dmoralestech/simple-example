/**
 * safeGet get a value out of an object with the key being a string of dot values.
 *
 * @param {*} obj - the object to get the value(s) out of.
 * @param {string} key - the dot noted path into the object ( note this will not work if the properties are 'aaa.bbb.fff' )
 * @param {*} [defaultVal] - the default value, if undefined.
 * @returns {*}
 */
export const safeGet = (obj, key, defaultVal) => {
  if ((obj === undefined) || (obj === null)) return defaultVal;
  if (typeof obj[key] !== 'undefined') return obj[key];
  return key.split('.').reduce(function (o, x) {
    return (typeof o === 'undefined' || o === null) ? ((typeof defaultVal !== 'undefined') ? defaultVal : o) : o[x];
  }, obj);
};

/**
 * convert a number to a string with commas.
 *
 * @param {string|number} num - the number to convert to Commas
 * @returns {string}
 */
export const numberWithCommas = ( num ) => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

export const addZeroes = ( num ) => num.toFixed(2);

export const currency =( num ) => '$' + num.toString();
