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
 * Set the selected Make.
 * @function
 * @param {*} make - the data to store.
 */
export const setMake = make => ({
  type: ACTIONS.SELECTION.MAKE,
  value: make
});

/**
 * Set the selected Model.
 * @function
 * @param {*} model - the data to store.
 */
export const setModel = model => ({
  type: ACTIONS.SELECTION.MODEL,
  value: model
});

/**
 * Reset Make and Model Selections.
 * @function
 */
export const resetMakeAndModel = () => ({
  type: ACTIONS.SELECTION.RESET
});
