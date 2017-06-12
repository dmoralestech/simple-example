const API_ROOT = `${process.env.API_URL||''}/api/v1.0/`;

function callApi(endpoint) {
        const fullUrl = (endpoint.indexOf(API_ROOT) === -1) ? API_ROOT + endpoint : endpoint;
        console.log('fullUrl',fullUrl);
        return fetch(fullUrl)
                 .then(function(response) {
                     if ( response.ok ) { // a boolean stating whether the response was successful (status in the range 200-299) or not.
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
 * @throws ServiceError
 */
export const fetchMakes        = (id = "*") => callApi(`makes/${id}`);
export const fetchModelsByMake = (id = "*") => callApi(`makes/${id}/models`);
export const fetchModel        = (id = "*") => callApi(`models/${id}`);
export const fetchCarOfTheWeek = ()        => callApi('caroftheweek/');
