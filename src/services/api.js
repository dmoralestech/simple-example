const API_ROOT = `${process.env.API_URL || '/api/v1.0/' }`;

/**
 * A gne
 *
 *
 * @private
 * @param endpoint
 */
function callApi(endpoint) {
  const fullUrl = (endpoint.indexOf(API_ROOT) === -1) ? API_ROOT + endpoint : endpoint;
  return fetch(fullUrl, {method: 'GET'})
    .then(function (response) {
      if (response.ok) { // a boolean stating whether the response was successful (status in the range 200-299) or not.
        return response.json();
      }
      let e = new Error('Error: ' + response.message);
      e.status = response.status;
      throw e;
    })
}

/**
 * Fetch All Makes, no paging.
 * @function
 * @returns {[{id: number, name: string}]|[]}
 * @returns Promise
 */
export const fetchMakes = (id = "*") => callApi(`makes/${id}`);
/**
 * Fetch the all the Models of a Make by the Make ID
 * @function
 * @param {number|null} id - the Make Id, null implies all
 * @returns Promise
 */
export const fetchModelsByMake = (id = "*") => callApi(`makes/${id}/models`);
/**
 * Fetch all the models
 * @function
 * @param {number|null} id - the Model Id, null implies all
 * @returns Promise
 */
export const fetchModel = (id = "*") => callApi(`models/${id}`);
/**
 * Fetch the Car of the week
 * @function
 * @returns Promise
 */
export const fetchCarOfTheWeek = () => callApi('caroftheweek');
