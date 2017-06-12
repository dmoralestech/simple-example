// let describe = require('mocha').describe;
// let before = require('mocha').before;
// let after = require('mocha').after;
// let it = require('mocha').it;
// let assert     = require('assert');
// let should     = require('should');
let chai = require('chai');
let assert = require('chai').assert;
let expect = require('chai').expect;

import reducer from './modelReducer';
import * as modelActions from '../actionCreators/modelActions';

describe('REDUCER: ', () => {

  const initialState = undefined;

  describe('modelReducer.js', () => {

    it('should return the current state when action actionConstants is of unknown', () => {
      expect(reducer(initialState, {})).to.deep.equal({models: []});
    });

    describe('ACTIONS.MODEL.INITIATE', () => {
      it('should return the current state because this does nothing', () => {
        expect(reducer(initialState, {})).to.deep.equal({models: []});
      });
    });

    describe('ACTIONS.MODEL.LOAD', () => {
      it("should replace array of models not touch the message", () => {
        let newState = {models: [{id: 300}]};
        Object.freeze(newState);
        expect(reducer(newState, modelActions.loadData([{id: 100}, {id: 200}]))).to.deep.equal({
          models: [{id: 100}, {id: 200}]
        });
      });
      it("should replace array of models not touch the message, test against merge", () => {
        let newState = {models: [{id: 300},{id: 400},{id: 500}]};
        Object.freeze(newState);
        expect(reducer(newState, modelActions.loadData([{id: 100}, {id: 200}]))).to.deep.equal({
          models: [{id: 100}, {id: 200}]
        });
      });
    });

  });
});
