// let describe = require('mocha').describe;
// let before = require('mocha').before;
// let after = require('mocha').after;
// let it = require('mocha').it;
// let assert     = require('assert');
// let should     = require('should');
let chai = require('chai');
let assert = require('chai').assert;
let expect = require('chai').expect;

import reducer from './carOfTheWeekReducer';
import * as carOfTheWeekActions from '../actionCreators/carOfTheWeekActions';

describe('REDUCER: ', () => {

  const initialState = undefined;

  describe('carOfTheWeekReducer.js', () => {

    it('should return the current state when action actionConstants is of unknown', () => {
      expect(reducer(initialState, {})).to.deep.equal({cotw: { review: '', modelId: -1 } });
    });

    describe('ACTIONS.COTW.INITIATE', () => {
      it('should return the current state because this does nothing', () => {
        expect(reducer(initialState, carOfTheWeekActions.initiateRequest())).to.deep.equal({cotw: { review: '', modelId: -1 } });
      });
    });

    describe('ACTIONS.COTW.LOAD', () => {
      it("should replace the cotw and not touch the message", () => {
        let stateFulInitialState = {cotw: {id:100} };
        Object.freeze(stateFulInitialState);
        expect(reducer(stateFulInitialState, carOfTheWeekActions.loadData({id: 200}))).to.deep.equal({
          cotw: {id: 200}
        });
      });
    });

  });
});
