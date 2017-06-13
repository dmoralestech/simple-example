/**
 * Actions are the mechanism you use to communicate with the Dispatcher on the Store.
 *
 * It wraps the data with a type and in this case a value, replicating what we would see in a strongly typed language like Java as an interface.
 *
 * Lessons Learned:
 *   1.) Never make your action form the data for a reducer in an expected shape. Because this creates tight coupling ( an Anti-Pattern )
 *   2.) Consistence wins, use one convention and stick with it. For example, the action specification does not require a 'value:*' but rather '*'. This creates deviations and can expand complexity for maintenance and refactoring.
 */
import ACTIONS from './actionTypes/index';

/**
 * Initiate the workflow of requesting data for all the models of a specific make.
 * @function
 * @param {number|null} id - the id of the make.
 */
export const fetchModeldByMake = id => ({
  type: ACTIONS.MODEL.INITIATE.BYMAKEID,
  value: id
});

/**
 * Initiate the workflow of requesting data for a model by a specific id or if null all models.
 * @function
 * @param {number|null} id - the id of the model.
 */
export const fetchModelByModelId = id => ({
  type: ACTIONS.MODEL.INITIATE.BYID,
  value: id
});

/**
 * Load the data (models) into the store. Used by a saga, after requestSuccess is called.
 * @function
 * @param {*} data - the data to store.
 */
export const loadData = data => ({
  type: ACTIONS.MODEL.LOAD,
  value: data
});
